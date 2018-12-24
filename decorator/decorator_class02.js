// 修改原有属性的描述符
@seal
class Person {
    sayHi() {}
}

function seal (target) {
    let descriptor = Object.getOwnPropertyDescriptor(target.prototype, "sayHi");
    Object.defineProperty(target.prototype, "sayHi", {
        ...descriptor,
        writable: false
    })
}

Person.prototype.sayHi() = 1;       // 报错了欧.......