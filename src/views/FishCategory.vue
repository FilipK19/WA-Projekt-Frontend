<template>
  <div>
    <h2 style="color: #228b22">Odaberite kategoriju:</h2>
    <v-btn @click="vrsta1()" rounded color="#98FB98"> Freshwater</v-btn>
    <v-btn @click="vrsta2()" rounded color="#98FB98"> Saltwater</v-btn>
    <h3 style="color: #228b22" v-for="f in fishData" v-bind:key="f">
      <h3 v-if="f.water == vrstaRibe">
        {{ f.type }}
      </h3>
    </h3>
  </div>
</template>

<script>
export default {
  name: "FishCategory",
  data() {
    return {
      fishData: [
        {
          type: "Pastrva",
          water: "Freshwater",
          location: "Continent",
        },
        {
          type: "Šaran",
          water: "Freshwater",
          location: "Continent",
        },
        {
          type: "Mladica",
          water: "Freshwater",
          location: "Continent",
        },
        {
          type: "Lipljen",
          water: "Freshwater",
          location: "Continent",
        },
        {
          type: "Kečiga",
          water: "Freshwater",
          location: "Continent",
        },
        {
          type: "Štuka",
          water: "Freshwater",
          location: "Continent",
        },
        {
          type: "Smuđ",
          water: "Freshwater",
          location: "Continent",
        },
        {
          type: "Som",
          water: "Freshwater",
          location: "Continent",
        },
        {
          type: "Špar",
          water: "Saltwater",
          location: "Middle Dalmatia",
        },
        {
          type: "Tuna",
          water: "Saltwater",
          location: "Middle Dalmatia",
        },
        {
          type: "Morska Mačka",
          water: "Saltwater",
          location: "Kvarner",
        },
        {
          type: "Skuša",
          water: "Saltwater",
          location: "Kvarner",
        },
        {
          type: "Ugor",
          water: "Saltwater",
          location: "Istra",
        },
        {
          type: "Arbun",
          water: "Saltwater",
          location: "Istra",
        },
        {
          type: "Trilja",
          water: "Saltwater",
          location: "Istra, South Dalmatia",
        },
        {
          type: "Škarpina",
          water: "Saltwater",
          location: "Istra, Kvarner, South Dalmatia",
        },
        {
          type: "Orada",
          water: "Saltwater",
          location: "Istra, Kvarner, South Dalmatia",
        },
        {
          type: "Brancin",
          water: "Saltwater",
          location: "Istra, Kvarner, South Dalmatia",
        },
        {
          type: "Cipal",
          water: "Saltwater",
          location: "Istra, South Dalmatia",
        },
        {
          type: "Zubatac",
          water: "Saltwater",
          location: "Istra, South Dalmatia",
        },
      ],
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
