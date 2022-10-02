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
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar Medusa Client
        </q-toolbar-title>

        <div>
          <q-icon
            name="mdi-account"
            size="md"
            @click="toRouteAccount"
          />
        </div>
      </q-toolbar>
    </q-header>

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
          v-for="link in essentialLinks"
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

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        icon="mdi-cart"
        round
        color="primary"
        size="lg"
        @click="showCartMenu"
      />
    </q-page-sticky>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useRouter } from 'vue-router'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
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
      essentialLinks: linksList,
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
