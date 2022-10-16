<template>
  <q-page padding>
      <div class="row justify-center">
        <q-list bordered class="col-sm-12 col-xs-12 col-md-4" separator>
          <q-item
            v-for="item in collectionsList"
            :key="item.id"
            clickable
            v-ripple:primary
          >
            <q-item-section>{{ item.title }}</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary" name="mdi-arrow-right" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import useCollections from 'src/composables/useCollections'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'CollectionsListPage',
  setup () {
    const collectionsList = ref([])
    const { listCollections } = useCollections()
    const route = useRoute()

    onMounted(() => {
      handleGetCollections(route.params.id)
    })

    const handleGetCollections = async () => {
      try {
        const { collections } = await listCollections()
        collectionsList.value = collections
      } catch (error) {
        console.error(error)
      }
    }

    return {
      collectionsList
    }
  }
})
</script>
