import TimePeriodCard from '../components/Entities/TimePeriod/Card.vue'
import GeospatialCard from '../components/Entities/Geospatial/Card.vue'

const entitiesManifest = {
  TimePeriod: {
    components: {
      card: TimePeriodCard,
    },
    properties: {
      'Created at': {
        type: 'Date',
      },
    },
  },
  Geospatial: {
    components: {
      card: GeospatialCard,
    },
    properties: {
      Coordinates: {
        type: 'GPSCoordinates',
      },
    },
  },
}

export default entitiesManifest
