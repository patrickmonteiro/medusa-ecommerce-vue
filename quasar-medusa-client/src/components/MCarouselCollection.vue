<template>
  <div class="">
   <div class="text-h5 text-center q-mt-md">
    Othes Products
   </div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      padding
      arrows
      height="500px"
    >
      <q-carousel-slide
        v-for="item in collections"
        :key="item.id"
        :name="item.id"
        :img-src="item.thumbnail"
        @click="goToProduct(item.id)"
        >
        <div class="absolute-bottom custom-caption text-center">
          <div class="text-h6">{{ item.title }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import useCollections from 'src/composables/useCollections'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MCarouselCollection',
  props: {
    collectionId: {
      type: String,
      required: true,
      default: ''
    }
  },
  setup (props) {
    const slide = ref('')
    const collections = ref([])
    const { getColletion } = useCollections()
    const router = useRouter()

    onMounted(() => {
      handleGetCollection()
    })

    const handleGetCollection = async () => {
      try {
        const { products } = await getColletion(props.collectionId)
        slide.value = products[0].id
        collections.value = products
      } catch (error) {
        console.error(error)
      }
    }

    const goToProduct = (id) => {
      router.push({ name: 'product-details', params: { id } })
    }

    return {
      slide,
      // items,
      collections,
      goToProduct
    }
  }
})
</script>
