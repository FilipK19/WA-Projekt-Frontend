<template>
  <div class="about">
    <v-container class="grey lighten-5">
      <v-col no-gutters>
        <v-col>
          <router-link :to="'/shop/buy/' + item">
            <v-btn
              @click="selectItem()"
              rounded
              x-large
              width="500"
              height="150"
              color="#98FB98"
            >
              <v-img
                height="150px"
                width="250px"
                src="../shop/fishingrods.jpg"
              ></v-img>
              <v-list-item-subtitle style="color: #228b22"
                >Buy fishing rods</v-list-item-subtitle
              >
            </v-btn>
          </router-link>
        </v-col>
        <v-col>
          <router-link :to="'/shop/buy/' + item">
            <v-btn
              @click="selectItem2()"
              rounded
              x-large
              width="500"
              height="150"
              color="#98FB98"
            >
              <v-img
                height="150px"
                width="250px"
                src="../shop/bait.jpg"
              ></v-img>
              <v-list-item-subtitle style="color: #228b22"
                >Buy bait</v-list-item-subtitle
              >
            </v-btn>
          </router-link>
        </v-col>
        <v-col>
          <router-link :to="'/shop/buy/' + item">
            <v-btn
              @click="selectItem3()"
              rounded
              x-large
              width="500"
              height="150"
              color="#98FB98"
            >
              <v-img
                height="150px"
                width="250px"
                src="../shop/gear.jpg"
              ></v-img>
              <v-list-item-subtitle style="color: #228b22"
                >Buy gear</v-list-item-subtitle
              >
            </v-btn>
          </router-link>
        </v-col>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Store",
  components: {},

  data() {
    return {
      item: "",
    };
  },
  methods: {
    selectItem() {
      this.item = "fishingRod";
    },
    selectItem2() {
      this.item = "fishingBait";
    },
    selectItem3() {
      this.item = "fishingGear";
    },
  },
};
</script>
