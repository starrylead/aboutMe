import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "About Me",
  description: "Introduce Myself",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: 'Keyword',
        items: [
          { text: 'DEVELOPMENT', link: '/past' },
          { text: 'PERSONALITY', link: '/present' },
          { text: 'LANGUAGE', link: '/future' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/starrylead' }
    ]
  }
})
