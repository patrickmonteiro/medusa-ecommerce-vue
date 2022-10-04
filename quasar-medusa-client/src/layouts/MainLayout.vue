<template>
  <q-layout view="hhh lpR fFr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="gt-sm"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-btn flat size="lg" :to="{ name: 'home' }">
            Quasar Medusa Client
          </q-btn>
        </q-toolbar-title>

        <!-- <div>
          <q-icon
            name="mdi-account"
            size="md"
            @click="toRouteAccount"
          />
        </div> -->
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

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in tabs"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

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
        <q-list separator>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar rounded>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <div>Medusa T-Shirt</div>
              <div>R$ 100</div>
            </q-item-section>
            <q-item-section side>
              <q-icon name="mdi-close-circle-outline" color="negative" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar rounded>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <div>Medusa T-Shirt</div>
              <div>R$ 100</div>
            </q-item-section>
            <q-item-section side>
              <q-icon name="mdi-close-circle-outline" color="negative" />
            </q-item-section>
          </q-item>
        </q-list>
        <div class="q-pa-md">
          <q-btn
            label="Finalizar compra"
            icon="mdi-check"
            color="primary"
            class="full-width"
          />
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        icon="mdi-cart"
        round
        color="primary"
        size="lg"
        @click="showCartMenu"
      />
    </q-page-sticky> -->
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useRouter } from 'vue-router'

const tabs = [
  {
    title: 'Home',
    icon: 'mdi-home',
    route: 'home'
  },
  {
    title: 'Colletions',
    icon: 'mdi-shape-outline',
    route: 'cash'
  },
  {
    title: 'Cart',
    icon: 'mdi-cart-outline',
    route: 'wealth'
  },
  {
    title: 'Account',
    icon: 'mdi-account-outline',
    route: 'form-customer'
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
      router.push({ name: 'form-customer' })
    }

    return {
      cartMenu,
      tabs,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      showCartMenu,
      toRouteAccount
    }
  }
})
</script>
