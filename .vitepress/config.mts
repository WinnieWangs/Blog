import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "今天不想上班",
  description: "明天也不想上班",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: {
      '/chore': [
        {
          text: 'HTTP1 - HTTP3',
          link: '/chore/http',
        },
        {
          text: 'Difference Between Promise and Async/Await',
          link: '/chore/PromiseAwait'
        }
      ],
      '/design-pattern': [
        {
          text: '迭代器模式',
          link: '/design-pattern/iterator'
        }
      ]
    },
  }
})
