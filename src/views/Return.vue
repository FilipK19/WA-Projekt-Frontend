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
export default {
  name: "Rent",

  data() {
    return {
      toRent: [
        {
          type: "gear",
          name: "Fishing Chair",
        },
        {
          type: "gear",
          name: "Fishing Chair",
        },
      ],
      item: "",
      name: "",
      status: "",
    };
  },
};
</script>
