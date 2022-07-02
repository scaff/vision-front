<template>
  <component :is="componentToDisplay" :properties="propertiesWithType" />
</template>

<script lang="ts" setup>
import { getComponent } from '../../repository/entities'
import { getMatchingProperty } from '../../repository/properties'

const props = defineProps<{ entity: unknown; properties: unknown }>()

const componentToDisplay = computed(() =>
  getComponent('card', props.entity.type)
)

const propertiesWithType = computed(() => {
  return props.entity.properties.map((property) => ({
    ...property,
    ...getMatchingProperty(property, props.entity),
  }))
})
</script>
