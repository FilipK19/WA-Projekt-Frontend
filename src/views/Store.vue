<template>
  <div class="store">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col>
          <v-btn rounded width="350" height="300" color="#98FB98">
            <router-link to="/shopbuy">
              <v-img
                height="225px"
                width="270px"
                src="../assets/buy.svg"
              ></v-img>
              <v-list-item-subtitle>Buy items</v-list-item-subtitle>
            </router-link>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn rounded width="350" height="300" color="#98FB98">
            <router-link to="/shoprent">
              <v-img
                height="225px"
                width="260px"
                src="../assets/rent.svg"
              ></v-img>
              <v-list-item-subtitle>Rent items</v-list-item-subtitle>
            </router-link>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
