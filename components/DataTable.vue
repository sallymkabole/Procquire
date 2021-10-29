<template>
  <div>
    <v-data-table
      :headers="headers"
      show-select
      :single-select="singleSelect"
       item-key="name"
      :items="items"
      :items-per-page="10"
      class="elevation-1"
      hide-default-footer
    >
     <template v-slot:top>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>
    </template>
     
    </v-data-table>
    <div class="d-flex d-inline pa-4">
      <v-btn color="" text> 06 Results </v-btn>
      <v-spacer />
      <div class="table-footer-prepend d-flex">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn color="white" disabled class="mr-3 top-btn" v-on="on">
              Previous
            </v-btn>
          </template>
          <span>Back</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn color="#45A622" class="mr-3 top-btn" v-on="on"> Next</v-btn>
          </template>
          <span>Next</span>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DataTable",
  data() {
    return {
      tabs: null,
      sidebarMenu: true,
      toggleMini: false,
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "NAME",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "", value: "action", sortable: false },
        { text: "TENDER REF NO.", value: "refNo" },
        { text: "QUANTITY(Dozens)", value: "quantity" },
        { text: "OPEN DATE", value: "date" },
        { text: "CLOSE DATE", value: "date" },
      ],
      items: [
      
        {
          name: "Supply of Digital Thermometer",
          refNo:"DCS/GEN/21/33",
          quantity: "7756",
          date: "7 Jul, 14:04",
        },
        {
          name: "contec-professional-portable-ecg-1200g ",
          refNo:"MMH/GEN/21/33",
          quantity: "516",
          date: "7 Jul, 14:04",
        },
        {
          name: "Nursing Uniform Suppy",
          refNo:"CRW/GEN/21/33",
          quantity: "556",
          date: "7 Jul, 14:04",
        },

        {
          name: "INVITATION TO TENDER Ogotex Infusion Giving Set",
         refNo:"MMH/GEN/21/33",
          quantity: "564",
          date: "7 Jul, 14:01",
        },
        {
          name: "Supply of Digital Thermometer ",
          refNo:"STE/GEN/21/33",
          quantity: "1",
          date: "7 Jul, 13:28",
        },
        {
          name: "Stethoscope Spengler Dual Chestpiece Stethoscope ",
         refNo:"DSA/GEN/21/33",
          quantity: "88",
          date: "7 Jul, 14:04",
        },

       
      ],
    };
  },
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
.purple-text {
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