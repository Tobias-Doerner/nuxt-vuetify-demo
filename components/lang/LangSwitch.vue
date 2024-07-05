<script setup lang="ts">
import { mdiMenuDown } from '@mdi/js'

const { locale, locales, setLocale } = useI18n()

const currentLocale = computed({
  get() {
    return locale.value
  },
  set(newLocale) {
    setLocale(newLocale)
  },
})
</script>

<template>
  <v-menu location="bottom" open-on-hover>
    <template #activator="{ props }">
      <v-btn v-bind="props">
        {{ currentLocale }} <v-icon :icon="mdiMenuDown" />
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="{ code, name } in locales"
        :key="code"
        @click="currentLocale = code"
      >
        <v-list-item-title>{{ name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
