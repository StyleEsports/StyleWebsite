import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, we are',
  name: 'Style Esports',
  subtitle: 'Casual to Competitive: Players and Teams welcome.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'StyleEsports.png',
  paragraphOne:
    'Here at Style Esports, our mission is to improve players mentalities, gameplay, and overall competitive experience. We provide players and teams outlets to compete against equally skilled teams regardless of talent level, for prize pools.',
  paragraphTwo:
    'We host a positive, safe, and ever expanding community for you to make new friends and teammates, and hold Esports Discussions. We also host exclusive tournaments, with games that are streamed weekly by professional Shoutcasters and commentators.',
  paragraphThree:
    'We also provide connections for teams to find professional coaches and analysts to take their game to the next level.',
  resume: 'data', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'DiscordSc.png',
    title: 'Discord Server',
    info: 'Our discord server is where the hub of all Style Esports takes place. Here, you can find new teammates, talk about Esports, but most importantly, compete. The discord server is currently home to over 150 teams, and easy access to find both practice and tournament games.',
    info2: '',
    url: 'https://discord.gg/r8K5Egf',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'StyleCasted.png',
    title: 'Streamed and Casted Games',
    info: 'We have a crew of professional producers, casters, and commentators to stream our games during the seasons and in playoffs. These streams give players, teams, and our organization exposure, along with the opportunity to let your friends watch you dominate.',
    info2: '',
    url: 'https://www.twitch.tv/styleesports',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'StyleBotPNG.png',
    title: 'Innting Style Bot',
    info: 'The Innting Style Bot is a Discord Bot developed in-house by us that offers a one-of-a-kind experience in Discord. This bot manages our tournament for us, in a way no other organization has. You can create teams, add your friends, find opponents and schedule matches, records match results, and soon it will have a matchmaking system.',
    info2: '',
    url: 'https://github.com/WillGerber/Innting-Style-Bot',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with us, or just find out more? Awesome!',
  btn: "Let's Talk",
  email: 'StyleEsportsgaming@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitch',
      url: 'https://www.twitch.tv/styleesports',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCpPY0DIZ-D9lr-FMg8r1CEw',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/WillGerber/Innting-Style-Bot',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/Style-Esports-326146131596618/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
