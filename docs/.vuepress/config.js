module.exports = {
  title: "我的世界基岩版开服教程(BDS)",
  description: "My tech blog",
  port: "8080",
  head: [
    ["link", { rel: "icon", href: "/img/YY.png" }],
    ["link", { rel: "stylesheet", href: "/css/style.css" }],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: require("./nav.js"),
    sidebar: require("./sidebar.js"),
    collapsable:true,
    // sidebarDepth: 2,
    lastUpdated: "Last Updated",
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: "更新",
      },
    },
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页 ！",
  },

};
