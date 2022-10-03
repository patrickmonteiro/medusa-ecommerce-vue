<template>
  <q-page class="row items-center justify-center q-px-lg">
    <q-form
      @submit.prevent="handleRegister"
      class="q-gutter-y-md register-form-box"
    >
      <h4 class="text-h4 text-center">
        Register
      </h4>

      <q-input
        v-model="form.first_name"
        type="text"
        label="Your first name *"
        aria-required="true"
      />

      <q-input
        v-model="form.last_name"
        type="text"
        label="Your last name *"
        aria-required="true"
      />

      <q-input
        v-model="form.email"
        type="email"
        label="Your e-mail *"
        aria-required="true"
      />

      <q-input
        v-model="form.phone"
        type="tel"
        label="Your phone number"
      />

      <q-input
        v-model="form.password"
        type="password"
        label="Your password *"
      />

      <div class="full-width column q-mt-xl">
        <q-btn
          label="Register"
          type="submit"
          color="primary"
          size="lg"
          icon-right="person_add_alt"
          align="between"
          class="q-mb-md"
          no-caps
        />

        <q-btn
          label="Already have an account? Log in here!"
          type="button"
          color="primary"
          size="md"
          to="/login"
          flat
          no-caps
        />
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import useCustomer from 'src/composables/useCustomer'

defineComponent({
  name: 'RegisterPage'
})

const router = useRouter()

const { createCustomer } = useCustomer()

const form = ref({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  phone: ''
})

const handleRegister = async () => {
  try {
    await createCustomer(form.value)
    await router.push({ name: 'home' })
  } catch (e) {
    console.error(e.message)
  }
}
</script>

<style scoped>
.register-form-box {
  max-width: 400px;
  width: 100%;
}
</style>
