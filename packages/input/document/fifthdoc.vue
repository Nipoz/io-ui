<io-input v-model="input" placeholder="请输入内容" width="450px" fontSize="16px" canClear></io-input>

<script setup>

    import { ref } from 'vue'

    let input = ref("")
    
</script>