import {ref} from 'vue'
const viewCode = () => {
    let isCode = ref(false)
    let codeContent = ref("查看代码");
    const showCode = () => {
        isCode.value = !isCode.value;
        isCode.value ? (codeContent.value = "收起代码") : (codeContent.value = "查看代码");
    }
    return {isCode, codeContent, showCode}
}
export default viewCode