module.exports = {
    head: [
        ['link', { rel: 'stylesheet', href: '/katex.min.css' }]
        //['script', {src: '/katex.min.js'}],
        //['script', {src: '/auto-render.min.js'}],
        //['link', {rel: 'stylesheet', href: '/contrib/copy-tex.min.css'}],
        //['script', {src: '/contrib/copy-tex.min.js'}],
        //['script', {src: '/contrib/mathtex-script-type.min.js'}]
    ],
    base: '/PG-Math/',
    title: '数学二(302)考研复习笔记',
    description: '',
    themeConfig: {
        lastUpdated: '最后一次更新',
        nav: [
            { text: 'Personal Homepage', link: 'https://320wuyanzu.github.io' },
            { text: '考纲目录', link: '/' },
            { text: '函数、极限、连续', link: '/1/' },
            { text: '一元函数微分学', link: '/2/' },
            { text: '一元函数积分学', link: '/3/' },
            { text: '多元函数微积分学', link: '/4/' },
            { text: '常微分方程', link: '/5/' },
            { text: '行列式', link: '/6/' },
            { text: '矩阵', link: '/7/' },
            { text: '向量', link: '/8/' },
            { text: '线性方程组', link: '/9/' },
            { text: '矩阵的特征值和特征向量', link: '/10/' },
            { text: '二次型', link: '/11/' }
        ],
        sidebarDepth: 2,
        sidebar: sidebar_group()
    },
    markdown: {
        config: md => {
            md.use(require('@iktakahiro/markdown-it-katex'));
        }
    }
}

function sidebar_group() {
    let C1 = {
        title: '一、函数，极限，连续',
        children: [ /*'/1/',*/ '/1/1', '/1/2', '/1/3', '/1/4', '/1/5', '/1/6', '/1/7', '/1/8', '/1/9', '/1/10', '/1/11', '/1/12', '/1/13', '/1/14', '/1/15', '/1/16']
    };
    let C2 = {
        title: '二、一元函数微分学',
        children: ['/2/']
    };
    let C3 = {
        title: '三、一元函数积分学',
        children: ['/3/']
    };
    let C4 = {
        title: '四、多元函数微积分学',
        children: ['/4/']
    };
    let C5 = {
        title: '五、常微分方程',
        children: ['/5/']
    };
    let C6 = {
        title: '六、行列式',
        children: ['/6/']
    };
    let C7 = {
        title: '七、矩阵',
        children: ['/7/']
    };
    let C8 = {
        title: '八、向量',
        children: ['/8/']
    };
    let C9 = {
        title: '九、线性方程组',
        children: ['/9/']
    };
    let C10 = {
        title: '十、矩阵的特征值和特征向量',
        children: ['/10/']
    };
    let C11 = {
        title: '十一、二次型',
        children: ['/11/']
    };
    return [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11];
}

function sidebar_divide() {
    return {
        '/1/': [''],
        '/2/': [''],
        '/3/': [''],
        '/4/': [''],
        '/5/': [''],
        '/6/': [''],
        '/7/': [''],
        '/8/': [''],
        '/9/': [''],
        '/': ['']
    }
}