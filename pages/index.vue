<template>
  <div>
    <Card
      v-for="note in notes"
      :key="note.name"
      :entity="note"
      :properties="note.properties"
    />
  </div>
</template>

<script lang="ts" setup>
import { Entity } from '../types/Entity'
import { PropertiesType } from '../types/PropertiesType'

import Card from '../components/Entities/Card.vue'

const notes: Array<Entity> = [
  {
    name: 'Test',
    type: 'TimePeriod',
    properties: [
      {
        name: 'Created at',
        value: new Date(),
      },
    ],
  },
  {
    name: 'Test',
    type: 'Geospatial',
    properties: [
      {
        name: 'Coordinates',
        value: [15.04, 152.57],
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
