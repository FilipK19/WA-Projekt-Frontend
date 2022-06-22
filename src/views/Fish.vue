<template>
  <div class="about">
    hm:{{ imput }}
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col>
          <router-link :to="'/fish/FishDetails/' + input">
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
          <v-text-field label="Enter fish" v-model="input"> </v-text-field>
          <v-btn color="#98FB98" @click="submit">Search</v-btn>
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

<script>
export default {
  name: "Fish",
  components: {},

  data() {
    return {
      input: "",
    };
  },
  methods: {
    submit() {
      console.log(this.input);
    },
  },
};
</script>
