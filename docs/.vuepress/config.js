module.exports = {
    head: [
        ['link', { rel: 'stylesheet', href: '/katex.min.css' }]
        //['script', {src: '/katex.min.js'}],
        //['script', {src: '/auto-render.min.js'}]
        //['link', {rel: 'stylesheet', href: '/contrib/copy-tex.min.css'}],
        //['script', {src: '/contrib/copy-tex.min.js'}],
        //['script', {src: '/contrib/mathtex-script-type.min.js'}]
    ],
    base: '/PG-Math/',
    title: '数学二(302)考研复习笔记',
    description: '',
    themeConfig: {
        lastUpdated: '上一次编辑',
        nav: [
            { text: 'Personal Homepage', link: 'https://320wuyanzu.github.io' },
            { text: '考纲目录', link: '/' },
            { text: '常用公式集', link: '/formula' }
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
        title: '一、函数、极限、连续',
        children: ['/1/', '/1/summary','/1/methods' /* '/1/1', '/1/2', '/1/3', '/1/4', '/1/5', '/1/6', '/1/exc'*/ ]
    };
    let C2 = {
        title: '二、导数与微分',
        children: ['/2/', '/2/1']
    };
    let C3 = {
        title: '三、微分中值定理与导数的应用',
        children: ['/3/']
    };
    let C4 = {
        title: '四、不定积分',
        children: ['/4/']
    };
    let C5 = {
        title: '五、定积分',
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
    let C12 = {
        title: '附录：常用公式集',
        children: ['/formula']
    };
    return [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12];
}