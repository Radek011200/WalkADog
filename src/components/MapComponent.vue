<template>
  <div style="display: flex; flex-direction: column; height: 100%; align-items: center">
    <v-btn id='btn'
            color="success" :x-large=true rounded
            style="position: absolute; bottom: 120px"
            v-on:click='remove(), showMarkers()'>Usuń znacznik
    </v-btn>
    <v-btn text :x-large=true @click="back()" style="position:absolute; bottom: 180px">Powrót</v-btn>
    <v-btn href="/new-walk-summary" color="success" :x-large=true rounded style="position:absolute; bottom: 5%" @click="saveMarkers()">Podsumowanie</v-btn>
    <l-map @click="addMarker"
           style="position: fixed; height: 40%; width: 90%; max-width: 300px; border-radius: 25px; border: 2px solid #00B300;"
           :zoom="zoom" :center="center">
      <l-tile-layer :url="url">
      </l-tile-layer>
      <l-marker v-for="marker in markers" v-bind:key="marker" :lat-lng="marker" :draggable=false>
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
import  {Icon} from 'leaflet';
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
      },
      lista:[]
    };
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    showMarkers(){
      console.log(this.markers)
    },
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
        this.lista.push(event.latlng)
        console.log(this.lista)
      }

    },
    saveMarkers: function (){
      localStorage.setItem("Markers", this.lista)
    }
    // changeColor() {
    //   document.getElementById("btn").style.backgroundColor = '#00B300';
    //   document.getElementById("btn").style.color = 'white';
    //   setTimeout(() => {
    //     document.getElementById("btn").style.backgroundColor = 'white';
    //     document.getElementById("btn").style.color = 'black';
    //   }, 100);
  }
}
</script>