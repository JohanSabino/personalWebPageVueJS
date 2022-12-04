export default {
    profile: {
        name: 'Johan Andrés Sabino Castro',
        image: 'https://i.imgur.com/oNwZjtR.png',
        onClick() {
            console.log('Hi');
        },
    },
    items: [
        {
            id: 0,
            title: 'home',
            icon: 'fa-house',
            href: '#',
            onClick() {
                console.log('Home');
            },
        },
        {
            id: 1,
            title: 'Skills',
            icon: 'fa-star',
            href: '#Skills',
            onClick() {
                console.log('Home');
            },
        },
        {
            id: 2,
            title: 'Soft Skills',
            icon: 'fa-hand-holding-heart',
            href: '#Soft_Skills',
            onClick() {
                console.log('Home');
            },
        },
        {
            id: 3,
            title: 'Contact me',
            icon: 'fa-chevron-up',
            href: '#ContactMe',
            onClick() {
                console.log('Home');
            },
        },
    ],
};
