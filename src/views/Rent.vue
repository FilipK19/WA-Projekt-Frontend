<template>
  <div>
    <v-container>
      <v-col>
        <v-card width="300" height="50" color="#98FB98" style="color: #228b22">
          <v-card-title>
            <h1 v-for="w in wallet" v-bind:key="w">
              Stanje: {{ (stanje = w.stanje), }}
            </h1>
            {{ error }}
          </v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card width="400" height="25" color="#98FB98">
          <label style="color: #228b22" for="novac"
            >Amount you want to add:
          </label>
          <input type="text" id="novac" v-model="novac" color="#98FB98" />
        </v-card>
      </v-col>
      <v-col>
        <v-card
          @click="add(), rentItem(), refresh()"
          width="150"
          height="25"
          color="#98FB98"
          ><h4 @click="refresh()">Add money</h4></v-card
        >
      </v-col>
    </v-container>
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
              <v-card-title>15 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFR(), pay(), rentItem(), refresh(), rented()"
                  ><h4 @click="refresh()">{{ kupnja }}</h4></v-btn
                >
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item2">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/outfit.png"
                ></v-img>
              </h4>
              <v-card-title>Outfit</v-card-title>
              <v-card-title>25 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFG(), pay(), rentItem(), refresh(), rented()"
                  ><h4 @click="refresh()">{{ kupnja }}</h4></v-btn
                >
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
              <v-card-title>10 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFR2(), pay(), rentItem(), refresh(), rented()"
                  ><h4 @click="refresh()">{{ kupnja }}</h4></v-btn
                >
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item2">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/backpack.png"
                ></v-img>
              </h4>
              <v-card-title>Backpack</v-card-title>
              <v-card-title>15 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFG2(), pay(), rentItem(), refresh(), rented()"
                  ><h4 @click="refresh()">{{ kupnja }}</h4></v-btn
                >
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
              <v-card-title>10 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFR3(), pay(), rentItem(), refresh(), rented()"
                  ><h4 @click="refresh()">{{ kupnja }}</h4></v-btn
                >
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item2">
              <h4>
                <v-img
                  height="200px"
                  width="300px"
                  src="../shop/net.png"
                ></v-img>
              </h4>
              <v-card-title>Fishing Net</v-card-title>
              <v-card-title>2 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFG3(), pay(), rentItem(), refresh(), rented()"
                  ><h4 @click="refresh()">{{ kupnja }}</h4></v-btn
                >
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
              <v-card-title>5 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFR4(), pay(), rentItem(), refresh(), rented()"
                  ><h4 @click="refresh()">{{ kupnja }}</h4></v-btn
                >
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item2">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/chair.png"
                ></v-img>
              </h4>
              <v-card-title>Fishing chair</v-card-title>
              <v-card-title>15 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFG4(), pay(), rentItem(), refresh(), rented()"
                  ><h4 @click="refresh()">{{ kupnja }}</h4></v-btn
                >
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
  name: "Rent",
  props: ["item"],

  data() {
    return {
      item1: "fishingRod",
      item2: "fishingGear",
      cijena: 0,
      novac: 0,
      wallet: [],
      stanje: 0,
      error: "",
      kupnja: "Rent",
    };
  },
  methods: {
    selectFR() {
      this.cijena = 15;
    },
    selectFR2() {
      this.cijena = 10;
    },
    selectFR3() {
      this.cijena = 10;
    },
    selectFR4() {
      this.cijena = 5;
    },

    selectFG() {
      this.cijena = 25;
    },
    selectFG2() {
      this.cijena = 15;
    },
    selectFG3() {
      this.cijena = 2;
    },
    selectFG4() {
      this.cijena = 10;
    },

    rented() {
      if (this.cijena <= this.stanje) {
        this.kupnja = "Rented";
      }
    },

    pay() {
      if (this.cijena <= this.stanje) {
        this.stanje = this.stanje - this.cijena;
        this.error = "";
      } else {
        this.error = "Nemate dovoljno novca na računu";
      }
    },

    add() {
      if (this.novac > -1000) {
        this.stanje = this.stanje - -this.novac;
        this.error = "";
      } else {
        this.error = "Upišite pravilan broj";
      }
    },

    async refresh() {
      let response = await fetch("http://localhost:3000/wallet");
      console.log(response);
      let data = await response.json();
      this.wallet = data;
    },

    rentItem() {
      axios
        .patch("http://127.0.0.1:3000/wallet/62bc144506edc3b8727dd025", {
          stanje: this.stanje,
          stvar: this.stanje,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log("function called");
    },
  },

  async beforeMount() {
    let response = await fetch("http://localhost:3000/wallet");
    console.log(response);
    let data = await response.json();
    this.wallet = data;
  },
};
</script>
