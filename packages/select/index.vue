<template>
    <div :class="ioClass">
        <input 
            type="text"  
            :readonly="isSearch"
            :placeholder="placeholder"
            @focus="handleFocus"
            @blur="handelBlur"
            value="">
        <!-- <div class="io-select-dropdown iconfont icon-arrow-down" ref="tran"></div> -->
        <div class="io-select-item">
            <li>this is my data</li>
            <li>this is my data</li>
            <li>this is my data</li>
            <li>this is my data</li>
            <li>this is my data</li>
            <li>this is my data</li>
            <li>this is my data</li>
            <li>this is my data</li>
            <li>this is my data</li>
            <li>this is my data</li>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ioSelect",
    };
</script>
<script setup>
    import { computed, ref ,onMounted , useSlots } from "vue";
    const emit = defineEmits(["focus", "blur"]);
    const props = defineProps({


        width: {
            type: String,
            default: "auto",
        },
        height: {
            type: String,
            default: "auto",
        },
        placeholder: {
            type: String,
            default: "请选择",
        },
        isSearch: {
            type: Boolean,
            default: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    })
    let tran = ref();
    let isTouchFocus = ref(false);
    const handleFocus = (e) => {
        if(!props.disabled){
            e.currentTarget.style.border = '1px solid #15c3f9';
            tran.value.style.transform = 'rotate(180deg)';
        }
        emit("focus",e)
    }
    const handelBlur = (e) =>{
        e.currentTarget.style.border = '1px solid #e6e6e6';
        tran.value.style.transform = 'rotate(0deg) translateY(-50%)';
        emit("blur",e)
    }
    const ioClass = computed(() => {
        return [
            "io-select",
        ]
    });
</script>

<style lang="scss" scoped>
.io-select{
    min-width: 12.5rem;
    min-height: 2.8125rem;
    position: relative;
    width: v-bind('props.width');
    transition: 0.5s;
    box-shadow: 0px 0px 20px rgba($color: #ccc, $alpha: 0.10);
    display: inline-block;
    input{
        width: 100%;
        height: 100%;
        border: 1px solid #e6e6e6;
        outline: none;
        border-radius: .25rem;
        padding-right: 2.125rem;
        padding-left: .625rem;
        padding-top: .625rem;
        padding-bottom: .625rem;
        box-sizing: border-box;
        background: transparent;
        font-size: .875rem;
        transition: 0.5s;
        color: $textcolor;
        cursor: pointer;
        letter-spacing: .5px;
    }
    input::placeholder{
        font-size: 14px;
        color: $textcolor;
        opacity: .5;
    }
    .io-select-dropdown{
        width: 12px;
        height: 12px;
        color: $textcolor;
        opacity: .5;
        position: absolute;
        right: 12px;
        top: 40%;
        transform: translateY(-50%);
        transform-origin: center center;
        cursor: pointer;
        transition: .3s;
        &:hover{
            color: $main;
        }
    }
    .io-select-item{
        position: absolute;
        width: 100%;
        height: auto;
        max-height: 15.625rem;
        overflow-y: overlay;
        overflow-x: hidden;
        top:3.4375rem;
        border-radius: .375rem;
        box-shadow: 0px 0px 10px rgba($color: #000, $alpha: 0.07);
        li{
            width: 100%;
            height: 2.5rem;
            line-height: 2.5rem;
            padding-left: 1.1rem;
            font-size: .8125rem;
            color: $textcolor;
            cursor: pointer;
            list-style: none;
            transition: .4s;
            &:hover{
                background: #f5f5f5;
            }
        }
    }
    .io-select-item::-webkit-scrollbar{
        width: .1875rem;
    }
    .io-select-item::-webkit-scrollbar-thumb{
        background: #e6e6e6;
        border-radius: .3125rem;
    }
    .io-select-item::-webkit-scrollbar-track{
        background: transparent;
    }

}
</style>