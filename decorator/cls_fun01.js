class Model {
    constructor () {

    }

    @instance
    method1() {}
    @instance
    method2 = () => {};

    @static_
    static method3 () {}
    @static_
    static method4 = () => {};
}

// function instance (target, key, descriptor) {
//     console.log("instance => \n");
//     console.log("\t target => ", target);
//     console.log("\t key => ", key);
//     console.log("\t descriptor => \n", descriptor);
// }
//
// function static_ (target, key, descriptor) {
//     console.log("static => \n");
//     console.log("\t target => ", target);
//     console.log("\t key => ", key);
//     console.log("\t descriptor => \n", descriptor);
// }

function instance (target) {
    // target是Model{}, 是原型, 不是构造函数
    console.log(target);    // Model{}
}
function static_ (target) {
    // target是构造函数, 不是原型, target.prototype是原型
    console.log(target.prototype);
}