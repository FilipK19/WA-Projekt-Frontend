<template>
  <div class="profile">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col>
          <v-card width="344" height="300" color="#98FB98">
            <v-img
              height="220px"
              width="335px"
              src="../assets/profile.svg"
            ></v-img>
            <h1 v-for="p in profil" v-bind:key="p" style="color: #228b22">
              {{ p.ime }} {{ p.prezime }}
            </h1>
          </v-card>
        </v-col>
        <v-col>
          <router-link :to="'/profile/upload/'">
            <v-btn width="344" height="150" color="#98FB98">
              <v-img
                height="150px"
                width="150px"
                src="../assets/upload.svg"
              ></v-img>
              <h1 style="color: #228b22">Upload</h1>
            </v-btn>
          </router-link>
          <v-col></v-col>
          <v-col>
            <router-link :to="'/profile/statistics/'">
              <v-btn width="344" height="150" color="#98FB98">
                <v-img
                  height="150px"
                  width="150px"
                  src="../assets/statistic.svg"
                ></v-img>
                <h2 style="color: #228b22">Fishes caught</h2>
              </v-btn>
            </router-link>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Profile",
  async mounted() {
    let response = await fetch("http://localhost:3000/profil");
    console.log(response);
    let data = await response.json();
    this.profil = data;
  },
  data() {
    return {
      profil: [],
    };
  },
};
</script>
