import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Home",["/index.html","/README.md"]],
  ["v-f6c5d272","/guide/SingleChip-Basic/01.%E7%AE%80%E4%BB%8B.html","介绍 SingleChip（单片机）",["/guide/SingleChip-Basic/01.简介.html","/guide/SingleChip-Basic/01.%E7%AE%80%E4%BB%8B","/guide/SingleChip-Basic/01.简介.md","/guide/SingleChip-Basic/01.%E7%AE%80%E4%BB%8B.md"]],
  ["v-6fe3e98e","/guide/SingleChip-Basic/","SingleChip(单片机)",["/guide/SingleChip-Basic/index.html","/guide/SingleChip-Basic/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
