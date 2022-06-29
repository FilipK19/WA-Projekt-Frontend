<template>
  <div>
    <h1 v-for="w in wallet" v-bind:key="w">
      {{ (nakonkupnje = w.stanje), }}
    </h1>
    {{ error }}
    <v-container>
      <v-row>
        <v-col>
          <v-card width="800" height="200" color="#98FB98">
            <v-row v-if="item == item1">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/Sougayilang.jpg"
                ></v-img>
              </h4>
              <v-card-title>Sougayilang</v-card-title>
              <v-card-actions>
                <v-btn @click="selectFR(), pay(), buyItem()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item2">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/strikepro.png"
                ></v-img>
              </h4>
              <v-card-title>Strike Pro</v-card-title>
              <v-card-actions>
                <v-btn @click="selectB(), pay(), buyItem()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card width="800" height="200" color="#98FB98">
            <v-row v-if="item == item1">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/RAD.jpeg"
                ></v-img>
              </h4>
              <v-card-title>RAD</v-card-title>
              <v-card-actions>
                <v-btn @click="selectFR2(), pay(), buyItem()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item2">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/firetiger.jpg"
                ></v-img>
              </h4>
              <v-card-title>Firetiger</v-card-title>
              <v-card-actions>
                <v-btn @click="selectB2(), pay(), buyItem()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card width="800" height="200" color="#98FB98">
            <v-row v-if="item == item1">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/PLUSINNO.jpg"
                ></v-img>
              </h4>
              <v-card-title>PLUSINNO</v-card-title>
              <v-card-actions>
                <v-btn @click="selectFR3(), pay(), buyItem()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item2">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/astro.jpg"
                ></v-img>
              </h4>
              <v-card-title>Astro</v-card-title>
              <v-card-actions>
                <v-btn @click="selectB3(), pay(), buyItem()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card width="800" height="200" color="#98FB98">
            <v-row v-if="item == item1">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/Zebco.png"
                ></v-img>
              </h4>
              <v-card-title>Zebco</v-card-title>
              <v-card-actions>
                <v-btn @click="selectFR4(), pay(), buyItem()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item2">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/salamander.jpg"
                ></v-img>
              </h4>
              <v-card-title>Salamander</v-card-title>
              <v-card-actions>
                <v-btn @click="selectB4(), pay(), buyItem()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FishingPost",
  props: ["item"],
  async mounted() {
    let response = await fetch("http://localhost:3000/wallet");
    console.log(response);
    let data = await response.json();
    this.wallet = data;
  },
  data() {
    return {
      item1: "fishingRod",
      item2: "fishingBait",
      cijena: 0,
      wallet: [],
      nakonkupnje: 0,
      error: "",
    };
  },
  methods: {
    selectB() {
      this.cijena = 15;
    },
    selectB2() {
      this.cijena = 10;
    },
    selectB3() {
      this.cijena = 7;
    },
    selectB4() {
      this.cijena = 5;
    },

    selectFR() {
      this.cijena = 70;
    },
    selectFR2() {
      this.cijena = 50;
    },
    selectFR3() {
      this.cijena = 40;
    },
    selectFR4() {
      this.cijena = 20;
    },

    pay() {
      if (this.cijena < this.nakonkupnje) {
        this.nakonkupnje = this.nakonkupnje - this.cijena;
      } else {
        this.error = "Nemate dovoljno novca na računu";
      }
    },

    createPost() {
      axios
        .post("http://127.0.0.1:3000/trgovina/dodaj", {
          stvar: this.stvar,
          vrsta: this.vrsta,
          cijena: this.cijena,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log("function called");
    },
    buyItem() {
      axios
        .patch("http://127.0.0.1:3000/wallet/62bc144506edc3b8727dd025", {
          stanje: this.nakonkupnje,
          stvar: this.nakonkupnje,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log("function called");
    },
  },
};
</script>
