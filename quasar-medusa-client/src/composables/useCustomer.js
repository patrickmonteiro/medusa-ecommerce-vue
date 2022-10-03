import { medusa } from 'boot/medusaClient'

export default () => {
  const createCustomer = async (newCustomerData) => {
    try {
      return await medusa.customers.create(newCustomerData)
    } catch (e) {
      throw new Error(e)
    }
  }

  const updateCustomer = async (customerData) => {
    try {
      return await medusa.customers.update(customerData)
    } catch (e) {
      throw new Error(e)
    }
  }

  const getCustomer = async () => {
    try {
      return await medusa.customers.retrieve()
    } catch (e) {
      throw new Error(e)
    }
  }

  return {
    createCustomer,
    updateCustomer,
    getCustomer
  }
}
