<template>
    <table>
        <tr>
          <th>事件</th>
          <th>必须</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
        <tr v-for="(item,index) in props.Objdata">
          <td v-for="(items,index) in item">{{items}}</td>
        </tr>
      </table>
</template>

<script setup>
//import {reactive} from "vue";
const props = defineProps({
    Objdata:{
        type:Array,
        default:()=>{}
    }
})
//console.log('Objdata',props.Objdata[0]);
</script>

<style lang="scss" scoped>
table {
      width: 90%;
      border-collapse: collapse;
      border: 1px solid #ebeef5;
      margin-bottom: 1.875rem;

      th {
        border: 1px solid #ebeef5;
        padding: 0.625rem 1.25rem;
        background-color: #f9fafc;
        color: #606266;
        font-size: 1rem;
        text-align: left;
      }

      td {
        border: 1px solid #ebeef5;
        padding: 0.625rem 1.25rem;
        color: #606266;
        font-size: 0.9375rem;
        text-align: left;
      }
    }
</style>