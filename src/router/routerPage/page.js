export default[
    {
        path:"/",
        name:"home",
        component:() => import("../../view/home.vue"),
        children:[
            {
                path:"",
                name:"index",
                component:() => import("../../view/index.vue"),
                meta:{
                    id:0
                }
            },
            {
                path:"button",
                name:"button按钮",
                component:() => import("/packages/button/document/document.md"),
                meta:{
                    id:1
                }
            },
            {
                path:"input",
                name:"input输入框",
                component:() => import("/packages/input/document/document.md"),
                meta:{
                    id:2
                }
            },
            {
                path:"icon",
                name:"icon图标",
                component:() => import("/packages/icon/document/document.md"),
                meta:{
                    id:3,
                }
            }, 
            {
                path:"textarea",
                name:"textarea多行输入",
                component:() => import("/packages/textarea/document/document.md"),
                meta:{
                    id:4,
                }
            }, 
            {
                path:"select",
                name:"select选择器",
                component:() => import("/packages/select/document/document.md"),
                meta:{
                    id:5,
                }
            },
            /* {
                path:"regularCheck",
                id:6,
                name:"正则校验",
                component:() => import("/packages/regularCheck/document/doc.vue")
            }, 
            {
                path:"debounce",
                id:7,
                name:"防抖与节流",
                component:() => import("/packages/debounce/document/doc.vue")
            },
            {
                path:"debounce",
                id:8,
                name:"开发中...",
            }, */
        ]
    }
]