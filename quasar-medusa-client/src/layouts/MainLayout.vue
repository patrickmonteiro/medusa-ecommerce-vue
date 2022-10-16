<template>
  <q-layout view="hhh lpR fFr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          icon="menu"
          aria-label="Menu"
          class="gt-sm"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-btn flat no-caps size="lg" :to="{ name: 'home' }">
            Quasar Medusa Client
          </q-btn>
        </q-toolbar-title>

        <div>
          <q-btn-dropdown
            color="white"
            icon="person"
            flat
            dense
          >
            <q-list>
              <q-item clickable v-close-popup to="/login">
                <q-item-section>
                  <q-item-section>Login</q-item-section>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup to="/register">
                <q-item-section>
                  <q-item-section>Register</q-item-section>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn
            class="q-ml-md"
            color="white"
            icon="mdi-cart"
            @click="showCartMenu"
            dense
            flat
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-footer class="lt-md" elevated>
      <q-tabs
        align="justify"
        dense
        no-caps
        indicator-color="white"
        class="bg-white text-weight-thin text-grey-7"
        active-color="primary"
      >
        <q-route-tab
          v-for="(tab, index) in tabs"
          :key="index"
          :icon="tab.icon"
          :label="tab.title"
          content-class="text-weight-thin"
          :to="{ name: tab.route }"
        />
      </q-tabs>
    </q-footer>

    <!-- side menu -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <EssentialLink
          v-for="link in tabs"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <!-- cart -->
    <q-drawer
      side="right"
      v-model="cartMenu"
      elevated
      :breakpoint="500"
      behavior="mobile"
      mobile
      class="bg-white"
    >
      <q-scroll-area class="fit">
        <div class="fixed-top bg-white bring-it-up q-pl-md q-pr-xs q-py-md flex justify-between">
          <h5 class="text-h5 q-my-none">My cart</h5>
          <q-btn
            icon="mdi-close"
            @click="showCartMenu"
            color="grey-5"
            flat
          />
        </div>

        <q-list separator class="q-py-xl q-mt-md q-mb-xl">
          <q-item v-for="i in 24" :key="i" clickable>
            <q-item-section avatar>
              <q-avatar rounded v-ripple>
                <img :src="`https://picsum.photos/id/${Math.ceil(Math.random() * (0 - 6) + 6)}/40/40.webp`"
                     alt="placeholder" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <div>Medusa sample product</div>
              <div>R$ 100</div>
            </q-item-section>

            <q-item-section side>
              <q-btn
                icon="mdi-delete"
                color="grey-5"
                dense
                flat
                v-ripple
              />
            </q-item-section>
          </q-item>
        </q-list>

        <div class="fixed-bottom bg-white q-pa-md">
          <q-btn
            label="Finalizar compra"
            icon-right="mdi-check"
            color="primary"
            align="between"
            class="full-width"
            size="lg"
            no-caps
          />
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import EssentialLink from 'components/EssentialLink.vue'

const tabs = [
  {
    title: 'Home',
    icon: 'mdi-home',
    route: 'home'
  },
  {
    title: 'Colletions',
    icon: 'mdi-shape-outline',
    route: 'collections'
  },
  {
    title: 'Account',
    icon: 'mdi-account-outline',
    route: 'login'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const cartMenu = ref(false)
    const router = useRouter()

    const showCartMenu = () => {
      cartMenu.value = !cartMenu.value
    }

    const toRouteAccount = () => {
      router.push({ name: 'login' })
    }

    return {
      cartMenu,
      tabs,
      leftDrawerOpen,
      showCartMenu,
      toRouteAccount,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
  .bring-it-up {
    z-index: 99;
  }
</style>
