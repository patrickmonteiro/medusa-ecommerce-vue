// import { api } from 'boot/axios'
import { medusa } from 'boot/medusaClient'
// import { Loading } from 'quasar'
// import useNotify from 'src/composables/UseNotify'

export default function useProduct () {
//   const { notifyError } = useNotify()
  // const listProducts = async () => {
  //   try {
  //     const { products } = await medusa.collections.list() // { products, limit, offset, count }
  //     return products
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }

  const getColletion = async (id) => {
    try {
      const { collection } = await medusa.collections.retrieve(id) // { products, limit, offset, count }
      return collection
    } catch (error) {
      throw new Error(error)
    }
  }

  // const getProductVariants = async (id) => {
  //   try {
  //     const { variants } = await medusa.products.variants.retrieve(id) // { products, limit, offset, count }
  //     return variants
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }

  return {
    // listProducts,
    // getProductVariants,
    getColletion
  }
}
