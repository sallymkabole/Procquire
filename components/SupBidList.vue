<template>
  <div >
    <v-data-table
      :headers="headers"
      show-select
      :items="items"
     
    >
      <template v-slot:item.status="{ item }">
        <v-chip :to="`${item.to}`" x-small :color="getColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
      
    </v-data-table>
   
  </div>
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
          text: "SUPPLIER",
          align: "start",
          sortable: false,
          value: "supplier",
        },
        { text: "VERIFICATION STATUS", value: "status" },
      
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
          supplier: "Niya Nat.",
          department: "Pharmacy",
          amount: "500,000",
          status: "approved",
          to: "/sme/bidding-queue/supp-details",
        },
        {
          name: "contec-professional ",
          refNo: "MMH/GEN/21/33",
          quantity: "516",
          date: "11/11/2021",
          supplier: "Mokaya Suppliers",
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
          supplier: "Fundi Ken",
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
          supplier: "Karumaindo Est.",
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
          supplier: "Mwea Tatu",
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
          supplier: "Safari Moja",
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