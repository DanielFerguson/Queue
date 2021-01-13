export default {
  head: {
    title: 'Queue'
  },
  build: {
    extend: (config) => {
      config.target = 'electron-renderer'
    }
  },
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/fontawesome'],
  fontawesome: {
    icons: {
      solid: true
    }
  }
}
