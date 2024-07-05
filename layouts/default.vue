<script setup lang="ts">
const theme = ref('dark')
const { public: cfg } = useRuntimeConfig()
const leftDrawer = ref(true)
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar :order="1" density="compact">
      <template #prepend>
        <v-app-bar-nav-icon color="white" @click="leftDrawer = !leftDrawer" />
      </template>

      <template #append>
        <lang-switch />
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="leftDrawer">
      <v-list-item :title="$t('app.name')" :subtitle="$t('app.description')" />
      <v-divider />
      <v-list-item :title="$t('nav.home')" to="/" />
      <v-list-item :title="$t('nav.about')" to="/about" />
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>

    <v-footer app>
      <div class="text-center w-100">
        {{ new Date().getFullYear() }} - <strong>{{ $t('app.name') }}</strong> -
        {{ cfg.version }}
      </div>
    </v-footer>
  </v-app>
</template>
