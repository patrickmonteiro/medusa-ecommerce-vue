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

  const logout = async () => {
    return await medusa.auth.deleteSession()
  }

  return {
    login,
    logout
  }
}
