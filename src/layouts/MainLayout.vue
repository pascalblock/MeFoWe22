<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-toolbar-title> GEOQUIZR </q-toolbar-title>

          <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="toggleDrawer"
          />

      </q-toolbar>
    </q-header>

    <q-drawer
        side="right"
        v-model="drawerOpen"
        bordered
    >
      <q-list>
          <div style="margin-left: 1rem; margin-top: 1rem">
              <q-avatar size="5rem" font-size="5rem" color="primary" text-color="white" icon="account_circle" />
              <div class="text-weight-bold">Name</div>
              <div>Level</div>
          </div>

         <hr>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  data(){
      return {
          linksList: [
              {
                  title: this.$t('sideBar.faq'),
                  icon: "quiz",
                  link: "faq",
              },
              {
                  title: this.$t('sideBar.contact'),
                  icon: "contact_mail",
                  link: "https://github.com/quasarframework",
              },
              {
                  title: this.$t('sideBar.imprint'),
                  icon: "policy",
                  link: "https://chat.quasar.dev",
              },
              {
                  title: this.$t('sideBar.config'),
                  icon: "settings",
                  link: "https://forum.quasar.dev",
              }
          ]
      }
  },

  setup() {
    const drawerOpen = ref(false);

    return {
      drawerOpen,
      toggleDrawer() {
        drawerOpen.value = !drawerOpen.value;
      },
    };
  },
});
</script>
