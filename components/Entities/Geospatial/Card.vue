<template>
  <div>
    Geospatial card
    <Show
      v-for="property in properties"
      :key="property.name"
      :type="property.type"
      :property="property"
    />
  </div>
</template>

<script lang="ts" setup>
import Show from '~~/components/Properties/Show.vue'

defineProps<{ properties: any }>()
</script>
