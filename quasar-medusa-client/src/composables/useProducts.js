// import { api } from 'boot/axios'
import { medusa } from 'boot/medusaClient'
// import { Loading } from 'quasar'
// import useNotify from 'src/composables/UseNotify'

export default function useProduct () {
//   const { notifyError } = useNotify()
  const listProducts = async () => {
    try {
      const { products } = await medusa.products.list() // { products, limit, offset, count }
      return products
    } catch (error) {
      throw new Error(error)
    }
  }

  const getProduct = async (id) => {
    try {
      const { product } = await medusa.products.retrieve(id) // { products, limit, offset, count }
      return product
    } catch (error) {
      throw new Error(error)
    }
  }

  const getProductVariants = async (id) => {
    try {
      const { variants } = await medusa.products.variants.retrieve(id) // { products, limit, offset, count }
      return variants
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    listProducts,
    getProductVariants,
    getProduct
  }
}
