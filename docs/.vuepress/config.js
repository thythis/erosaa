module.exports = {
    base: "/eros/",
    title: 'Thyme land',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Bill', link: '/bill/' }
        ],
        sidebar: [
            {
                title: 'Technologies',
                children: [
                    '/Technologies/'
                ]
            }
        ]
    }
}