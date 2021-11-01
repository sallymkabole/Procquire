<template>
  <v-layout column class="max-width">
      <v-layout column>
        <h1>Tenders</h1>
    <v-toolbar style="background:transparent" flat>
      
      <v-toolbar-title class="body--txt font-weight-bold left-text my-auto text-sm-xs"
        >Catalogue</v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-btn small class="white--text font-weight-bold" color="#45A622"
        ><v-icon>mdi-plus</v-icon> New</v-btn
      >
    </v-toolbar></v-layout>
    <v-layout row justify-center align-center wrap>
      <!--  Create Cards Based on Objects in an Array -->
      <v-flex xs12 md3 lg3 sm12 pa-2 v-for="card in cards" :key="card.title">
        <v-card
        flat
          :to="`${card.to}`"
          width="95%"
          class="d-flex flex-column view-card"
        >
          <div
            :style="{
              backgroundImage: `url(${card.poster})`,
            }"
            class="vid"
          ></div>

          <v-card-text class="my-auto">
            <div class="d-flex flex-column">
              <h4 class="mb-0 text-left black--text">
                {{ card.title }}
              </h4>

              <h5 class="text-left">{{ card.ref }}</h5>

              <h5 class="text-left font-weight-bold black--text">
                Required :{{ card.quantity }}
              </h5>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center align-center wrap>
      <!--  Create Cards Based on Objects in an Array -->
      <v-flex xs12 md3 lg3 sm12 pa-2 v-for="card in cards" :key="card.title">
        <v-card
        flat
          :to="`${card.to}`"
          width="95%"
          class="d-flex flex-column view-card"
        >
          <div
            :style="{
              backgroundImage: `url(${card.poster})`,
            }"
            class="vid"
          ></div>

          <v-card-text class="my-auto">
            <div class="d-flex flex-column">
              <h4 class="mb-0 text-left black--text">
                {{ card.title }}
              </h4>

              <h5 class="text-left">{{ card.ref }}</h5>

              <h5 class="text-left font-weight-bold black--text">
                Required :{{ card.quantity }}
              </h5>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Leg Alignment",
        to: "/organic-farming-description",
        ref: "Tender REF. NO. MMH/GEN/214/363",
        price: "Usd 12",
        quantity: "56",
        poster: require("../assets/images/leg-align.jpg"),
      },
      {
        title: "Stethoscope",
        to: "/organic-farming-description",
        ref: "Tender REF. NO. MMH/MED/71/43",
        price: "Usd 12",
        quantity: "56",
        poster: require("../assets/images/stetho.jpg"),
      },
      {
        title: "Inhaler",
        to: "/organic-farming-description",
        ref: "Tender REF. NO. MMH/GEN/261/11",
        price: "Usd 12",
        quantity: "56",
        poster: require("../assets/images/stethoscope.jpg"),
      },
      {
        title: "Stethoscope",
        to: "/organic-farming-description",
        ref: "Tender REF. NO. MMH/MED/71/43",
        price: "Usd 12",
        quantity: "56",
        poster: require("../assets/images/stetho.jpg"),
      },
    ],
  }),
};
</script>
<style scoped>
.vid {
  height: 8rem;
  width: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
}
.max-width {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
.view-card {
  height: 16rem;
  border: 3px solid#13a621;


}
</style>
