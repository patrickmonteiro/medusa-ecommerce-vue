import { medusa } from 'boot/medusaClient'

export default () => {
  const login = async (email, password) => {
    try {
      const { customer } = medusa.auth.authenticate(email, password)
      return customer
    } catch (e) {
      throw new Error(e)
    }
  }

  const logout = (cookieName) => {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }

  return {
    login,
    logout
  }
}
