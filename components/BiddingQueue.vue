<template>
  <v-card class="d-flex flex-column" height="100%" width="100%" flat>
      <v-layout column>
                <v-card
    flat
    height="70px"
    tile
    class="mb-2"
  >
    <v-toolbar flat  dense>

      <v-toolbar-title class="font-weight-bold">Bidding Queue</v-toolbar-title>

      <v-spacer></v-spacer>

     <v-btn class="top-btn mt-4" color="#fff"
                    ><v-icon>mdi-filter</v-icon>Filter</v-btn
                  >
                  <v-btn class="top-btn ml-2 mt-4" color="#fff"
                    ><v-icon>mdi-arrow-top-right</v-icon>Export</v-btn
                  >
                  <v-btn to="/sme/new-tender" class="top-btn1 font-weight-bold ml-2 mt-4" color="#45A622"
                    ><v-icon>mdi-plus</v-icon>Create New</v-btn
                  >
    </v-toolbar>
   
  </v-card> <hr class="mb-2">
                  <v-card width="100%" flat>
                         <SupBidList/>
                        </v-card>
      </v-layout>
              </v-card>
</template>
<script>
import SupBidList from "@/components/SupBidList";
export default {
  name: "bidding-queue",
  components:{
    SupBidList,
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
          text: "AMOUNT",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "DESCRIPTION", value: "description" },
        { text: "CUSTOMER", value: "customer" },
        { text: "DATE", value: "date" },
      ],
      users: [
        {
          name: "US$352.22 ",
          icon: "mdi-account",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },

        {
          name: "US$39.99",
          description: "0d7b6ac7-dbda-4157-bae9-e64749e538f5",
          customer: "johndoe@gmail.com",
          date: "7 Jul, 14:01",
        },
        {
          name: "US$39.99",
          description: "eca84b25-0324-4f31-b9fb-d489048b77ae",
          customer: "jfamosinhoaraca@iseo...",
          date: "7 Jul, 13:28",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },

        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$352.22",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },

        {
          name: "US$39.99",
          description: "0d7b6ac7-dbda-4157-bae9-e64749e538f5",
          customer: "johndoe@gmail.com",
          date: "7 Jul, 14:01",
        },
        {
          name: "US$39.99",
          description: "eca84b25-0324-4f31-b9fb-d489048b77ae",
          customer: "jfamosinhoaraca@iseo...",
          date: "7 Jul, 13:28",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },

        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$339.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
      ],

    }
  }
};
</script>
<style scoped>
html {
  overflow-y: scroll;
}
h1 {
  position: static;
  width: 361px;
  height: 46px;
  left: 68px;
  top: 48px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  /* Grey 800 */

  color: #3c4257;
}
h2 {
  position: static;
  height: 17px;
  left: 0px;
  top: 0px;

  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Grey 800 */

  color: #3c4257;

  /* Inside Auto Layout */
}
.purple-text{
  color: #635cff;

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
  color: #3c4257 !important;
  text-transform: capitalize;
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
.signup {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 68px 72px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 542px;
  height: 537px;
  left: calc(50% - 542px / 2);
  top: calc(50% - 537px / 2 - 45px);

  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12),
    0px 15px 35px rgba(60, 66, 87, 0.08);
  border-radius: 4px;
}
</style>