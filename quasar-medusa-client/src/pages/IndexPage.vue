<template>
  <q-page padding>
    <m-list-products />
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    MListProducts: defineAsyncComponent(() => import('components/MListProducts.vue'))
  }
})
</script>
