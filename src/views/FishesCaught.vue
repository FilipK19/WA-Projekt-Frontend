<template>
  <div>
    <h3 style="color: #228b22" v-for="f in fishData" v-bind:key="f">
      <h3 v-if="f.vrsta != undefined">
        {{ "Ime: " + f.vrsta + " | " }}
        {{ "Vrsta: " + f.voda + " | " }}
        {{ "Mjesto: " + f.lokacija }}
      </h3>
    </h3>
  </div>
</template>

<script>
export default {
  name: "FishDetails",
  props: ["fish"],
  async mounted() {
    let response = await fetch("http://localhost:3000/upecane/ribe");
    console.log(response);
    let data = await response.json();
    this.fishData = data;
  },
  data() {
    return {
      fishData: [],
    };
  },
};
</script>
