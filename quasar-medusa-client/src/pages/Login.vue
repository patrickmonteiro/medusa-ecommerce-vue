<template>
  <q-page class="row items-center justify-center q-px-lg">
    <q-form
      @submit.prevent="handleLogin"
      class="q-gutter-y-md login-form-box"
    >
      <h4 class="text-h4 text-center">
        Login
      </h4>

      <q-input
        v-model="form.email"
        type="email"
        label="Your e-mail *"
        aria-required="true"
      />

      <q-input
        v-model="form.password"
        type="password"
        label="Your password *"
      />

      <div class="full-width column q-mt-xl">
        <q-btn
          label="Enter"
          type="submit"
          color="primary"
          size="lg"
          icon-right="keyboard_arrow_right"
          align="between"
          class="q-mb-md"
          no-caps
        />

        <div class="flex justify-between">
          <q-btn
            label="Forgot password?"
            type="reset"
            size="md"
            color="grey"
            to="/"
            flat
            no-caps
          />

          <q-btn
            label="Create an account"
            type="button"
            color="primary"
            size="md"
            to="/register"
            icon-right="person_add_alt"
            outline
            no-caps
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from 'src/composables/useAuth'

defineComponent({
  name: 'LoginPage'
})

const router = useRouter()

const { login } = useAuth()

const form = ref({
  email: '',
  password: ''
})

const handleLogin = async () => {
  try {
    await login(form.value)
    await router.push({ name: 'home' })
  } catch (e) {
    console.error(e.message)
  }
}
</script>

<style scoped>
.login-form-box {
  max-width: 400px;
  width: 100%;
}
</style>
