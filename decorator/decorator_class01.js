// 新增属性
@name
class Person {
    sayHi () {
        console.log(`My name is: ${this.name}`);
    }
}

// 创建一个继承自Preson的匿名类
// 直接返回并替换掉原有的构造函数
function name (constructor) {
    return class extends constructor{
        name = "Niko"
    }
}
new Person().sayHi();

// 以上的写法: 等价于下面的写法
// target: Person
// function name (target) {
//     return class extends target {
//         constructor() {
//             super();
//             this.name = "niko";
//         }
//     }
// }
// new Person().sayHi();

// function name (target) {
//     // target就是Person的构造函数, target.prototype才是Person
//     console.log("target => ", target);      //  function Person() {}
//     console.log("target.prototype => ", target.prototype);  // Person {}
//     target.prototype["name"] = "niko";
// }
// new Person().sayHi();