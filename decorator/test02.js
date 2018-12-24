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

function wrap (decorator) {
    return function (Model, key) {
        let target = Model.prototype;
        let descriptor = Object.getOwnPropertyDescriptor(target, key);

        decorator(target, key, descriptor);
    }
}

let log = function (target, key, descriptor) {
    Object.defineProperty(target, key, {
        ...descriptor,
        value: function (...arg) {
            let start = new Date().valueOf();
            try {
                return descriptor.value.apply(this, ...arg);
            } finally {
                let end = new Date().valueOf();
                console.log(`Start: ${start}  <=====> End: ${end}, Consume: ${end-start}`);
            }
        }
    })
};

let seal = function (target, key, descriptor) {
    Object.defineProperty(target, key, {
        ...descriptor,
        writable: false
    })
};

log = wrap(log);

log(Model1, "getData");

console.log(new Model1().getData());