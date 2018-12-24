import React, { Component } from "react";
import "babel-polyfill";        // 否则, async componentDidMount报错

export default (loadComponent, placeholder="正在加载") => {
    return class AsyncComponent extends Component {
        constructor () {
            super();
            this.unmount = false;
            this.state = {
                Child: null
            }
        }

        async componentDidMount() {
            const { default: Child } = await loadComponent();
            if (this.unmount) return;
            this.setState({
                Child
            })
        }

        componentWillUnmount() {
            this.unmount = true;
        }

        render () {
            const { Child } = this.state;
            return (
                Child ?
                    <Child {...this.props}></Child> : placeholder
            )
        }
    }
}