export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "Home",
    "heroImage": "/SingleChip.jpeg",
    "actions": [
      {
        "text": "快速上手 →",
        "link": "/guide/SingleChip-Basic/",
        "type": "primary"
      },
      {
        "text": "仓库简介",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Simplicity First",
        "details": "Minimal setup with markdown-centered project structure helps you focus on writing."
      },
      {
        "title": "Vue-Powered",
        "details": "Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue."
      },
      {
        "title": "Performant",
        "details": "VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded."
      },
      {
        "title": "Themes",
        "details": "Providing a default theme out of the box. You can also choose a community theme or create your own one."
      },
      {
        "title": "Plugins",
        "details": "Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site."
      },
      {
        "title": "Bundlers",
        "details": "Both Webpack and Vite are supported. Choose the one you like!"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2018-present Sue-52"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
