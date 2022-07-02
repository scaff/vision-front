<template>
  <div>
    <EntitiesCard
      v-for="note in notes"
      :key="note.name"
      :type="note.type"
      :properties="note.properties"
    />
  </div>
</template>

<script lang="ts" setup>
import { Entity } from '../types/Entity'
import { PropertiesType } from '../types/PropertiesType'

import EntitiesCard from '../components/Entities/EntitiesCard.vue'

const notes: Array<Entity> = [
  {
    name: 'Test',
    type: 'TimePeriod',
    properties: [
      {
        name: 'Created at',
        type: PropertiesType.Date,
      },
    ],
  },
  {
    name: 'Test',
    type: 'Geospatial',
    properties: [
      {
        name: 'Created at',
        type: PropertiesType.Date,
      },
    ],
  },
  {
    name: 'Test',
    type: 'TimePeriod',
    properties: [
      {
        name: 'Created at',
        type: PropertiesType.Date,
      },
    ],
  },
]
</script>
