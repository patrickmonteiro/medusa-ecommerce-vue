import { medusa } from 'boot/medusaClient'

export default function useProduct () {
  const listCollections = async () => {
    try {
      return await medusa.collections.list()
    } catch (error) {
      throw new Error(error)
    }
  }

  const getColletion = async (id) => {
    try {
      const { collection } = await medusa.collections.retrieve(id)
      return collection
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    listCollections,
    getColletion
  }
}
