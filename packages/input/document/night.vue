<io-input v-model="input" placeholder="请输入内容" width="300px">
    <template v-slot:prepend>Http://</template>
</io-input>

<io-input v-model="input" placeholder="请输入内容" width="300px">
    <template v-slot:append>.com</template>
</io-input>

<io-input v-model="input" placeholder="请输入内容" width="300px"  icon="iconfont icon-sousuo" direction="left">
    <template v-slot:components>
        <io-button type="main" size="mid" icon="iconfont icon-sousuo" width="80px" height="40px">搜索</io-button>
    </template>
</io-input>

<script setup>

    import { ref } from 'vue'

    let input = ref("")
    
</script>