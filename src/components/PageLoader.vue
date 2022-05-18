<template>
  <div class="page-loader" v-if="!isloaded">


    <v-icon :x-large=true class="cube">
      mdi-dog-side
    </v-icon>
    <v-icon :x-large=true class="cube">
      mdi-dog-side
    </v-icon>
    <v-icon :x-large=true class="cube">
      mdi-dog-side
    </v-icon>
    <v-icon :x-large=true class="cube">
      mdi-dog-side
    </v-icon>
    <v-icon :x-large=true class="cube">
      mdi-dog-side
    </v-icon>

  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isloaded: false,
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        this.isloaded = true;
      }
    }
  }
}

</script>

<style lang="scss" scoped>
$colors: #8CC271, #a8cba1, #bbfabf, #dff8bd, #d8f8ce;
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(183, 255, 177, 0.76);
  z-index: 999;
}

.cube {
  width: 50px;
  height: 50px;
  background-color: $colors;
  margin-right: 10px;
  border-radius: 50%;
  animation: cube-animation 1s infinite;
  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
      animation-delay: $i * 0.1s;
    }

    &:first-child {
      animation: left 1s infinite;
    }

    &:last-child {
      animation: right 1s infinite .5s;
    }
  }

  @keyframes left {
    40% {
      transform: translateX(-60px);
    }
    50% {
      transform: translateX(0);
    }

  }

  @keyframes right {
    40% {
      transform: translateX(60px);
    }
    50% {
      transform: translateX(0);
    }

  }
}
</style>