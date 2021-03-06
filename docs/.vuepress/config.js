module.exports = {
    title: '本地煮鸡:8080', 
    description: '一个博客, 大概会记录一些技术笔记',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }]
    ],
    ga: 'UA-132436049-1',
    themeConfig: {
        repo: 'ZweiRm/localhost-8080.github.io',
        repoLabel: '查看源码',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '帮助我改善此页面！',
        lastUpdated: '上次更新',
        serviceWorker: {
            updatePopup: { 
                message: "有文章更新了", 
                buttonText: "刷新" 
            }
        },
        nav: [
            { text: '主页', link: '/' },
            { text: '博文',
              items: [
                { text: 'Java', link: '/java/' },
                { text: 'Kotlin', link: '/kotlin/' },
                { text: 'C', link: '/c/'},
                { text: 'Web', link: '/web/' },
                { text: 'Spring', link: '/spring/' },
                { text: '大数据', link: '/big-data/' },
                { text: '前端', link: '/front-end/' },
                { text: '深度学习', link: '/deep-learning/' },
                { text: '软件工程', link: '/software-engineering/'},
                { text: '杂谈', link: '/tittle-tattle/' }
              ] 
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/ZweiRm' },
            { text: '码云', link: 'https://gitee.com/zweirm/' },
        ],
        sidebar: {
            '/java/': [
                '',
                '语法', 
                '面向对象',
                '应用程序编程接口',
            ],

            '/kotlin/': [
                '',
            ],

            '/c/': [
                '',
                '常量、变量与数据类型',
            ],

            '/web/': [
                '',
            ],

            '/spring/': [
                '',
            ],

            '/big-data/': [
                '',
            ],
            
            '/front-end/': [
                '',
            ],

            '/deep-learning/': [
                '',
            ],

            '/software-engineering': [
                '',
            ],

            '/tittle-tattle/': [
                '',
                '关于Java编程部分的文章',
                '新年快乐！',
                'Computing Machinery and Intelligence By A. M. Turing'
            ],

            '/': [
                ''
            ]
        },
        sidebarDepth: 2
    },
    serviceWorker: true
}