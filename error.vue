<script setup lang="ts">
import { clearError } from 'nuxt/app'

const props = defineProps({
  error: {
    type: Object,
    required: true,
    default: () => {},
  },
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <v-container>
      <v-card v-if="props.error.statusCode === 404" :max-width="700">
        <v-card-title>{{ $t('error.page_not_found') }}</v-card-title>
        <v-card-text>{{ props.error.message }}</v-card-text>
        <v-card-actions>
          <v-btn @click="handleError"> {{ $t('common.nav.back') }}</v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-else :max-width="700">
        <v-card-title>{{ $t('error.heading') }}</v-card-title>
        <v-card-text>{{ props.error.message }}</v-card-text>
        <v-card-actions>
          <v-btn @click="handleError">{{ $t('common.nav.back') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </NuxtLayout>
</template>
