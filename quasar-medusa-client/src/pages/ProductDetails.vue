<template>
  <q-page padding>
      <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <q-img
            :src="firstImage"
            spinner-color="primary"
            ratio="1"
          />
        </div>

        <div
          class="col-md-6 col-sm-6 col-xs-12"
          :class="$q.platform.is.desktop ? 'q-pl-md' : 'q-pt-md'"
        >
          <p class="text-h3">
            {{ product.title }}
          </p>
          <p class="text-h6">
            {{ product.subtitle }}
          </p>
          <p class="text-body1">
            {{ product.description }}
          </p>
          <p class="text-h6">
            {{ priceVariant }}
          </p>

          <div class="q-gutter-sm">
            <q-btn
              v-for="variantItem in product.variants"
              :key="variantItem.id"
              :label="variantItem.title"
              color="primary"
              :outline="variantItem.id !== (variant?.id || '')"
              @click="setVariant(variantItem)"
            />
          </div>

          <div class="q-mt-md">
            <q-btn
              label="Add to cart"
              icon="mdi-cart"
              color="primary"
              :class="$q.platform.is.mobile ? 'full-width q-mb-md' : 'q-mr-md'"
            />
            <q-btn
              label="Buy now"
              icon="mdi-credit-card"
              color="positive"
              :class="$q.platform.is.mobile ? 'full-width q-mb-md' : ''"
            />
          </div>
          <div class="q-mt-md">
            <p class="text-body1">See this product with augmented reality!</p>
            <p class="text-body1">Access our 3D viewer on your mobile, and point to the product image!</p>
            <q-img src="/qrcode-arjs.png" width="150px" />
          </div>
        </div>
      </div>
      <div
        v-if="product.collection_id"
        class="row justify-center"
      >
        <m-carousel-collection
          :collectionId="product.collection_id"
          class="col-md-8 col-sm-10 col-xs-12"
        />
      </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent, onMounted, ref, computed, watchEffect } from 'vue'
import useProduct from 'src/composables/useProducts'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'ProductDetailsPage',
  components: {
    MCarouselCollection: defineAsyncComponent(() => import('components/MCarouselCollection.vue'))
  },
  setup () {
    const product = ref({})
    const { getProduct, getProductVariants } = useProduct()
    const route = useRoute()
    const router = useRouter()
    const firstImage = computed(() => product?.value.images ? product.value.images[0].url : '')
    const variant = ref(null)
    const showAr = ref(false)

    const priceVariant = computed(() => {
      const variantChanged = variant.value?.prices[variant.value.prices.length - 1] || ''
      return variantChanged.amount || ''
    })

    onMounted(() => {
      if (route.params.id) {
        handleGetProductDetails(route.params.id)
      } else {
        router.replace({ name: 'page-not-found' })
      }
    })

    const handleGetProductDetails = async (id) => {
      try {
        const data = await getProduct(id)
        product.value = data
        verifyTagAr(product.value.tags)
      } catch (error) {
        console.error(error)
      }
    }

    watchEffect(async () => {
      if (route.params.id) {
        await handleGetProductDetails(route.params.id)
      }
    })

    const handleGetProductVariants = async (id) => {
      try {
        await getProductVariants(id)
      } catch (error) {
        console.error(error)
      }
    }

    const setVariant = (variantChanged) => {
      handleGetProductVariants(variantChanged.id)
      variant.value = variantChanged
    }

    const verifyTagAr = (tagsArray) => {
      const tags = tagsArray.map((tag) => tag.value)
      if (tags.includes('AR')) {
        showAr.value = true
      } else {
        showAr.value = false
      }
    }

    return {
      product,
      firstImage,
      priceVariant,
      variant,
      setVariant
    }
  }
})
</script>
