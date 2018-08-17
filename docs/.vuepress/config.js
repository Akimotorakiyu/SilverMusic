module.exports = {
    // 默认标题，会被地区标题覆盖
    title: "Silver Music",
    // 默认描述，会被地区描述覆盖
    description: "一颗满怀期待的种子",
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
        // Vuepress已经内置了markdown-it及一些模块
        // 详见Vuepress的package。json
        // md为markdown-it的实例对象
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
                link: "/twelve/"
            },
            {
                text: "八音十六律",
                link: "/sixteen/"
            },
            {
                text: "五音十律",
                link: "/ten/"
            },
            {
                text: "七音十四律",
                link: "/fourteen/"
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
            '/': [{
                    title: '音律基础',
                    collapsable: false,
                    children: [
                        '/basic/',
                        '/basic/noteAndLine',

                        '/basic/more',
                    ]
                },
                {
                    title: '六音十二律',
                    collapsable: false,
                    children: [
                        '/twelve/',
                        '/twelve/chord',

                        '/twelve/more',
                    ]
                },

                {
                    title: '八音十六律',
                    collapsable: false,
                    children: [
                        '/sixteen/',
                        '/sixteen/chord',

                        '/sixteen/more',
                    ]
                },
                {
                    title: '五音十律',
                    collapsable: false,
                    children: [
                        '/ten/',
                        '/ten/chord',

                        '/ten/more',
                    ]
                },
                {
                    title: '七音十四律',
                    collapsable: false,
                    children: [
                        '/fourteen/',
                        '/fourteen/chord',

                        '/fourteen/more',
                    ]
                },
            ],
        }
    }
}