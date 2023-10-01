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
      '/examples': [
        {
          text: 'Examples',
          collapsed: true,
          items: [
            { text: 'Markdown Examples', link: '/examples/markdown-examples' },
            { text: 'Runtime API Examples', link: '/examples/api-examples' }
          ]
        }
      ],
      '/chore': [
        {
          text: 'HTTP1 - HTTP3',
          link: '/chore/http',
        },
        {
          text: 'Difference Between Promise and Async/Await',
          link: '/chore/PromiseAwait.md'
        }
        // {
        //   text: 'HTTP/2',
        //   link: '/http/http2',
        // },
        // {
        //   text: 'HTTP/3',
        //   link: '/http/http3',
        // },
      ]
    },
  }
})
