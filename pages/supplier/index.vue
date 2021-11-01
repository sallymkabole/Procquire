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
          <v-list-item  link to="/supplier">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title  class="">Dashboard</v-list-item-title>
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
              v-for="item in items"
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
                label="Search..."
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
              <MyBids />
            </v-col>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import MyBids from "@/components/MyBids";
export default {
    layout:'default',
  name: "sup-dashboard",
  components: {
    MyBids,
  },
  data() {
    return {
     
      plist: [
        {title:"Catalogue", href:"/supplier/catalogue", icon:"mdi-view-grid"},
        //{ title: "Biding Queue", href: "/supplier/bidding-queue", icon: "mdi-swap-vertical" },
        
        {
          title: "My Customers",
          href: "/supplier/supplier-list",
          icon: "mdi-check-decagram",
        },
       
        { title: "Contract", href: "/supplier/contract", icon: "mdi-file-document-edit" },
        { title: "Analytcs", href: "/supplier/analytics", icon: "mdi-chart-line" },
       
        { title: "Settings", href: "/settings", icon: "mdi-cog-outline" },
      ], items: [
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