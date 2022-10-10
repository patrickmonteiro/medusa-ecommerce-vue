<template>
  <section class="related full-width q-py-xl">
    <h4 class="text-h4 text-center q-mt-none q-mb-xl">
      You might also like
    </h4>

    <div class="q-table__grid-content row q-col-gutter-lg">
      <div
        v-for="item in collections"
        :key="item.id"
        class="col-xs-6 col-md-3">
        <q-card
          class="my-card fit"
          v-ripple:primary
          @click="goToProduct(item.id)"
        >
          <q-img :src="item.thumbnail" ratio="1" :alt="item.name" />

          <q-card-section>
            <div class="text-subtitle2">{{ item.title }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import useCollections from 'src/composables/useCollections'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MCollections',
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
      collections,
      goToProduct
    }
  }
})
</script>
