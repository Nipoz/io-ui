//防抖
const useFunction = debounce(function(){
    console.log('coming');
    //在写一些逻辑代码
},delay)

const debounce = (fn, delay) => {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
};

export default debounce;