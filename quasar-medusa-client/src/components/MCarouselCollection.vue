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
        v-for="item in items"
        :key="item.id"
        :name="item.id"
        :img-src="item.imgUrl"
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

const items = [
  {
    title: 'T-shirt',
    imgUrl: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png',
    id: 1
  },
  {
    title: 'T-shirt 2',
    imgUrl: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png',
    id: 2
  },
  {
    title: 'T-shirt 3',
    imgUrl: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png',
    id: 3
  }
]

export default defineComponent({
  name: 'MCarouselCollection',
  setup () {
    const slide = ref(1)
    const collections = ref([])
    const { getColletion } = useCollections()

    onMounted(() => {
      handleGetCollection()
    })

    const handleGetCollection = async () => {
      try {
        collections.value = await getColletion('pcol_01GEFYGW4J9F0234MX05K31PMY')
      } catch (error) {
        console.error(error)
      }
    }

    return {
      slide,
      items
    }
  }
})
</script>
