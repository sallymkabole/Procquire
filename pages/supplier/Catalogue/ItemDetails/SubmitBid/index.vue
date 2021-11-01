<template >
  <div class="body-txt">
    <v-app>
      <v-navigation-drawer
        v-model="sidebarMenu"
        app
        color="#F7FAFC"
        floating
        :permanent="sidebarMenu"
        :mini-variant.sync="mini"
        class="body-txt"
      >
        <v-list-item class="px-2" @click="toggleMini = !toggleMini">
          <v-list-item-title class="red-text font-weight-bold">
            Procquire
          </v-list-item-title>
        </v-list-item>

        <v-list>
          <v-list-item link to="/supplier">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="">Dashboard</v-list-item-title>
          </v-list-item>

          <v-list>
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

            <v-col class="mx-auto" md="10" xs="12" sm="12">
              <h1>Create Quote</h1>
              <v-layout class="ma-2">
                <v-flex xs4 md4 lg4 sm4>
                  <v-card elevation="6" width="90%" class="stat">
                    <v-card-text class="my-auto d-flex flex-column">
                      <div class="d-flex justify-space-between mb-8">
                        <h5 class="mb-0 text-left black--text">02/11/2021</h5>
                        <h6 class="my-auto text-right">
                          <v-btn outlined color="red" x-small
                            >Ending Soon</v-btn
                          >
                        </h6>
                      </div>

                      <div style="display: flex; flex-direction: column">
                        <h3 class="font-weight-bold green--text">
                          Digital Thermometer
                        </h3>
                        <h4 class="font-weight-regular">
                          Required Qty :
                          <span class="font-weight-bold green--text"
                            >6547
                          </span>
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
                          <span class="font-weight-bold green--text"
                            >6547
                          </span>
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
                        <h3 class="font-weight-bold green--text">Ogotex Set</h3>
                        <h4 class="font-weight-regular">
                          Required Qty :
                          <span class="font-weight-bold green--text"
                            >6547
                          </span>
                        </h4>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-layout style="height: 140px">
                <v-col md="12" xs="12" sm="12">
                  <h3 class="text-left mb-2">Quote</h3>
                  <v-card flat style="background: transparent" width="80%">
                    <v-textarea
                      label="In a few words, Let the client know why you are the best vendor for the job."
                      style="width: 100% !important; margin: 0 auto"
                      auto-grow
                      outlined
                      rows="3"
                      color="#45a622"
                      row-height="30"
                    ></v-textarea
                  ></v-card>
                </v-col>
              </v-layout>
              <v-layout>
                <v-col md="12" xs="12" sm="12">
                  <h3 class="text-left mt-2">Pricing</h3>
                  <v-row>
                    <v-col sm="6" md="3" class="mt-4"
                      ><v-text-field
                        type="number"
                        dense
                        outlined
                        color="#45a622"
                        placeholder="Unit Cost" /></v-col
                    ><v-col sm="6" md="3" class="mt-4">
                      <v-text-field
                        type="number"
                        dense
                        outlined
                        color="#45a622"
                        placeholder="Quantity" /></v-col
                    ><v-col sm="6" md="3" class="mt-4"
                      ><v-text-field
                        type="number"
                        dense
                        outlined
                        color="#45a622"
                        placeholder="Total Cost" /></v-col
                  ></v-row>
                </v-col>
              </v-layout>
               <v-layout style="width:100%" class=" ma-2">
                <v-flex xs4 md12 lg12 sm4>
                  <v-card flat outlined  width="70%"  class="stat1">
                    <v-card-text class="my-auto d-flex flex-column">
                     

                      <div style="display: flex; flex-direction: column">
                        <h4 class="black--text font-weight-bold ">
                           Before you submit your quote, please ensure that your profile is up to date. A strong profile gives you a higher chance of getting selected.
                        </h4>
                       
                        <v-checkbox
     
      label="Agree to bidding terms and conditions"
      required
      
    ></v-checkbox>
                      </div>
                      <div><v-btn class="white--text font-weight-bold" color="green">Submit</v-btn></div>
                    </v-card-text>
                  </v-card>
                </v-flex></v-layout>
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
  layout: "default",
  name: "sup-dashboard",
  components: {
    MyBids,
  },
  data() {
    return {
      plist: [
        {
          title: "Catalogue",
          href: "/supplier/catalogue",
          icon: "mdi-view-grid",
        },
        //{ title: "Biding Queue", href: "/supplier/bidding-queue", icon: "mdi-swap-vertical" },

        {
          title: "My Customers",
          href: "/supplier/supplier-list",
          icon: "mdi-check-decagram",
        },

        {
          title: "Contract",
          href: "/supplier/contract",
          icon: "mdi-file-document-edit",
        },
        { title: "Reports", href: "/reports", icon: "mdi-chart-line" },

        { title: "Settings", href: "/settings", icon: "mdi-cog-outline" },
      ],
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
    };
  },
};
</script>
<style scoped>
html {
  overflow-y: scroll;
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
.grey-text {
  color: #1a1f36 !important;
}
</style>