<template>
  <div>
    <v-container>
      <v-col style="color: #228b22">
        <h1>Select which item you want to return:</h1>
        <h1 v-for="r in toRent" v-bind:key="r">
          <v-btn
            color="#98FB98"
            @click="
              (item = r._id), (name = r.name), (status = ' has been selected')
            "
          >
            {{ r.name }}
          </v-btn>
        </h1>
      </v-col>
      <v-col style="color: #228b22">
        <h1>{{ name + status }}</h1>
        <h2>
          <v-btn color="#98FB98" @click="returnItem(), refresh()"
            >Return selected item</v-btn
          >
        </h2>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Rent",

  data() {
    return {
      toRent: [],
      item: "",
      name: "",
      status: "",
    };
  },
  methods: {
    returnItem() {
      axios
        .delete("http://127.0.0.1:3000/rent/" + this.item)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log("function called");
    },
    async refresh() {
      let response = await fetch("http://localhost:3000/rent/");
      console.log(response);
      let data = await response.json();
      this.toRent = data;
    },
  },

  async beforeMount() {
    let response = await fetch("http://localhost:3000/rent/");
    console.log(response);
    let data = await response.json();
    this.toRent = data;
  },
};
</script>
