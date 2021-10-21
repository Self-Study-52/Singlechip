export const siteData = {
  "base": "/Singlechip/",
  "lang": "en-US",
  "title": "Hello Singlechip",
  "description": "Singlechip(单片机)",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/images/icons/favicon-16x16.png"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "32x32",
        "href": "/images/icons/favicon-32x32.png"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/images/icons/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        "rel": "mask-icon",
        "href": "/images/icons/safari-pinned-tab.svg",
        "color": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileColor",
        "content": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3eaf7c"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
