<template>
  <div class="contentCode">
    <span>默认输入框</span>
    <div class="mariginContent">
      <io-input v-model="input" placeholder="请输入内容" type="textarea"></io-input>
      {{ input }}
    </div>
    <precode
      subassemblyName="input"
      ariseName="firstdoc"
    >
    </precode>

    <span>禁用输入框</span>
    <div class="mariginContent">
      <io-input v-model="input1" placeholder="请输入内容" disabled></io-input>
    </div>
    <precode
      subassemblyName="input"
      ariseName="seconddoc"
    >
    </precode>

    
    <span>可清空输入框</span>
    <div class="mariginContent">
      <io-input v-model="input2" placeholder="请输入内容" canClear></io-input>
    </div>
    <precode
      subassemblyName="input"
      ariseName="thirddoc"
    >
    </precode>

    <span>带图标输入框</span>
    <div class="mariginContent">
      <io-input v-model="input3" placeholder="请输入内容" icon="icon-poweroff"></io-input>
    </div>
    <div class="mariginContent">
      <io-input v-model="input3" placeholder="请输入内容" icon="icon-poweroff" direction="left"></io-input>
    </div>
    <precode
      subassemblyName="input"
      ariseName="forthdoc"
    >
    </precode>

    <span>防抖与节流 输入框(不绑定delay时delay默认1000ms)</span>
    <div class="mariginContent">
      <io-input v-model="input6" placeholder="输入内容后等待2秒" isDebounce :delay=2000></io-input>
      {{ input6 }}
    </div>
    <div class="mariginContent">
      <io-input v-model="input7" placeholder="一直输入内容时,间隔1秒" isThorttle :delay=1000></io-input>
      {{ input7 }}
    </div>
    <precode
      subassemblyName="input"
      ariseName="seventhdoc"
    >
    </precode>

    <span>观察密码输入框</span>
    <div class="mariginContent">
      <io-input v-model="input4" placeholder="请输入内容" viewPassword></io-input>
    </div>
    <precode
      subassemblyName="input"
      ariseName="sixthdoc"
    >
    </precode>

    <span>自定义字体大小、宽度的输入框</span>
    <div class="mariginContent">
      <io-input v-model="input5" placeholder="请输入内容" width="450px" fontSize="16px" canClear></io-input>
    </div>
    <precode
      subassemblyName="input"
      ariseName="fifthdoc"
    >
    </precode>

    <span>限制字数限制 文本框</span>
    <div class="mariginContent">
      <io-input v-model="input8" placeholder="请输入内容" showNumberLimit></io-input>
    </div>
    <precode
      subassemblyName="input"
      ariseName="eight"
    >
    </precode>

    <span>前置内容与后置内容</span>
    <div class="mariginContent">
      <io-input v-model="input9" placeholder="请输入内容" width="300px">
        <template v-slot:prepend>Http://</template>
      </io-input>
    </div>
    <div class="mariginContent">
      <io-input v-model="input9" placeholder="请输入内容" width="300px">
        <template v-slot:append>.com</template>
      </io-input>
    </div>
    <span>建议给组件插槽自定义宽度例如 width="80px"</span>
    <div class="mariginContent">
      <io-input v-model="input9" placeholder="请输入内容" width="300px" icon="iconfont icon-sousuo" direction="left">
        <template v-slot:components>
          <io-button type="main" size="mid" icon="iconfont icon-sousuo" width="80px" height="40px">搜索</io-button>
        </template>
      </io-input>
    </div>
    <precode
      subassemblyName="input"
      ariseName="night"
    >
    </precode>
    
    <div class="spanClass">后续内容开发中</div>
    <span>相关参数 (若绑定的参数为Number类型则需要加冒号比如:delay=1000)</span>
    <iotable :Objdata="Objdata"></iotable>

    <span>相关事件</span>
    <iotable1 :Objdata="Objdata1"></iotable1>

    <span>插槽</span>
    <iotable2 :Objdata="Objdata2"></iotable2>
  </div>


  
</template>

<script setup>
import { ref,onMounted,reactive } from 'vue'
import iotable from "@/components/table.vue";
import iotable1 from "@/components/table1.vue";
import iotable2 from "@/components/table2.vue";
import precode from "@/components/precode.vue";
let input = ref("") 
let input1 = ref("")
let input2 = ref("")
let input3 = ref("")
let input4 = ref("")
let input5 = ref("")
let input6 = ref("")
let input7 = ref("")
let input8 = ref("")
let input9 = ref("")
let Objdata = reactive([
  ["type","否","文本的类型","String",'可选值为 text、password、url、email、date',"text",],
  ["v-model", "是", "绑定值", "String/Number", "", ""],
  ["maxlength", "否", "最大输入长度", "Number", "", "100"],
  ["minlength", "否", "最小输入长度", "Number", "", "0"],
  ["disabled", "否", "要不要禁用掉", "Boolean", "", "false"],
  ["placeholder", "否", "输入框提示文本", "String", "", "请输入内容"],
  ["canClear","否","是否可清空","Boolean","","false"],
  ["viewPassword", "否", "是否显示切换密码图标", "Boolean", "", "false"],
  ["icon","否","要不要加个icon图标","String","在icon图标页中选择icon",""],
  ["direction","否","icon图标的方向","String","可选值为 left、right","right"],
  ["width", "否", "输入框长度", "String", "", "250px"],
  ["isDebounce", "否", "是否开启防抖", "Boolean", "", "false"],
  ["isThorttle", "否", "是否开启节流", "Boolean", "", "false"],
  ["delay", "否", "防抖和节流的延迟", "Number", "", "1000"],
  ["autocomplete", "否", "原生属性，自动补全", "String", "on, off", "off"],
  ["name", "否", "原生属性", "String", "", ""],
  ["readonly", "否", "原生属性，是否只读", "Boolean", "", "false"],
  ["max", "否", "原生属性，设置最大值", "", "", ""],
  ["min", "否", "原生属性，设置最小值", "", "", ""],
  ["step", "否", "原生属性，设置输入字段的合法数字间隔", "", "", ""],
  ["form", "否", "原生属性", "String", "", ""],
]);
let Objdata1 = reactive([
  ["input","否","在 Input 值改变时触发","(value: string | number)",],
  ["change","否","仅在输入框失去焦点或用户按下回车时触发","(value: string | number)",],
  ["focus","否","在 Input 获得焦点时触发","(event: Event)",],
  ["blur","否","在 Input 失去焦点时触发","(event: Event)",],
]);
let Objdata2 = reactive([
  ["prepend","输入框前置内容",],
  ["append","输入框后置内容",],
  ["components","输入框后置组件",],
  ["prependCompent","待开发",],
]);
/*function testFocus(){
  console.log("focus",input.value)
}
function testBlur(){
  console.log("blur",input.value)
} */
onMounted(()=>{
  
})

</script>

<style lang="scss" scoped>
.contentCode{
  .mariginContent{
    margin: 30px;
  }

  span {
      margin-top: 2.25rem;
      margin-bottom: 2.25rem;
    }
}
</style>