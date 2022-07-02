<template>
  <component :is="componentToDisplay" :property="property" />
</template>

<script lang="ts" setup>
import { getProperty } from '../../repository/properties'
const props = defineProps<{ property: any }>()

const componentToDisplay = computed(() => {
  return getProperty('show', props.property.type)
})
</script>
