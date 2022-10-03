<template>
  <div class="lt-sm">
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
      height="300px"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png"
        >
        <div class="absolute-bottom custom-caption text-center">
          <div class="text-h6">T-shirt</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png">
        <div class="absolute-bottom custom-caption text-center">
          <div class="text-h6">T-shirt</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png">
        <div class="absolute-bottom custom-caption text-center">
          <div class="text-h6">T-shirt</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import useCollections from 'src/composables/useCollections'

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
      slide
    }
  }
})
</script>
