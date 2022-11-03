import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
        include: [/\.vue$/, /\.md$/],// vue插件默认只处理.vue文件，通过该参数配置让其也处理一下.md文件
    }),
    Markdown(),
  ],
  build:{
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"vue"
        }
      }
    },
    lib:{
      entry: './packages/index.js',
      name: 'ioui'
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: '@use "./src/assets/style/style.scss" as *;'
      }
    }
  },
  chainWebpack(config) {
    config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
            })
  }  
})
