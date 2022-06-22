<template>
  <div class="profile">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col>
          <v-card width="344" height="300" color="#98FB98">
            <v-img
              height="250px"
              width="345px"
              src="../assets/profile.svg"
            ></v-img>
            <v-list-item-subtitle
              v-for="p in profil"
              v-bind:key="p"
              style="color: #228b22"
              >{{ p.podaci.ime + " " + p.podaci.prezime }}</v-list-item-subtitle
            >
          </v-card>
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
