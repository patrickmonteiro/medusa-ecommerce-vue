<template>
  <q-page padding>
    <q-table
      grid
      title="Produtos"
      :rows="productsList"
      :columns="columns"
      row-key="id"
      :filter="filter"
      hide-header
      :pagination="initialPagination"
      card-container-class="q-col-gutter-md"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="my-card fit" v-ripple:primary>
            <q-img :src="props.row.images[0].url" ratio="1" />

            <q-card-section>
              <div class="text-h6">{{ props.row.title }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ props.row.description }}
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { medusa } from 'boot/medusaClient'

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
  name: 'IndexPage',
  setup () {
    const productsList = ref([])
    const filter = ref('')

    onMounted(() => {
      getProducts()
    })

    const getProducts = () => {
      medusa.products.list()
        .then(({ products, limit, offset, count }) => {
          console.log(products)
          productsList.value = products
        })
    }
    return {
      getProducts,
      productsList,
      filter,
      columns,
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
