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
        <v-list-item class="px-2   " @click="toggleMini = !toggleMini">
          
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
              <v-list-item-icon >
               <v-btn :class="i.color"  icon> <v-icon  class="grey--text">{{ i.icon }}</v-icon></v-btn>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="grey-text">{{
                  i.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-list>
         <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            color="#4caf50" 
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
      </v-navigation-drawer>

      <v-main>
        <v-container style="height:100vh" class="px-4 py-2 fill-height body-txt" fluid>
          <v-layout row st>
          

            <v-col class="mx-auto" md="10" xs="12" sm="12">
              <AddTenderTemplate/>
            </v-col>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import AddTenderTemplate from "@/components/AddTenderTemplate";
export default {
    layout:'default',
  name: "new-tender",
  components: {
    AddTenderTemplate,
  },
  data() {
    return {
      items: [
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
          color:"green",
        },
       
        { title: "Contract", href: "/sme/contract", icon: "mdi-file-document-edit" },
        { title: "Reports", href: "/reports", icon: "mdi-chart-line" },
       
        { title: "Settings", href: "/settings", icon: "mdi-cog-outline" },
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

.v-text-field {
  width: 406px !important;
}
.v-text-field:hover {
  color: #b0d8f0 !important;
}
.hr {
  border-bottom: 1px solid #e3e8ee;
  width: 100%;
}
.grey-text{
    color: #1A1F36 !important;
}
</style>
</template>