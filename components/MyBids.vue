<template>
  <v-card width="90%" class="mx-auto" flat>
    <v-layout column style="width: 100%; margin: 0 auto">
      <v-card-title class="font-weight-bold">Open Bids</v-card-title>
      <v-layout class="ma-2">
        <v-flex xs4 md4 lg4 sm4>
          <v-card to="/supplier/catalogue/itemdetails/submitbid" elevation="6" width="90%" class="stat">
            <v-card-text class="my-auto d-flex flex-column">
              <div class="d-flex justify-space-between mb-8">
                <h5 class="mb-0 text-left black--text">02/11/2021</h5>
                <h6 class="my-auto text-right">
                  <v-btn outlined color="red" x-small>Ending Soon</v-btn>
                </h6>
              </div>

              <div style="display: flex; flex-direction: column">
                <h3 class="font-weight-bold green--text">
                  Digital Thermometer
                </h3>
                <h4 class="font-weight-regular">
                  Required Qty :
                  <span class="font-weight-bold green--text">6547 </span>
                </h4>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
           <v-flex xs4 md4 lg4 sm4>
          <v-card elevation="6" width="90%" class="stat">
            <v-card-text class="my-auto d-flex flex-column">
              <div class="d-flex justify-space-between mb-8">
                <h5 class="mb-0 text-left black--text">12/12/2021</h5>
                
              </div>

              <div style="display: flex; flex-direction: column">
                <h3 class="font-weight-bold green--text">
                  Respirometer
                </h3>
                <h4 class="font-weight-regular">
                  Required Qty :
                  <span class="font-weight-bold green--text">6547 </span>
                </h4>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      
          <v-flex xs4 md4 lg4 sm4>
          <v-card elevation="6" width="90%" class="stat">
            <v-card-text class="my-auto d-flex flex-column">
              <div class="d-flex justify-space-between mb-8">
                <h5 class="mb-0 text-left black--text">31/11/2021</h5>
               
              </div>

              <div style="display: flex; flex-direction: column">
                <h3 class="font-weight-bold green--text">
                  Ogotex   Set
                </h3>
                <h4 class="font-weight-regular">
                  Required Qty :
                  <span class="font-weight-bold green--text">6547 </span>
                </h4>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-card-title class="font-weight-bold">My Bids</v-card-title>

      <v-data-table :headers="headers" show-select :items="items">
        <template v-slot:item.status="{ item }">
          <v-chip
            :to="`${item.to}`"
            x-small
            :color="getColor(item.status)"
            dark
          >
            {{ item.status }}
          </v-chip>
        </template>
      </v-data-table>
    </v-layout></v-card
  >
</template>
<script>
export default {
  name: "DataTable",
  methods: {
    getColor(status) {
      if (status === "rejected") return "red";
      else if (status === "approved") return "green";
      else if (status === "pending") return "orange";
      else return "yellow";
    },
  },

  data() {
    return {
      tabs: null,
      sidebarMenu: true,
      toggleMini: false,
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "CUSTOMER",
          align: "start",
          sortable: false,
          value: "customer",
        },
        { text: "BID STATUS", value: "status" },

        { text: "SUB DATE", value: "date" },

        { text: "QTY(Dozens)", value: "quantity" },

        { text: "AMOUNT", value: "amount" },
        { text: "Contact ", value: "contact" },
      ],
      items: [
        {
          contact: "0719235763",
          refNo: "DCS/GEN/21/33",
          quantity: "7756",
          date: "21/02/2021",
          customer: "KNH",
          department: "Pharmacy",
          amount: "500,000",
          status: "approved",
          to: "/supplier/bidding-queue/supp-details",
        },
        {
          name: "contec-professional ",
          refNo: "MMH/GEN/21/33",
          quantity: "516",
          date: "11/11/2021",
          customer: "Kijabe Hospital",
          department: "Radiology",
          amount: "6,000,000",
          status: "pending",
          contact: "0119265263",
        },
        {
          name: "Nursing Uniform Suppy",
          refNo: "CRW/GEN/21/33",
          quantity: "556",
          date: "17/04/2021",
          customer: "Coast General",
          department: "Labaratory",
          amount: "700,000",
          status: "rejected",
          contact: "0722244761",
        },

        {
          name: "INVITATION TO TENDER  Giving Set",
          refNo: "MMH/GEN/21/33",
          quantity: "564",
          date: "7/07/2021",
          customer: "Mater Hospital",
          department: "Pharmacy",
          amount: "4,000,000",
          status: "approved",
          contact: "0785935763",
        },
        {
          name: "Supply of Digital Thermometer ",
          refNo: "STE/GEN/21/33",
          quantity: "1",
          date: "01/02/2021",
          customer: "Mwea Tatu",
          department: "Pharmacy",
          amount: "300,000",
          status: "approved",
          contact: "0719239733",
        },
        {
          name: "Stethoscope Spengler Stethoscope ",
          refNo: "DSA/GEN/21/33",
          quantity: "88",
          date: "11/08/2021",
          customer: "Safari Moja",
          department: "Pharmacy",
          amount: "1,000,000",
          status: "pending",
          contact: "0722883388",
        },
      ],
    };
  },
};
</script>
<style scoped>
.stat {
  height: 150px;
  border-radius: 8px;
  padding: 8px;
}
.left-text {
  display: inline-block;
}
.right-text {
  float: right;
}

a {
  text-decoration: none;
  color: #697386;
  transition: 0.5s ease;
}
a:hover {
  color: #dfd3d3;
}
.pur {
  color: #635cff;
}
.top-btn {
  color: #fff !important;
  text-transform: capitalize;
  font-weight: bold;
}
.top-btn1 {
  color: #fff !important;
  text-transform: capitalize;
}
.btn {
  color: #fff !important ;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13.5px 10px;

  /* Purple */

  background: #635cff;
  border-radius: 5px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 28px 0px;
  text-transform: capitalize;
}
</style>