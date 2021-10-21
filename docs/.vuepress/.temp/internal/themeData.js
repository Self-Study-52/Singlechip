export const themeData = {
  "logo": "https://avatars.githubusercontent.com/u/92788671?s=200&v=4",
  "docsDir": "docs",
  "sidebar": {
    "collapsable": false,
    "/guide/": [
      {
        "text": "SingleChip（单片机）",
        "collapsable": false,
        "children": [
          "/guide/SingleChip-Basic/01.简介.md"
        ]
      }
    ]
  },
  "editLinkText": "在 GitHub 上编辑此页",
  "lastUpdatedText": "上次更新",
  "contributorsText": "贡献者",
  "tip": "提示",
  "warning": "注意",
  "danger": "警告",
  "notFound": [
    "这里什么都没有",
    "我们怎么到这来了？",
    "这是一个 404 页面",
    "看起来我们进入了错误的链接"
  ],
  "backToHome": "返回首页",
  "openInNewWindow": "在新窗口打开",
  "toggleDarkMode": "切换夜间模式",
  "toggleSidebar": "切换侧边栏",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdated": true,
  "contributors": true
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
