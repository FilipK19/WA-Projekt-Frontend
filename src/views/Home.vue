<template>
  <div class="home">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col>
          <v-card width="344" height="300">
            <v-img height="250" src="../assets/profile.svg"></v-img>
            <router-link to="/profile">Profile</router-link>
            <v-list-item-subtitle>Your profile</v-list-item-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card max-width="344">
            <v-img height="250" src="../assets/store.svg"></v-img>
            <router-link to="/store">Store</router-link>
            <v-list-item-subtitle>Buy stuff</v-list-item-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card max-width="344">
            <v-img height="250" src="../assets/fish.svg"></v-img>
            <router-link to="/fish">Fish</router-link>
            <v-list-item-subtitle>Your fish</v-list-item-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},

  data() {
    return {};
  },
};
</script>

<style></style>
