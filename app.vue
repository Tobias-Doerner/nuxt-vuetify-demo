<script setup>
const { locale, t } = useI18n()

const description = computed(() => {
  return t('app.description')
})

useHead({
  title: 'Demo',
  meta: [{ name: 'description', content: description }],
  htmlAttrs: {
    lang: locale,
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
