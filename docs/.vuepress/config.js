module.exports = {
    // 默认标题，会被地区标题覆盖
    title: "Silver Music",
    // 默认描述，会被地区描述覆盖
    description: "和音谐律",
    base: "/",
    dest: "build",
    port: "8080",
    serviceWorker: "true",
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    markdown: {
        // options for markdown-it-anchor
        // 添加数学公式支持
        config: md => {
            md.use(require("markdown-it-katex"));
        }
    },
    // 公共头部CSS
    head: [
        // 添加数学公式样式
        ['link', {
            rel: 'stylesheet',
            href: "https://cdn.bootcss.com/KaTeX/0.6.0/katex.min.css"
        }],
        // 标签上显示的ico标志
        ['link', {
            rel: 'icon',
            href: "favicon.ico"
        }],
    ],
    themeConfig: {
        sidebarDepth: 2,
        sidebar: 'auto',
        lastUpdated: '最后更新于',
        nav: [{
                text: "主页",
                link: "/"
            },
            {
                text: "音律基础",
                link: "/basic/"
            },
            {
                text: "六音十二律",
                link: "/tweleve/"
            },
            {
                text: "八音十六律",
                link: "/sixteen/"
            },
            {
                text: "Github",
                link: "https://github.com/SilverLeaves/SilverMusic"
            },
            {
                text: "关于",
                link: "/about"
            },
        ],
        sidebar: {
            '/note/': [{
                title: '笔记',
                collapsable: false,
                children: [
                    '/note/learning',
                ]
            }],
            // 除此之外还可以自定侧边栏
            '/essay/': [{
                title: '随笔',
                collapsable: false,
                children: []
            }],
            '/essay/': [{
                title: '生活',
                collapsable: false,
                children: []
            }],
        }
    }
}