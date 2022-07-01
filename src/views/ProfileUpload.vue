<template>
  <div>
    <v-container>
      <v-card style="color: #228b22" width="800" height="150" color="#98FB98">
        <form @submit.prevent="createPost">
          <h2>
            <div>
              <label for="vrsta">Type the name of the fish you caught: </label>
              <input
                STYLE="background-color: #00FA9A;"
                type="text"
                id="vrsta"
                v-model="formData.type"
              />
            </div>
            <v-divider class="mx-4"></v-divider>
            <div>
              <label for="voda">Type the type of fish you caught: </label>
              <input
                STYLE="background-color: #00FA9A;"
                type="text"
                id="voda"
                v-model="formData.water"
              />
            </div>
            <v-divider class="mx-4"></v-divider>
            <div>
              <label for="lokacija">Type where you caught it: </label>
              <input
                STYLE="background-color: #00FA9A;"
                type="text"
                id="lokacija"
                v-model="formData.location"
              />
            </div>
            <v-divider class="mx-4"></v-divider>
            <div>
              <label for="lokacija"
                >What weight was the fish you caught:
              </label>
              <input
                STYLE="background-color: #00FA9A;"
                type="text"
                id="tezina"
                v-model="formData.weight"
              />
            </div>
            <v-divider class="mx-4"></v-divider>
            <v-btn @click="createPost()" rounded color="#00FA9A"
              >Create Post</v-btn
            >
          </h2>
          <h2>{{ error }}</h2>
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
        type: "",
        water: "",
        location: "",
        weight: 0,
      },
      error: "",
    };
  },
  methods: {
    createPost() {
      if (
        this.formData.type != "" &&
        this.formData.water != "" &&
        this.formData.location != "" &&
        this.formData.weight != 0
      ) {
        axios
          .post("http://localhost:3000/caughtfish", this.formData)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        console.log("function called");
        this.error = "Fish added succesfuly";
      } else {
        this.error = "All fields must be filled!";
      }
    },
  },
};
</script>

<style scoped></style>
