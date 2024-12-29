import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UopyTechSpeak",
  description: "Pioneering Frontiers Shaping Tomorrow",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home page', link: '/' },
      {
        text: 'Project introduction',
        items: [
          { text: 'CompuMon', link: '/project/CompuMon' },
          { text: 'Under development', link: '/not' }
        ]
      },
      { text: 'Contribution List', link: '/name' }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/UopyTechSpeak' }
    ]
  }
})
