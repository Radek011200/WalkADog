<template>
  <div style ="height: 100%">
    <button id='btn' @click="changeColor" style="border-radius: 25px; border: 2px solid #00B300; height:5%; width:10%; top:10%; left:45%; position: relative" v-on:click='remove'>Remove last
    </button>
    <l-map @click="addMarker" style=" position:relative; height: 50%; width: 20%; left: 40%; top: 15%; border-radius: 25px; border: 2px solid #00B300;" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" >
      </l-tile-layer>
      <l-marker v-for="marker in markers" v-bind:key="marker" :lat-lng="marker" :icon = ICON :draggable=false>
      </l-marker>
      <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color" ></l-polyline>
      <l-circle
          :lat-lng="markers[0]"
          :color="circle.color"
          :radius = "circle.radius * circle.timer[0]"
      />
    </l-map>
  </div>
</template>

<script >
import {LMap, LTileLayer, LMarker, LPolyline, LCircle} from 'vue2-leaflet';
import { Icon }  from 'leaflet';
import L from 'leaflet';
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
        iconUrl: require('C:/Users/ardik/WebstormProjects/WalkADog/public/marker.png'),
        iconSize: [38, 95],
        iconAnchor: [22, 94]
      }),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 16,
      center: [53.759030, 20.46009],
      markerLatLng: [53.759030, 20.46009],
      markers: [],
      polyline: {
        latlngs: [],
        color: 'green'
      },
      circle:{
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
      if(this.markers.length < 2){
        this.markers.push(event.latlng);
        this.polyline.latlngs.push(event.latlng);
        this.circle.timer.push(50);
      }
    },
    changeColor() {
        document.getElementById("btn").style.backgroundColor='#00B300';
        document.getElementById("btn").style.color = 'white';
        setTimeout(() => {
          document.getElementById("btn").style.backgroundColor='white';
          document.getElementById("btn").style.color = 'black';
        }, 100);
    },
  }
}
</script>