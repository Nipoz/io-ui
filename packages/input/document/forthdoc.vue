<io-input v-model="input" placeholder="请输入内容" icon="icon-poweroff"></io-input>

<io-input v-model="input" placeholder="请输入内容" icon="icon-poweroff" direction="left"></io-input>

<script setup>

    import { ref } from 'vue'

    let input = ref("")
    
</script>