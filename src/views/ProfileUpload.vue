<template>
  <div>
    <v-container>
      <v-card style="color: #228b22" width="650" height="150" color="#98FB98">
        <form @submit.prevent="createPost">
          <h2>
            <div>
              <label for="vrsta">Napišite ime upecane ribe: </label>
              <input
                STYLE="background-color: #00FA9A;"
                type="text"
                id="vrsta"
                v-model="formData.vrsta"
              />
            </div>
            <v-divider class="mx-4"></v-divider>
            <div>
              <label for="voda">Napišite vrstu upecane ribe: </label>
              <input
                STYLE="background-color: #00FA9A;"
                type="text"
                id="voda"
                v-model="formData.voda"
              />
            </div>
            <v-divider class="mx-4"></v-divider>
            <div>
              <label for="lokacija">Napišite gdje ste ju upecali: </label>
              <input
                STYLE="background-color: #00FA9A;"
                type="text"
                id="lokacija"
                v-model="formData.lokacija"
              />
            </div>
            <v-divider class="mx-4"></v-divider>
            <v-btn rounded color="#00FA9A">Create Post</v-btn>
          </h2>
        </form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProfilUpload",
  data() {
    return {
      formData: {
        vrsta: "",
        voda: "",
        lokacija: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("http://localhost:3000/upecane/ribe", this.formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log("function called");
    },
  },
};
</script>

<style scoped></style>
