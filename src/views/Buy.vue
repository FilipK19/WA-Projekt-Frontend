<template>
  <div>
    <v-container>
      <v-col>
        <v-card width="310" height="50" color="#98FB98" style="color: #228b22">
          <v-card-title>
            <h1 v-for="w in wallet" v-bind:key="w">
              Status: {{ (stanje = w.status), }} $
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
          @click="add(), buyItem(), refresh()"
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
              <v-card-title>70 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFR(), pay(), buyItem(), refresh(), purchased()"
                  ><h4 @click="refresh()">{{ kupnja }}</h4></v-btn
                >
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
              <v-card-title>15 $</v-card-title>
              <v-card-actions>
                <v-btn @click="selectB(), pay(), buyItem(), refresh()"
                  ><h4 @click="refresh()">Purchase</h4></v-btn
                >
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item3">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/outfit.png"
                ></v-img>
              </h4>
              <v-card-title>Outfit</v-card-title>
              <v-card-title>160 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFG(), pay(), buyItem(), refresh(), purchased()"
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
              <v-card-title>50 $</v-card-title>
              <v-card-actions>
                <v-btn @click="selectFR2(), pay(), buyItem(), refresh()"
                  ><h4 @click="refresh()">Purchase</h4></v-btn
                >
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
              <v-card-title>10 $</v-card-title>
              <v-card-actions>
                <v-btn @click="selectB2(), pay(), buyItem(), refresh()"
                  ><h4 @click="refresh()">Purchase</h4></v-btn
                >
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item3">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/backpack.png"
                ></v-img>
              </h4>
              <v-card-title>Backpack</v-card-title>
              <v-card-title>70 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFG2(), pay(), buyItem(), refresh(), purchased()"
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
              <v-card-title>40 $</v-card-title>
              <v-card-actions>
                <v-btn @click="selectFR3(), pay(), buyItem(), refresh()"
                  ><h4 @click="refresh()">Purchase</h4></v-btn
                >
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
              <v-card-title>7 $</v-card-title>
              <v-card-actions>
                <v-btn @click="selectB3(), pay(), buyItem(), refresh()"
                  ><h4 @click="refresh()">Purchase</h4></v-btn
                >
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item3">
              <h4>
                <v-img
                  height="200px"
                  width="300px"
                  src="../shop/net.png"
                ></v-img>
              </h4>
              <v-card-title>Fishing Net</v-card-title>
              <v-card-title>11 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFG3(), pay(), buyItem(), refresh(), purchased()"
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
              <v-card-title>20 $</v-card-title>
              <v-card-actions>
                <v-btn @click="selectFR4(), pay(), buyItem(), refresh()"
                  ><h4 @click="refresh()">Purchase</h4></v-btn
                >
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
              <v-card-title>5 $</v-card-title>
              <v-card-actions>
                <v-btn @click="selectB4(), pay(), buyItem(), refresh()"
                  ><h4 @click="refresh()">Purchase</h4></v-btn
                >
              </v-card-actions>
            </v-row>
            <v-row v-if="item == item3">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/chair.png"
                ></v-img>
              </h4>
              <v-card-title>Fishing chair</v-card-title>
              <v-card-title>100 $</v-card-title>
              <v-card-actions>
                <v-btn
                  @click="selectFG4(), pay(), buyItem(), refresh(), purchased()"
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
  name: "Buy",
  props: ["item"],

  data() {
    return {
      item1: "fishingRod",
      item2: "fishingBait",
      item3: "fishingGear",
      cijena: 0,
      novac: 0,
      wallet: [],
      stanje: 0,
      error: "",
      kupnja: "Purchase",
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

    selectFG() {
      this.cijena = 160;
    },
    selectFG2() {
      this.cijena = 70;
    },
    selectFG3() {
      this.cijena = 11;
    },
    selectFG4() {
      this.cijena = 100;
    },

    purchased() {
      if (this.cijena <= this.stanje) {
        this.kupnja = "Purchased";
      }
    },

    pay() {
      if (this.cijena <= this.stanje) {
        this.stanje = this.stanje - this.cijena;
        this.error = "";
      } else {
        this.error = "You dont have enough money";
      }
    },

    add() {
      if (this.novac > 0) {
        this.stanje = this.stanje - -this.novac;
        this.error = "";
      } else {
        this.error = "Enter a correct number";
      }
    },

    async refresh() {
      let response = await fetch(
        "https://wa-projekt-backend.herokuapp.com/wallet"
      );
      console.log(response);
      let data = await response.json();
      this.wallet = data;
    },

    buyItem() {
      axios
        .patch(
          "https://wa-projekt-backend.herokuapp.com/wallet/62be56a225ac396519939ddd",
          {
            status: this.stanje,
          }
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log("function called");
    },
  },

  async beforeMount() {
    let response = await fetch(
      "https://wa-projekt-backend.herokuapp.com/wallet"
    );
    console.log(response);
    let data = await response.json();
    this.wallet = data;
  },
};
</script>
