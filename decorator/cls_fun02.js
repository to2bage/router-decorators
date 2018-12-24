class Model {
    @log1
    getData1 (){}

    @log2
    getData2 (){}
}

function log1(target, name, descriptor) {
    return {
        ...descriptor,
        value (...args) {
            let start = new Date().valueOf();
            try {
                return descriptor.value.apply(this, ...args);
            } finally {
                let end = new Date().valueOf();
                console.log(`Start: ${start}  <=====> End: ${end}, Consume: ${end-start}`);
            }
        }
    }
}

function log2 (target, name, descriptor) {
    let func = descriptor.value;

    descriptor.value = function (...args) {
        let start = new Date().valueOf();
        try {
            return func.apply(this, ...args);
        } finally {
            let end = new Date().valueOf();
            console.log(`Start: ${start}  <=====> End: ${end}, Consume: ${end-start}`);
        }
    }
}

new Model().getData1();
new Model().getData2();