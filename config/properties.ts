import DateShow from '../components/Properties/Date/Show.vue'
import GPSCoordinatesShow from '../components/Properties/GPSCoordinates/Show.vue'

const propertiesManifest = {
  GPSCoordinates: {
    components: {
      show: GPSCoordinatesShow,
    },
  },
  Date: {
    components: {
      show: DateShow,
    },
  },
}

export default propertiesManifest
