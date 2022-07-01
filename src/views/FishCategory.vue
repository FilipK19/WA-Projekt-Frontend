<template>
  <div>
    <h2 style="color: #228b22">Odaberite kategoriju:</h2>
    <v-btn @click="vrsta1()" rounded color="#98FB98"> Freshwater</v-btn>
    <v-btn @click="vrsta2()" rounded color="#98FB98"> Saltwater</v-btn>
    <h3 style="color: #228b22" v-for="f in fishData" v-bind:key="f">
      <h3 v-if="f.water == vrstaRibe">
        {{ f.vrsta }}
      </h3>
    </h3>
  </div>
</template>

<script>
export default {
  name: "FishCategory",
  async mounted() {
    let response = await fetch("http://localhost:3000/fishdb");
    console.log(response);
    let data = await response.json();
    this.fishData = data;
  },
  data() {
    return {
      fishData: [],
      vrstaRibe: "",
      vodaRibe: "",
    };
  },
  methods: {
    vrsta1() {
      this.vrstaRibe = "Freshwater";
    },
    vrsta2() {
      this.vrstaRibe = "Saltwater";
    },
  },
};
</script>
