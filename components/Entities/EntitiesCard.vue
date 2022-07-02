<template>
  <component :is="componentToDisplay" />
</template>

<script lang="ts" setup>
import { getComponent } from '../../repository/entities'
const props = defineProps<{ type: string }>()

const componentToDisplay = computed(() => getComponent('card', props.type))
</script>
