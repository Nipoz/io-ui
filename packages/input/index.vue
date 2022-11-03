<template>
        <div :class="ioClass" tabindex=1>
        <p class="ioSloatLeft" v-if="$slots.prepend"><slot name="prepend" /></p>
        <!-- {{ modelValue }} -->
        <!--  @input="isT ? input : ( isDebounce ? debounceInput : ( isThorttle ? thorttleInput : input ) )" -->
        <input 
            :type="viewPassword ? (passwordVisible ? 'text' : 'password') : type" 
            :value="modelValue" 
            @input="chooseInput"
            :placeholder="placeholder"
            :disabled="disabled"
            :maxlength="maxlength"
            :minlength="minlength"
            @focus="handleFocus" 
            @blur="handelBlur"
            @change="handleChange"
            />
            <i :class="canClearText" v-if="canClear" @click="clearText()"></i>
            <i :class="showPassword" @click="handlePassword()" v-if="viewPassword"></i>
            <i :class="fontClass" v-if=" icon!='' "></i>
            <span class="numberLimit" v-if="showNumberLimit">{{ minLength }}/{{ props.maxlength }}</span>
            <div class="ioSloatMid" v-if="$slots.mid">
                <slot name="mid"/>
                
            </div>
            <p class="ioSloatRight" v-if="$slots.append"><slot name="append"/></p>
            <div class="ioComponentsRight" v-if="$slots.components"><slot name="components" /></div>
        </div>
        
    
</template>
<script>
    export default {
        name: 'ioInput',
    };
</script>
<script setup>
import { computed, ref ,onMounted , useSlots } from "vue";
import  debounce  from "@/hook/debounce.js";
import  throttle  from "@/hook/throttle.js";
    const emit = defineEmits(['update:modelValue','focus','blur','change']);
    const props = defineProps({
        /***:autocomplete="autocomplete"
            :readonly="readonly"
            :max="max"
            :min="min"
            :step="step"
            :form="form" */
        modelValue : String | Number,
        type: {
            type: String,
            default: 'text'
        },
        width: {
            type: String,
            default: "200px",
        },
        height: {
            type: String,
            default: "auto",
        },
        placeholder: {
            type: String,
            default: "请输入内容",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        canClear: {
            type: Boolean,
            default: false,
        },
        direction: {
            type: String,
            default: "right",
        },
        icon: {
            type: String,
            default: "",
        },
        fontSize: {
            type: String,
            default: "14px",
        },
        maxlength: {
            type: Number,
            default: 100,
        },
        minlength: {
            type: Number,
            default: 0,
        },
        content: {
            type: String,
            default: "",
        },
        viewPassword: {
            type: Boolean,
            default: false,
        },
        delay: {
            type: Number,
            default: 1000,
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
        autocomplete: {
            type: String,
            default: "off",
        },
        name: {
            type: String,
            default: "",
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        max: {
            type: Number,
            default: 1000,
        },
        min: {
            type: Number,
            default: 0,
        },
        step: {
            type: Number,
            default: 1,
        },
        form: {
            type: String,
            default: "",
        },
        showNumberLimit: {
            type: Boolean,
            default: false,
        },
        checkType: {
            type: String,
            default: "",
            validator: (value) => {
                return ["", "number", "email", "phone", "idcard"].includes(value);
            },
        },
    })
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
        //console.log(isT.value ? input : ( isDebounce.value ? debounceInput : ( isThorttle.value ? throttleInput : input ) ))
    })
    let passwordVisible = ref(false)
    let isT = ref(props.isT)
    let isDebounce = ref(props.isDebounce)
    let isThorttle = ref(props.isThorttle)
    const slots = useSlots()
    const midSlot = slots.mid
    let returnMsg = new Map()
    //const midInputSlot = slots.midInput
    
    const chooseInput = computed(() => {
        return isT.value ? input : ( isDebounce.value ? debounceInput : ( isThorttle.value ? throttleInput : input ) )
    })

    const input = (e) => {
        emit("update:modelValue",e.target.value)
    }

    const debounceInput = debounce(function(e){
        //console.log('debounceInput');
        emit("update:modelValue",e.target.value)
    },props.delay)

    const throttleInput = throttle(function(e){
        emit("update:modelValue",e.target.value)
    },props.delay) 
    //const throttleInput = throttle(input,props.delay)
    
    const clearText = () => {
        emit("update:modelValue",'')
    }
    
    function handleFocus(e){
        //console.log('foucsThis');
        if(!props.disabled){
            e.currentTarget.parentElement.style.border = '1px solid #15c3f9';
        }
        emit("focus",e)
    }
    function handelBlur(e){
        //console.log('blurThis');
        
            e.currentTarget.parentElement.style.border = '1px solid #e6e6e6';
        
        //e.currentTarget.parentElement.style.border = '1px solid #e8e5e5';
        emit("blur",e)
    }
    function handleChange(e){
        emit("change",e)
    }
    function handlePassword(){
        passwordVisible.value = !passwordVisible.value
        //console.log('props.typeprops.type',props.type);
        //console.log('viewPasswordviewPassword',props.viewPassword);
    }
    const ioClass = computed(() => {
        return [
            'io-input',
            props.disabled ? 'is-disabled' : '',
            props.direction == 'left' ? 'is-left' : '',
            !!midSlot ? 'is-slot-mid' : '',
        ];
    });
    const canClearText = computed(() => {
        return [
            'iconfont',
            props.modelValue && props.canClear ? 'icon-W-25' : '',
            'io-fontClass-right'
        ];
    }); 
    const showPassword = computed(() => {
        return [
            'iconfont',
            props.viewPassword ? 'icon-mimakejian' : '',
            'io-fontClass-right'
        ];
    });
    const fontClass = computed(() => {
        return [
            'iconfont',
            props.icon ? `${props.icon}` : '',
            `io-fontClass-${props.direction}`,
        ];
    });
    const minLength = computed(() => {
        return props.modelValue.length
    });
    

</script>

<style lang="scss" scoped>
.io-input{
    min-width: 12.5rem;
    min-height: 2.5rem;
    position: relative;
    width: v-bind('props.width');
    height: v-bind('props.height');
    box-sizing: border-box;
    border: 1px solid $bordercolor;
    border-radius: .25rem;
    transition: 0.5s;
    box-shadow: 0px 0px 20px rgba($color: #ccc, $alpha: 0.15);
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    outline: none;
    &:hover{
        border-color: rgb(202, 200, 200);
    }
    p{
        font-size: v-bind('props.fontSize');
    }
    span{
        font-size: .75rem;
        color: $textcolor;
    }
    input{
        cursor: pointer;
        outline: none;
        width: 90%;
        border: none;
        min-height: 2.5rem;
        padding-left: .625rem;
        padding-right: .625rem;
        height: 100%;
        font-size: v-bind('props.fontSize');
        font-weight: 400;
        color: $textcolor;
        letter-spacing: .0625rem;
        flex:1 1 auto;
    }
    ::-ms-clear,::-ms-reveal{display:none;}
    .io-fontClass-right{
        display: block;
        /* position: absolute;
        right: 1%;
        top: 50%;
        transform: translate(100%, -50%); */
        padding-right: .625rem;
        cursor: pointer;
        color: $textcolor;
        &:hover{
            color: $main;
        }
    }
    .io-fontClass-left{
            display: block;
            position: absolute;
            left: 9%;
            top: 50%;
            transform: translate(-50%,-50%);
            cursor: pointer;
            color: $textcolor;
            &:hover{
                color: $main;
            }
    }
    .ioSloatLeft{
        padding-left: .625rem;
    }
    .ioSloatRight{
        padding-right: .625rem;
    }
    .ioComponentsRight{
       height: 100%;

    }
    .numberLimit{
        padding-top: .625rem;
        padding-right: .625rem;
    }
}
.is-left{
    i{
        padding-right: .5rem;
    }
    input{
        padding-left: 2rem;
        padding-right: .875rem; 
    }
}
.is-disabled{
    background-color: rgba($color: #000, $alpha: 0.1);
    border-color: $disabled;
        color: $textcolor;
    input{
        cursor: not-allowed !important;
        border-color: $disabled;
        color: $textcolor;
    }
}


</style>