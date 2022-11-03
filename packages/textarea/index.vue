<template>
    <div :class="ioClass">
        <textarea 
            :value="modelValue" 
            @input="chooseInput"
            @focus="handleFocus"
            @blur="handelBlur"
            @change="handleChange"
            :placeholder="placeholder"
            :disabled="disabled"
            :maxlength="maxlength"
            :minlength="minlength"
            :cols="cols" 
            :class="textareaClass"
            :rows="rows"
            ref="thisTextarea">
        </textarea>
        <p>
            <span class="numberLimit" v-if="showNumberLimit">{{ minLength }}/{{ props.maxlength }}</span>
        </p>   
    </div>
</template>
<script>
    export default {
        name: "ioTextarea",
    };
</script>
<script setup>
    import { computed, ref ,onMounted , useSlots } from "vue";
    import  debounce  from "@/hook/debounce.js";
    import  throttle  from "@/hook/throttle.js";
    import autoSize from "@/utils/autosize.js";
    const emit = defineEmits(["update:modelValue", "focus", "blur","change"]);
    const props = defineProps({
        modelValue: {
            type: String,
        },
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
            default: "请输入",
        },
        rows: {
            type: Number,
            default: 4,
        },
        cols: {
            type: Number,
            default: 60,
        },
        fontSize: {
            type: String,
            default: "14px",
        },
        placeholder: {
            type: String,
            default: "",
        },
        isDebounce: {
            type: Boolean,
            default: false,
        },
        isThorttle: {
            type: Boolean,
            default: false,
        },
        isT: {
            type: Boolean,
            default: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        showNumberLimit: {
            type: Boolean,
            default: false,
        },
        maxlength: {
            type: Number,
            default: 1000,
        },
        minlength: {
            type: Number,
            default: 0,
        },
        isAutosize: {
            type: Boolean,
            default: false,
        },
        minRows: {
            type: Number,
            default: 2,
        },
        maxRows: {
            type: Number,
            default: 9999,
        },
    });
    let isT = ref(props.isT)
    let isDebounce = ref(props.isDebounce)
    let isThorttle = ref(props.isThorttle)
    let date = new Date().getTime()

    onMounted(() => {
        if(props.isDebounce){
            isT.value = false
        }
        if(props.isThorttle){
            isT.value = false
        }
        if(props.isDebounce && props.isThorttle){
            console.error("isDebounce和isThorttle不能同时为true")
        }
        /* if(props.isAutosize){
            autosize(document.querySelector(".ioTextareaAutosize"))
        } */
        if(props.isAutosize){
            //console.log(date);
            autoSize(document.getElementsByClassName(`ioTextareaAutoSize+${date}`)[0], props.minRows, props.maxRows);
        }
    })
    const chooseInput = computed(() => {
        return isT.value ? input : ( isDebounce.value ? debounceInput : ( isThorttle.value ? throttleInput : input ) )
    })
    const input = (e) => {
        emit("update:modelValue",e.target.value)
    }
    const debounceInput = debounce(function(e){
        emit("update:modelValue",e.target.value)
    },props.delay)
    const throttleInput = throttle(function(e){
        emit("update:modelValue",e.target.value)
    },props.delay) 
    const handleFocus = e =>{
        if(!props.disabled){
            e.currentTarget.style.border = '1px solid #15c3f9';
        }
        emit("focus",e)
    }
    const handelBlur = e => {
        e.currentTarget.style.border = '1px solid #e6e6e6';
        emit("blur",e)
    }
    const handleChange = e => {
        emit("change",e)
    }
    const minLength = computed(() => {
        return props.modelValue.length
    });
    const ioClass = computed(() => {
        return {
            ioTextarea: true,
            ioTextareaDisabled: props.disabled,
        };
    });
    const textareaClass = computed(() => {
        return [
            props.isAutosize ? `ioTextareaAutoSize+${date}` : "",
        ];
    });
</script>

<style lang="scss" scoped>
.ioTextarea{
    width: v-bind('props.width');
    height: v-bind('props.height');
    display: inline-flex;
    overflow: hidden;
    position: relative;
    textarea{
        width: 100%;
        height: auto;
        padding-left: .75rem;
        padding-right: .75rem;
        padding-top: .625rem;
        padding-bottom: .625rem;
        outline: none;
        line-height: 1.75;
        transition: .5s;
        border: 1px solid #e6e6e6;
        letter-spacing: 1.5px;
        font-size: v-bind('props.fontSize');
        font-family: auto;
    }
    textarea::-webkit-scrollbar{
        width: .375rem;
    }
    textarea::-webkit-scrollbar-thumb{
        background: #e6e6e6;
        border-radius: 3.125rem;
    }
    textarea::-webkit-scrollbar-track{
        background: transparent;
    }
    textarea::-webkit-resizer{
        display: none;
    }
    textarea:placeholder{
        color: #999;
    }
            span{
                position: absolute;
                margin-right: .3125rem;
                margin-bottom: .3125rem;
                right: 1%;
                bottom: 0;
                padding: 0 .625rem;
                font-size: .75rem;
                color: #999;
            }
}
.ioTextareaDisabled{
    textarea{
        cursor: not-allowed;
    }
}
</style>