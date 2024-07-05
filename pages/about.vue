<script setup lang="ts">
import { mdiInformation, mdiLinkedin, mdiTwitter } from '@mdi/js'
</script>

<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-card
        :max-width="500"
        :title="$t('nav.about')"
        :prepend-icon="mdiInformation"
      >
        <v-card-text>
          <div class="ma-4 text-body-1">
            {{ $t('page.about.text') }}
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            :icon="mdiLinkedin"
            color="secondary"
            href="https://www.linkedin.com/in/tobias-doerner-367170150/"
            variant="text"
          />
          <v-btn
            :icon="mdiTwitter"
            color="secondary"
            href="https://twitter.com/Tobias_Doerner"
            variant="text"
          />
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
