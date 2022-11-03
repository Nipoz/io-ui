<template>
  <div class="content">
    <div class="left-content">
      <ul>
        <!-- :class="{'active':thisRowID === index}" -->
        <li v-for="item,index in routerList[0].children" 
            :key=index
            :class="{'active':thisRowID === index}"
            @click="ToggleRouter(item,index)"
            ref="whyMe"
        >
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="right-content">
      <!-- <router-view v-if="isRouterAlive"></router-view> -->
      <router-view :key="timeKey"></router-view>
    </div>
  </div>
</template>

<script setup>
import { computed, ref,inject,provide,onBeforeUnmount,onMounted,watch  } from 'vue';
import routerList from "../router/routerPage/page.js"
import { useRouter,useRoute } from 'vue-router';

//console.log(routerList[0].children);
//初始化第一个数据 为active
const thisRowID = ref(0);
//初始化路由对象
const router = useRouter();
//初始化路由数据
const route = useRoute();


//切换路由
const ToggleRouter = (item,index) => {
  //点击后改变thisRowID
  thisRowID.value = index;
  //console.log('ToggleRouter+',item.id);
  //根据名字跳转路由
  router.push({name:item.name});
  //console.log('route.id',route.meta.id);
  localStorage.setItem('thisRowID',thisRowID.value);
}

const timeKey = computed(() => {
  return route.fullPath;
});


</script>

<style lang="scss" scoped>
  .content{
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #fff;
    .left-content{
      width: 18%;
      height: 93vh;
      background-color: #fff;
      overflow-y: scroll;
      box-shadow: 0 0 .9375rem rgba($color: #ccc, $alpha: 0.4);
      border-radius: 0.625rem;
      ul{
        list-style: none;
        padding: 0;
        margin-left: .9375rem;
        li{
          margin-top: .3125rem;
          padding: 0.625rem;
          cursor: pointer;
          &:hover{
            /*background-color: rgba($color: #15c3f9, $alpha: 0.3);*/
            color: rgba($color: #15c3f9, $alpha: 0.5);
            transition: .25s;
          }
        }
        li.active{
          /*background-color: rgba($color: #15c3f9, $alpha: 0.3);*/
          color: rgba($color: #15c3f9, $alpha: 0.5);
          transition: .3s;
          border-right: 4px solid #15c3f9;
        }
      }
    }
    .left-content::-webkit-scrollbar{
      display: none;
    }
    .right-content{
      width: 79%;
      height: 93vh;
      background-color: #fff;
      overflow-y: scroll;
      box-shadow: 0 0 .9375rem rgba($color: #ccc, $alpha: 0.4);
      border-radius: 0.625rem;
      box-sizing: border-box;
      padding-left: 1.875rem;
    }
    .right-content::-webkit-scrollbar{
      display: none;
    }
  }
</style>