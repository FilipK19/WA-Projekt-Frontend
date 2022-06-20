<template>
  <div class="home">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col>
          <v-btn width="344" height="300">
            <router-link to="/profile">
              <v-card width="344" height="300">
                <v-img height="250" src="../assets/profile.svg"></v-img>
                <p class="text-center">Profile</p>
                <v-list-item-subtitle>Your profile</v-list-item-subtitle>
              </v-card>
            </router-link>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn width="344" height="300">
            <router-link to="/store">
              <v-card width="344" height="300">
                <v-img height="250" src="../assets/store.svg"></v-img>
                <v-list-item-subtitle>Buy stuff</v-list-item-subtitle>
              </v-card>
            </router-link>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn width="344" height="300">
            <router-link to="/store">
              <v-card width="344" height="300">
                <v-img height="250" src="../assets/fish.svg"></v-img>
                <v-list-item-subtitle>Your fish</v-list-item-subtitle>
              </v-card>
            </router-link>
          </v-btn>
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
