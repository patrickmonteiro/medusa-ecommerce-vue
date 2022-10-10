<template>
  <q-table
    grid
    title="Products"
    :rows="productsList"
    :columns="columns"
    row-key="id"
    :filter="filter"
    hide-header
    :pagination="initialPagination"
    card-container-class="q-col-gutter-lg"
  >
    <template v-slot:top-right>
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>

    <template v-slot:item="props">
      <div class="col-xs-6 col-sm-4 col-md-3">
        <q-card
          class="my-card fit"
          v-ripple:primary
          @click="handleProdutDetails(props.row.id)"
        >
          <q-img :src="props.row.images[0].url" ratio="1" />

          <q-card-section>
            <div class="text-subtitle2">{{ props.row.title }}</div>
          </q-card-section>
        </q-card>
      </div>
    </template>
  </q-table>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import useProduct from 'src/composables/useProducts'
import { useRouter } from 'vue-router'

const columns = [
  {
    name: 'title',
    required: true,
    label: 'Title',
    align: 'left',
    field: row => row.title,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
]

export default defineComponent({
  name: 'MListProducts',
  setup () {
    const productsList = ref([])
    const filter = ref('')
    const { listProducts } = useProduct()
    const router = useRouter()

    onMounted(() => {
      handleGetproducts()
    })

    const handleGetproducts = async () => {
      try {
        productsList.value = await listProducts()
      } catch (error) {
        console.error(error)
      }
    }

    const handleProdutDetails = (id) => {
      router.push({ name: 'product-details', params: { id } })
    }

    return {
      columns,
      productsList,
      filter,
      handleProdutDetails,
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 12
      }
    }
  }
})
</script>
