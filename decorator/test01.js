class Model1 {
    getData () {
        return [
            {
                id: 1,
                name: "Niko"
            }, {
                id: 2,
                name: "Bellic"
            }
        ]
    }
}

function wrap (Model, key) {
    // 获取Model Class对应的原型
    let target = Model.prototype;
    // 获取Model Class原型上的实例函数的对应的描述符
    let descriptor = Object.getOwnPropertyDescriptor(target, key);

    // 生成新的函数, 并添加耗时统计逻辑
    let log = function (...arg) {
        let start = new Date().valueOf();
        try {
            return descriptor.value.apply(this, ...arg);
        } finally {
            let end = new Date().valueOf();
            console.log(`Start: ${start}  <=====> End: ${end}, Consume: ${end-start}`);
        }
    };

    // 将新生成的函数log, 添加到Model的原型target上, 注意: 是替换掉descriptor的value
    Object.defineProperty(target, key, {
        ...descriptor,
        value: log          // 覆盖descriptor中的value
    })
}

// wrap函数的目的简要概括就是: 使用新生成的函数log, 替换掉Model1中点getData
wrap(Model1, "getData");
// 但是调用, 还是调用getData()
console.log(Model1.prototype.getData());