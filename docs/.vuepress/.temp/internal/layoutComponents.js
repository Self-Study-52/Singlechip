import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/00.study/00.Self-Study-52/Singlechip/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/00.study/00.Self-Study-52/Singlechip/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
