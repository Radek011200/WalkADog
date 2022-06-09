<template>
  <div style="display: flex; flex-direction: column; height: 100%; align-items: center">
    <l-map @click="addMarker"
           style="position: fixed; height: 40%; width: 90%; max-width: 300px; border-radius: 25px; border: 2px solid #00B300;"
           :zoom="zoom" :center="center">
      <l-tile-layer :url="url">
      </l-tile-layer>
      <l-marker v-for="marker in markers" v-bind:key="marker" :lat-lng="marker" :icon=ICON :draggable=false>
      </l-marker>
      <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color"></l-polyline>
      <l-circle
          :lat-lng="markers[0]"
          :color="circle.color"
          :radius="circle.radius * circle.timer[0]"
      />
    </l-map>
  </div>
</template>

<script>
import {LCircle, LMap, LMarker, LPolyline, LTileLayer} from 'vue2-leaflet';
import L, {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';


// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
//var L = window.L
export default {
  name: 'MapComponent',
  components: {LMap, LTileLayer, LMarker, LPolyline, LCircle},
  data: function () {
    return {
      icon: L.icon({
        iconUrl: require("../../public/marker.png"),
        iconSize: [38, 95],
        iconAnchor: [22, 94]
      }),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 16,
      center: [53.759030, 20.46009],
      markers: [],
      polyline: {
        latlngs: [],
        color: 'green'
      },
      circle: {
        radius: 1500,
        color: 'blue',
        timer: [2]
      }
    };
  },
  methods: {
    remove() {
      this.markers.splice(-1, 1);
      this.polyline.latlngs.splice(-1, 1);
    },
    addMarker(event) {
      //if(this.markers.length < 2 &&( event.latlng < this.markers[0] + [0.01, 0.01] || event.latlng > this.markers[0] - [0.01, 0.01])) {
      if (this.markers.length < 2) {
        this.markers.push(event.latlng);
        this.polyline.latlngs.push(event.latlng);
        this.circle.timer.push(50);
      }
    },
  }
}
</script>