<template>
    <div>
        <div class="topContet">
            <io-input v-model="input" placeholder="搜索文本" width="300px" icon="iconfont icon-sousuo" direction="left">
                <template v-slot:components>
                    <io-button type="main" size="mid" icon="iconfont icon-sousuo" width="80px" height="40px" @click="searchKeyword">搜索
                    </io-button>
                </template>
            </io-input>
        </div>

        <div class="du_yi_wu_er">
            <precode subassemblyName="regularCheck" ariseName="textMatch" >
            </precode>
        </div>
        

    </div>
</template>

<script setup>
import precode from "@/components/precode.vue";
import { ref, onMounted ,nextTick} from "vue";
let input = ref("");
let content = ref(null);

onMounted(() => {
    setTimeout(() => {
        content.value = document.getElementsByTagName("code")[0].innerHTML;
            //console.log(content.value);
    }, 1000); 

}); 
const searchKeyword = () => {
    //console.log(input.value);
    if (input.value == "") {
        return;
    }
    let reg = new RegExp(input.value, "g");
    //console.log('reg',reg);
    let newContent = content.value.replace(reg, `<span class="sir_ThisWay" style="color: blue;font-size: 24px;text-decoration:underline;">${input.value}</span>`);
    //console.log(newContent);
    document.getElementsByTagName("code")[0].innerHTML = newContent;
    let X = document.getElementsByClassName("sir_ThisWay")[0].offsetLeft;
    let Y = document.getElementsByClassName("sir_ThisWay")[0].offsetTop-200;
    //console.log(X,Y);
    document.getElementsByClassName("right-content")[0].scrollTo(X, Y);
};
</script>

<style lang="scss" scoped>
.topContet {
    width: 100%;
    height: 70px;
    margin-top: 20px;
    background-color: #fff;
    position: sticky;
    position: -webkit-sticky;
    top: 0;

    div {
        margin-top: 20px;
        position: absolute;
        right: 5%;
    }
}
.sir_ThisWay{
    transition: .5s;
    animation: sir_ThisWay_ComeHere 2s;
}
@keyframes sir_ThisWay_ComeHere {
    0% {
        font-size: 20px;
    }
    50% {
        font-size: 30px;
    }
    100% {
        font-size: 20px;
    }
}
</style>