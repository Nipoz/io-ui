<template>
  <div class="preViewCode">
    <highlightjs autodetect :code="Code" />
  </div>
</template>

<script setup>

import { ref,onMounted } from 'vue';
  const props = defineProps({
    subassemblyName:{
      type: String,
      default: '',
      require:true
    },
    ariseName:{
      type: String,
      default: '',
      require:true
    },
  });
  const Code = ref('');
  async function getCodeView(){
    const isDev = import.meta.env.MODE === 'development';
    if (isDev) {
      Code.value = (
        await import(/* @vite-ignore */ `../../packages/${props.subassemblyName}/document/${props.ariseName}.vue?raw`)
      ).default;
    } else {
      Code.value = await fetch(`/packages/${props.subassemblyName}/document/${props.ariseName}.vue`).then((res) => res.text());
    }
  }
  onMounted(() => {
    getCodeView();
    //console.log("props.subassemblyName:",props.subassemblyName);
  })
</script>

<style lang="scss" scoped>
  pre{
    background-color: #f9f9f9;
    border-radius: .375rem;
    margin-top: 1.5rem;
    font-size: 1rem;
    padding-left: .625rem;
    font-weight: 500;
  }
</style>