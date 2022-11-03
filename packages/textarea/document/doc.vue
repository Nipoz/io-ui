<template>
    <div>
        <p>默认样式</p>
        <io-textarea v-model="input" placeholder="come in"></io-textarea>
        <precode subassemblyName="textarea" ariseName="first" >
        </precode>

        <p>禁用样式</p>
        <io-textarea v-model="input" disabled></io-textarea>
        <precode subassemblyName="textarea" ariseName="second" >
        </precode>

        <p>显示字数限制</p>
        <io-textarea v-model="input" showNumberLimit></io-textarea>
        <precode subassemblyName="textarea" ariseName="third" >
        </precode>

        <p>自适应高度1 在特定高度内自适应高度</p>
        <io-textarea v-model="input" showNumberLimit isAutosize :maxRows=200></io-textarea>
        <precode subassemblyName="textarea" ariseName="forth" >
        </precode>

        <p>自适应高度2 全适应高度</p>
        <io-textarea v-model="input" showNumberLimit isAutosize></io-textarea>
        <precode subassemblyName="textarea" ariseName="fifth" >
        </precode>

        <p style="margin-bottom: 150px;"></p>
    </div>
</template>

<script setup>
import precode from "@/components/precode.vue";
import { ref } from "vue";
let input = ref("");
</script>

<style lang="scss" scoped>

</style>