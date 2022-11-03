<template>
    <div style="width: 100%;height: 100vh;">
        <iframe :src="src" frameborder="0" style="width: 100%;height: 100vh;" scrolling="auto"></iframe>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
let src = ref('')
onMounted(()=>{
    src.value = 'src/assets/font/demo_index.html'
    //console.log("src:",src);
})
</script>

<style lang="scss" scoped>

</style>