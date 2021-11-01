<template >
  <div class="body-txt">
    <v-app >
      <v-navigation-drawer
        v-model="sidebarMenu"
        app
        color="#F7FAFC"
        floating
        :permanent="sidebarMenu"
        :mini-variant.sync="mini"
        class="body-txt"
      >
        <v-list-item class="px-2  " @click="toggleMini = !toggleMini">
          
          <v-list-item-title class="red-text font-weight-bold">
           Procquire
          </v-list-item-title>
          
        </v-list-item>

        <v-list>
         <v-list-item  link to="/sme">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="">Dashboard</v-list-item-title>
          </v-list-item>

         
          <v-list >
            <v-list-item v-for="i in plist" :key="i.title" link :to="i.href">
              <v-list-item-icon>
                <v-icon class="grey-text">{{ i.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="grey-text">{{
                  i.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
           <v-list>
            <v-list-group
              v-for="item in nav_items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
              color="#635cff"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="child in item.items" :key="child.title">
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container class="px-4 py-2 fill-height body-txt" fluid>
          <v-layout row>
            <v-app-bar app flat color="#fff">
              <v-text-field
                prepend-inner-icon="mdi-magnify"
                flat
                full-width
                hide-details
                label="Find Supplier..."
                solo
                class="hr"
              >
                <template slot="append">
                  <v-icon color="#A3ACB9">mdi-bell</v-icon>
                  <v-icon color="#A3ACB9">mdi-help-circle</v-icon>
                  <v-icon color="#A3ACB9">mdi-account</v-icon>
                </template>
              </v-text-field>
            </v-app-bar>

            <v-col md="12" xs="12" sm="12">
               <v-card class="d-flex flex-column" height="100%" width="100%" flat>
      <v-layout column>
                <v-card
    flat
    height="70px"
    tile
    class="mb-2"
  >
    <v-toolbar flat  dense>

      <v-toolbar-title class="font-weight-bold"> Supplier List</v-toolbar-title>

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
                          <div >
    <v-data-table
      :headers="headers"
      show-select
      :items="items"
     
    >
      <template v-slot:item.status="{ item }">
        <v-chip :to="`${item.to}`" small :color="getColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
      
    </v-data-table>
   
  </div>
                        </v-card>
      </v-layout>
              </v-card>
            </v-col>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "DataTable",
  methods: {
    getColor(status) {
      if (status === "rejected") return "red";
      else if (status === "verified") return "green";
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
        nav_items: [
        {
          action: "mdi-cash-multiple",
          items: [
            { title: "Reviews" },
            { title: "Disputes" },
            { title: "Top-ups" },
            { title: "Collected fees" },
            { title: "Transfers" },
            { title: "Payouts" },
            { title: "All transactions" },
          ],
          title: "Payments",
        },
      ],
      plist: [
         {title:"Catalogue", href:"/sme/catalogue", icon:"mdi-view-grid"},
        { title: "Biding Queue", href: "/sme/bidding-queue", icon: "mdi-swap-vertical" },
        {
          title: "Suppliers",
          href: "/sme/supplier-list",
          icon: "mdi-check-decagram",
        },
       
        { title: "Contract", href: "/sme/contract", icon: "mdi-file-document-edit" },
        { title: "Reports", href: "/reports", icon: "mdi-chart-line" },
       
        { title: "Settings", href: "/settings", icon: "mdi-cog-outline" },
      ],
      headers: [
        {
          text: "Company Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: " Certication Id.", value: "refNo" },
        { text: "AUDIT DATE", value: "date" },
        { text: "Address", value: "adress" },

        { text: "Contact Name", value: "Cname" },
        { text: "Contact Title", value: "Ctitle" },

        
        { text: "STATUS", value: "status" },
      ],
      items: [
        {
          refNo: "DCS/GEN/21/33",
          Cname:"Sally Musanga",
          Ctitle:"CEO",
          date: "21/02/2021",
          name: "Niya Nat.",
          adress: " Gichuru Rd",
       
          status: "verified",
         
        },
        {
         
          refNo: "MMH/GEN/21/33",
          Cname:"Jane Doe",
          Ctitle:"Supervisor",
          date: "11/11/2021",
          name: "Mokaya Suppliers",
          adress: " 12th Ave.Juja Rd",
         
          status: "pending",
        },
        {
          refNo: "CRW/GEN/21/33",
           Cname:"Wamaitha Njugush",
          Ctitle:"COO",
          date: "17/04/2021",
          name: "Fundi Ken",
          adress: "Woodvale Ave.",
          status: "rejected",
        },

        {
          refNo: "MMH/GEN/21/33",
           Cname:"Thuo Adewale",
          Ctitle:"Operations Mgr",
          date: "7/07/2021",
          name: "Karumaindo Est.",
          adress: " Ave. 4th Street",
          status: "verified",
        },
        {
          refNo: "STE/GEN/21/33",
         Cname:"Smith McLawren",
          Ctitle:"Country Supervisor",
          date: "01/02/2021",
          name: "Missy Inc..",
          adress: "Nairobi West Str.",
          
          status: "verified",
        },
        {
          refNo: "DSA/GEN/21/33",
          Cname:"Kerry Washington",
          Ctitle:"CEO",
          date: "11/08/2021",
          name: "Maxim Ent.",
          adress: "Total Karen",
         
          status: "pending",
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

.hr {
  border-bottom: 1px solid #e3e8ee;
  width: 100%;
}

</style>