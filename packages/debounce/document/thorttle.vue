//节流
const useFunction = throttle(function(){
    console.log('coming');
    //在写一些逻辑代码
},delay)

const throttle = (fn, delay) => {
    let valid = true;
    return function () {
        let context = this;
        let args = arguments;
        if (!valid) {
            return false;
        }
        valid = false;
        setTimeout(() => {
            //console.log('coming');
            //fn();
            fn.apply(context, args);
            valid = true;
        }, delay);
    };
};

export default throttle;