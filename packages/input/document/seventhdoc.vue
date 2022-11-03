<io-input v-model="input" placeholder="输入内容后等待2秒" isDebounce :delay=2000></io-input>

<io-input v-model="input" placeholder="一直输入内容时,间隔1秒" isThorttle :delay=1000></io-input>

<script setup>

    import { ref } from 'vue'

    let input = ref("")
    
</script>