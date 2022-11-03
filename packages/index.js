import ioButton from './button/index';
import ioInput from './input/index';
import ioTextarea from './textarea/index';
import ioSelect from './select/index';
const components = [
    ioButton,
    ioInput,
    ioTextarea,
    ioSelect
];
export const install = app=>{
    components.forEach(component => {
        app.use(component);
    });
};
const ioUI ={
    install,
};
export default ioUI;