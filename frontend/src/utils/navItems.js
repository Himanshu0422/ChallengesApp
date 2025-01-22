export const navItems = [
  {
    text: 'Home',
    icon: require('../asset/home.png'),
    route: '/',
  },
  {
    text: 'Challenges',
    icon: require('../asset/challenges.png'),
    route: '/challenges/hooks',
    subItems: [
      { text: 'Hooks', route: '/challenges/hooks' },
      { text: 'Router', route: '/challenges/router' },
      { text: 'Custom Hooks', route: '/challenges/custom-hooks' },
      { text: 'Context API', route: '/challenges/context-api' },
      { text: 'Debugging', route: '/challenges/debugging' },
      { text: 'Portals', route: '/challenges/portals' },
    ],
  },
  {
    text: 'Author',
    icon: require('../asset/author.png'),
    action: () => window.open('https://www.linkedin.com/in/himanshumittal035/', '_blank'),
  },
  {
    text: 'Contribute',
    icon: require('../asset/contribute.png'),
    route: '/contribute',
  },
];
