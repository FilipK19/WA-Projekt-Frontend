<template>
  <div>
    {{ item }}
    <v-container>
      <v-row>
        <v-col>
          <v-card width="800" height="200" color="#98FB98">
            <v-row v-if="item == stvar">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/Sougayilang.jpg"
                ></v-img>
              </h4>
              <v-card-title>Sougayilang</v-card-title>
              <v-card-actions>
                <v-btn @click="select(), createPost()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
            <v-row v-if="item == vrsta">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/strikepro.png"
                ></v-img>
              </h4>
              <v-card-title>Strike Pro</v-card-title>
              <v-card-actions>
                <v-btn @click="select(), buyItem()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card width="800" height="200" color="#98FB98">
            <v-row v-if="item == stvar">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/RAD.jpeg"
                ></v-img>
              </h4>
              <v-card-title>RAD</v-card-title>
              <v-card-actions>
                <v-btn @click="selec2t(), createPost()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
            <v-row v-if="item == vrsta">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/firetiger.jpg"
                ></v-img>
              </h4>
              <v-card-title>Firetiger</v-card-title>
              <v-card-actions>
                <v-btn @click="select(), createPost()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card width="800" height="200" color="#98FB98">
            <v-row v-if="item == stvar">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/PLUSINNO.jpg"
                ></v-img>
              </h4>
              <v-card-title>PLUSINNO</v-card-title>
              <v-card-actions>
                <v-btn @click="select3(), createPost()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
            <v-row v-if="item == vrsta">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/astro.jpg"
                ></v-img>
              </h4>
              <v-card-title>Astro</v-card-title>
              <v-card-actions>
                <v-btn @click="select(), createPost()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card width="800" height="200" color="#98FB98">
            <v-row v-if="item == stvar">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/Zebco.png"
                ></v-img>
              </h4>
              <v-card-title>Zebco</v-card-title>
              <v-card-actions>
                <v-btn @click="select3(), createPost()">Purchase</v-btn>
              </v-card-actions>
            </v-row>
            <v-row v-if="item == vrsta">
              <h4>
                <v-img
                  height="200px"
                  width="335px"
                  src="../shop/salamander.jpg"
                ></v-img>
              </h4>
              <v-card-title>Salamander</v-card-title>
              <v-card-actions>
                <v-btn @click="select(), createPost()">Purchase</v-btn>
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
  data() {
    return {
      stvar: "fishingRod",
      vrsta: "fishingBait",
      cijena: 62,
      status: "",
    };
  },
  methods: {
    select() {
      this.stvar = "Sougayilang";
      this.vrsta = "pecaljka";
      this.cijena = 70;
      this.status = "Kupljeno";
      console.log(this.stvar);
    },
    select2() {
      this.stvar = "RAD";
      this.vrsta = "pecaljka";
      this.cijena = 30;
      this.status = "Kupljeno";
      console.log(this.stvar);
    },
    select3() {
      this.stvar = "PLUSINNO";
      this.vrsta = "pecaljka";
      this.cijena = 40;
      this.status = "Kupljeno";
      console.log(this.stvar);
    },
    select4() {
      this.stvar = "Zebco";
      this.vrsta = "pecaljka";
      this.cijena = 10;
      this.status = "Kupljeno";
      console.log(this.stvar);
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
          stanje: this.cijena,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log("function called");
    },
  },
};
</script>
