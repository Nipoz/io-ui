<template>
    <button :disabled="disabled" :class="ioClass" :loading="loading" id="ioButton">
        <span><slot></slot></span>
    </button>
</template>
<script>
export default {
    name: "ioButton",
};
</script>
<script setup>
import { computed, ref } from "vue";
const props = defineProps({
    type: {
        type: String,
        default: "default",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    round: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: "mid",
    },
    circle: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: "",
    },
    loading: {
        type: Boolean,
        default: false,
    },
    width:{
        type: String,
        default: "auto",
    },
    height:{
        type: String,
        default: "auto",
    },
});
const disabled = ref("");
disabled.value = props.disabled;
const ioClass = computed(() => {
    return [
        "io-button",
        `io-button-${props.type}`,
        props.disabled ? "is-disable-true" : "",
        props.round ? "is-round-true" : "",
        `io-button-${props.size}`,
        props.circle ? "is-circle-true" : "",
        props.icon ? props.icon : "",
        props.loading ? "is-loading-true iconfont icon-jiazailoading-A" : "",
        props.loading ? (disabled.value = true) : "",
    ];
});
//console.log('props.width,props.height',props.width,props.height);
</script>

<style lang="scss" scoped>
button {
    width: v-bind('props.width');
    height: v-bind('props.height');
    outline: none;
    border: 0;
    cursor: pointer;
    background: none;
    box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.10);
    -webkit-box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.10);
    -moz-box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.10);
    -ms-box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.10);
    -o-box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.10);
    padding: 8px 18px;
    border-radius: 6px;
    transition: 0.5s;
    -webkit-box-transition: 0.5s;
    -moz-box-transition: 0.5s;
    -ms-box-transition: 0.5s;
    -o-transition: 0.5s;

    &:hover {
        opacity: 0.75;
    }

    &:active {
        opacity: 1;
    }

    box-sizing: border-box;
    position: relative;
    text-align: center;
}

.io-button {
    display: inline-block;
    letter-spacing: 1px;
    background-color: #fff;
    color: #383838;
}

.io-button-default {
    background-color: $default;
    color: #383838;

    &:hover {
        background-color: rgba($color: #7ab9cc, $alpha: 0.1);
    }
}

.io-button- {
    background-color: $default;
    color: #383838;

    &:hover {
        background-color: rgba($color: #7ab9cc, $alpha: 0.1);
    }
}

.io-button-main {
    background-color: $main;
    color: #fff;
}

.io-button-success {
    background-color: $success;
    color: #fff;
}

.io-button-warning {
    background-color: $warning;
    color: #fff;
}

.io-button-danger {
    background-color: $danger;
    color: #fff;
}

.io-button-disabled {
    background-color: $disabled;
    color: #f3f3f3;
    cursor: not-allowed;
    opacity: 1;
}

.is-disable-true {
    cursor: not-allowed;
    opacity: 0.65;

    &:hover {
        opacity: 0.65;
    }
}

.is-round-true {
    border-radius: 3.125rem;
}

.io-button-small {
    transform: scale(0.8);
}

.io-button-mid {
    transform: scale(1);
}

.io-button-big {
    transform: scale(1.2);
}

.io-button-mini {
    transform: scale(0.7);
}

.is-circle-true {
    border-radius: 50%;
    padding: 0.75rem;
}

.icon,
.iconfont {
    font-family: "iconfont" !important;
    font-size: 0.8125rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.is-loading-true {
    cursor: not-allowed;
    opacity: 0.65;

    &:hover {
        opacity: 0.65;
    }
}

.icon-jiazailoading-A::before {
    content: "";
    display: inline-block;
    width: 0.8125rem;
    height: 0.8125rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    vertical-align: -10%;
    border: 0.05rem solid #fff;
    color: #fff;
    clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%);
    animation: io-loading 1s linear infinite;
}

@keyframes io-loading {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
