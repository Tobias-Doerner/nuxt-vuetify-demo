<script setup lang="ts">
import { mdiInformation } from '@mdi/js'

const { t } = useI18n()

const items = computed(() => [
  {
    title: t('page.home.item_1.title'),
    subtitle: t('page.home.item_1.subtitle'),
  },
  {
    title: t('page.home.item_2.title'),
    subtitle: t('page.home.item_2.subtitle'),
  },
  {
    title: t('page.home.item_3.title'),
    subtitle: t('page.home.item_3.subtitle'),
  },
  {
    title: t('page.home.item_4.title'),
    subtitle: t('page.home.item_4.subtitle'),
  },
  {
    title: t('page.home.item_5.title'),
    subtitle: t('page.home.item_5.subtitle'),
  },
])
</script>

<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-card
        :max-width="700"
        :title="$t('app.description')"
        :prepend-icon="mdiInformation"
      >
        <v-card-text>
          <v-list lines="three">
            <v-list-item
              v-for="({ subtitle, title }, index) in items"
              :key="index"
              :subtitle="subtitle"
              :title="title"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
