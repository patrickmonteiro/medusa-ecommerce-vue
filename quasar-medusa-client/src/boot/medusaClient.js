import { boot } from 'quasar/wrappers'
import Medusa from '@medusajs/medusa-js'

const medusa = new Medusa({
  baseUrl: process.env.MEDUSA_BASE_URL,
  apiKey: '',
  maxRetries: 3
})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  //   app.config.globalProperties.$medusa = medusa
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

//   app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { medusa }
