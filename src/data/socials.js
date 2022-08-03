import { mdiEmail, mdiInstagram, mdiLinkedin, mdiWhatsapp } from '@mdi/js';

const socials = [
    {
        label: 'Email',
        url: 'mailto:email@mayconjesus.dev',
        username: 'email@mayconjesus.dev',
        icon: mdiEmail,
        style: {
            backgroundColor: '#ea4335',
            color: '#fff',
        },
    },
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/maycon-jesus-20b3a6216/',
        username: 'Maycon Jesus',
        icon: mdiLinkedin,
        style: {
            backgroundColor: '#0e76a8',
            color: '#fff',
        },
    },
    {
        label: 'Whatsapp',
        url: 'https://api.whatsapp.com/send?phone=5531997466833',
        username: '+55 31 99746-6833',
        icon: mdiWhatsapp,
        style: {
            backgroundColor: '#25d356',
            color: '#242424',
        },
    },
    {
        label: 'Instagram',
        url: 'https://www.instagram.com/maycon072003/',
        username: 'maycon072003',
        icon: mdiInstagram,
        style: {
            backgroundColor: '#8a3ab9',
            color: '#fff',
        },
    },
];

export default socials;
