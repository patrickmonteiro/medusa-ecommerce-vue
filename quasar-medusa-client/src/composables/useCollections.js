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
      const { products } = await medusa.products.list({ collection_id: [id] })
      return {
        collection,
        products
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    listCollections,
    getColletion
  }
}
