<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-md-4 col-sm-8 col-xs-12 q-gutter-y-md">
        <q-input
          label="Nome"
          outlined
          v-model="form.first_name"
        />

        <q-input
          label="Sobrenome"
          outlined
          v-model="form.last_name"
        />

        <q-input
          label="Email"
          outlined
          v-model="form.email"
        />

        <q-input
          label="Senha"
          outlined
          v-model="form.password"
        />

        <q-input
          label="Telefone"
          outlined
          v-model="form.phone"
        />

        <q-btn
          label="Cadastrar"
          class="full-width"
          color="primary"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
// import useProduct from 'src/composables/useProducts'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const filter = ref('')
    const form = ref({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone: ''
    })
    // const { listProducts } = useProduct()
    const router = useRouter()

    onMounted(() => {
      // handleGetproducts()
    })

    // const handleGetproducts = async () => {
    //   try {
    //     productsList.value = await listProducts()
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }

    const handleProdutDetails = (id) => {
      router.push({ name: 'product-details', params: { id } })
    }

    return {
      // productsList,
      filter,
      handleProdutDetails,
      form
    }
  }
})
</script>
