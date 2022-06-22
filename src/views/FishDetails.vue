<template>
  <div class="fish">
    <h1>Detalji Commita</h1>

    <h2 v-for="f in fishData" v-bind:key="f">
      <h3 v-if="fish == f.vrsta">{{ f }}</h3>
    </h2>
  </div>
</template>

<script>
export default {
  name: "FishDetails",
  props: ["fish"],
  async mounted() {
    let response = await fetch("http://localhost:3000/fish");
    console.log(response);
    let data = await response.json();
    this.fishData = data;
  },
  data() {
    return {
      fishData: [],
      fishyo: "",
    };
  },
};
</script>
