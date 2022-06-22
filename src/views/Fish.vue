<template>
  <div class="about">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col>
          <router-link :to="'/fish/FishDetails/'">
            <v-btn rounded x-large width="900" height="100" color="#98FB98">
              <v-img
                height="60px"
                width="60px"
                src="../assets/search.svg"
              ></v-img>
              <v-list-item-subtitle style="color: #228b22"
                >Search for specific fish</v-list-item-subtitle
              >
            </v-btn>
          </router-link>
          <v-col> </v-col>
        </v-col>
        <v-col>
          <v-btn rounded x-large width="900" height="100" color="#98FB98">
            <v-img
              height="60px"
              width="60px"
              src="../assets/category.svg"
            ></v-img>
            <v-list-item-subtitle style="color: #228b22"
              >Search by category</v-list-item-subtitle
            >
          </v-btn>
          <v-col> </v-col>
        </v-col>
        <v-col>
          <v-btn rounded x-large width="900" height="100" color="#98FB98">
            <v-img
              height="60px"
              width="60px"
              src="../assets/random.svg"
            ></v-img>
            <v-list-item-subtitle style="color: #228b22"
              >Learn about random fish</v-list-item-subtitle
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
