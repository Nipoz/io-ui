<template>
  <div class="buttonContent">
    <div class="buttonContent_left">
      <p>默认按钮</p>
      <div class="mariginbutton">
        <io-button type="">默认按钮</io-button>
        <io-button type="main">主要按钮</io-button>
        <io-button type="success">成功按钮</io-button>
        <io-button type="warning">警告按钮</io-button>
        <io-button type="danger">危险按钮</io-button>
        <io-button type="disabled" disabled>禁用按钮</io-button>
      </div>
      <p>禁用按钮</p>
      <div class="mariginbutton">
        <io-button type="" disabled>默认按钮</io-button>
        <io-button type="main" disabled>主要按钮</io-button>
        <io-button type="success" disabled>成功按钮</io-button>
        <io-button type="warning" disabled>警告按钮</io-button>
        <io-button type="danger" disabled>危险按钮</io-button>
        <io-button type="disabled" disabled>禁用按钮</io-button>
      </div>
      <p>圆角按钮</p>
      <div class="mariginbutton">
        <io-button type="" round>默认按钮</io-button>
        <io-button type="main" round>主要按钮</io-button>
        <io-button type="success" round>成功按钮</io-button>
        <io-button type="warning" round>警告按钮</io-button>
        <io-button type="danger" round>危险按钮</io-button>
        <io-button type="disabled" round disabled>禁用按钮</io-button>
      </div>
      <p>不同尺寸</p>
      <div class="mariginbutton thisss">
        <io-button type="" size="big">默认按钮</io-button>
        <io-button type="" size="mid">默认按钮</io-button>
        <io-button type="" size="small">默认按钮</io-button>
        <io-button type="" size="mini">默认按钮</io-button>
      </div>
      <p>圆形按钮</p>
      <div class="mariginbutton">
        <io-button type="" circle icon="iconfont icon-delete"></io-button>
        <io-button type="main" circle icon="iconfont icon-delete"></io-button>
        <io-button
          type="success"
          circle
          icon="iconfont icon-delete"
        ></io-button>
        <io-button
          type="warning"
          circle
          icon="iconfont icon-delete"
        ></io-button>
        <io-button type="danger" circle icon="iconfont icon-delete"></io-button>
        <io-button
          type="disabled"
          circle
          icon="iconfont icon-delete"
        ></io-button>
      </div>
      <p>图形按钮</p>
      <div class="mariginbutton">
        <io-button type="" icon="iconfont icon-delete">默认按钮</io-button>
        <io-button type="main" icon="iconfont icon-delete">主要按钮</io-button>
        <io-button type="success" icon="iconfont icon-delete"
          >成功按钮</io-button
        >
        <io-button type="warning" icon="iconfont icon-delete"
          >警告按钮</io-button
        >
        <io-button type="danger" icon="iconfont icon-delete"
          >危险按钮</io-button
        >
        <io-button type="disabled" disabled icon="iconfont icon-delete"
          >禁用按钮</io-button
        >
      </div>
      <p>加载按钮</p>
      <div class="mariginbutton">
        <io-button type="main" loading>默认按钮</io-button>
      </div>
      <precode
        subassemblyName="button"
        ariseName="firstdoc"
        v-show="isCode"
      ></precode>
      <div class="thisz">
        <io-button @click="showCode()" type="success">{{
          codeContent
        }}</io-button>
      </div>
      <p>相关参数</p>
      <iotable :Objdata="Objdata"></iotable>
    </div>
  </div>
</template>

<script setup>
import precode from "@/components/precode.vue";
import iotable from "@/components/table.vue";
import viewCode from "@/hook/showCode.js";
import { ref,reactive } from "vue";
/* let isCode = ref(false);
let codeContent = ref("查看代码");
function showCode() {
  isCode.value = !isCode.value;
  isCode.value
    ? (codeContent.value = "收起代码")
    : (codeContent.value = "查看代码");
} */

const { isCode, codeContent, showCode } = viewCode();
let Objdata = reactive([
  [
    "type",
    "否",
    "按钮的样式类型",
    "String",
    '" "/default/main/success/warning/danger/disabled',
    "default",
  ],
  ["width", "否", "宽度", "String", "", "auto"],
  ["height", "否", "高度", "String", "", "auto"],
  ["disabled", "否", "判断按钮要不要禁用掉", "Boolean", "", "false"],
  ["round", "否", "判断按钮要不要圆形", "Boolean", "", "false"],
  [
    "size",
    "否",
    "想要哪种大小的按钮",
    "String",
    "big/mid/small/mini",
    "mid",
  ],
  ["circle", "否", "圆形的按钮", "Boolean", "", "false"],
  [
    "icon",
    "否",
    "要不要加个icon图标",
    "String",
    "在icon图标页中选择icon",
    "",
  ],
  ["loading", "否", "是否加载按钮", "Boolean", "", "false"],
]);
function testclick() {
  alert("点击了按钮");
}
/* let Objdata = reactive({
  parameter: ['type','width','height','disabled','round','size','circle','icon','loading'],
  require: ['否','否','否','否','否','否','否','否','否'],
  commit: ['按钮的样式类型',
            '宽度',
            '高度',
            '判断按钮要不要禁用掉',
            '判断按钮要不要圆形',
            '想要哪种大小的按钮',
            '圆形的按钮',
            '要不要加个icon图标',
            '是否加载按钮'],
  type: ['String','String','String','Boolean','Boolean','String','Boolean','String','Boolean'],
  enableValue: ['" "/default/main/success/warning/danger/disable',
                '',
                '',
                '',
                '',
                'big/mid/small/mini',
                '',
                '在icon图标页中选择icon',
                ''],
  defaultValue: ['default','auto','auto','false','false','mid','false','','false'],
}); */
</script>

<style lang="scss" scoped>
.buttonContent {
  .buttonContent_left {
    p {
      margin-top: 2.25rem;
      margin-bottom: 2.25rem;
    }
    .thisz { 
      button{
        width: 60% !important;
        text-align: center;
      }
    }
  }
}

.thisss {
  padding-left: 0.9375rem;

  button:first-child {
    margin-right: 2.5rem !important;
  }

  button:nth-child(3) {
    margin-right: 0 !important;
  }
}

.mariginbutton {
  display: flex;
  margin-bottom: 1.125rem;
}

#ioButton {
  margin-right: 15px;
}
</style>
