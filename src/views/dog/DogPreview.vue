<template>
  <div>
    <title-component :title="title"></title-component>
    <dog-preview-part1
        @active="togglePreview"
        :dog="dogData"
        :active="active"
    />
    <dog-preview-part2
        @active="togglePreview"
        :dog="dogData"
        :active="active"/>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import DogPreviewPart1 from "@/components/dog/DogPreviewPart1";
import DogPreviewPart2 from "@/components/dog/DogPreviewPart2";
import axios from "axios";

export default {
  name: "DogPreview",
  components: {TitleComponent, DogPreviewPart1, DogPreviewPart2},
  data() {
    return {
      title: "Profil psa",
      id: this.$route.params.dogId,
      dogData: {},
      active: true,
    };
  },
  methods: {
    async getDogData() {
      await axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/dog/" + this.id + "/",
        headers: {
          Authorization: 'Token ' + localStorage.token
        }
      }).then(response => {
        this.dogData = response.data
      })
          .catch(function (error) {
            if (error.response.status === 500) {
              alert("Błąd serwera");
            }
          });
    },
    back() {
      this.$router.push("/dogs/");
    },
    togglePreview() {
      this.active = !this.active;
    },
  },
  created() {
    this.getDogData();
  },
}
</script>

<style scoped>

</style>