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
          <v-list-item-title class=" font-weight-bold">
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
      </v-navigation-drawer>

      <v-main>
        <v-layout column style="width: 75%; margin: 0 auto">
          <v-layout class="body-txt" style="height: 50px">
            <h2 class="ml-2">Invitation to Tender</h2></v-layout
          >
          <v-layout>
            <v-col md="12" xs="12" sm="12">
              <v-card
                outlined
                class="mx-auto mb-4 pa-4"
                width="100%"
                height="250px"
              >
                <v-layout row style="height: 100%">
                  <v-col md="6" xs="12" sm="12">
                    <v-layout class="d-flex flex-column" style="height: 100%">
                      <v-img height="100px" :src="getTender.tender_photo" />
                    </v-layout>
                  </v-col>
                  <v-col md="6" xs="12" sm="12">
                    <v-card
                      outlined
                      class="mx-auto mb-4 pa-4"
                      width="100%"
                      height="90%"
                    >
                      <v-layout
                        column
                        class="d-flex flex-column body-txt"
                        style="height: 100%"
                      >
                        <v-card-text>
                          <div style="display: flex; flex-direction: column">
                            <span class="font-weight-bold green--text">{{ getTender.tender_title }}</span>
                            <h4 class="font-weight-regular">
                               Category: {{ getTender.tender_category }}
                            </h4>
                            <h4 class="font-weight-regular">
                               Ref No. : <span class="font-weight-bold green--text">{{ getTender.tender_ref_no }}</span>
                            </h4>
                            <h4 class="font-weight-regular">
                               Open Date: <span class="font-weight-bold green--text">{{ getTender.tender_open_date }}</span>
                            </h4>
                            <h4 class="font-weight-regular">
                               Close Date: <span class="font-weight-bold green--text">{{ getTender.tender_close_date }}
                             </span></h4>
                            <h4 class="font-weight-regular">
                               Quantity:<span class="font-weight-bold green--text"> {{ getTender.tender_quantity }}</span>
                            </h4>
                          </div>
                        </v-card-text>
                      </v-layout></v-card
                    >
                  </v-col></v-layout
                >
              </v-card>
              <v-card
                outlined
                class="mx-auto mb-4 body-txt pa-4"
                width="100%"
                height="250px"
              >
                <v-layout column
                  ><h3>Description</h3>
                  <p>
                    {{ getTender.tender_description }}
                     {{ getTender.tender_doc }}
                  </p></v-layout
                ></v-card
              >
              <v-card
                outlined
                class="mx-auto body-txt pa-4"
                width="100%"
                height="100px"
              >
                <v-layout column><h3>Downloads</h3>
                <a  :href="getTender.tender_doc " download>
   Download Tender Document
</a></v-layout></v-card
              ></v-col
            ></v-layout
          ></v-layout
        >
      </v-main>
    </v-app>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import NewTenderDetailsTemplate from "@/components/NewTenderDetailsTemplate";
export default {
  layout: "default",
  name: "item-details",
  components: {
    NewTenderDetailsTemplate,
  },
  computed: {
    ...mapGetters(["getTender"]),
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
        { title: "Catalogue", href: "/supplier/catalogue", icon: "mdi-view-grid" },
        {
          title: "Biding Queue",
          href: "/supplier/bidding-queue",
          icon: "mdi-swap-vertical",
        },
        {
          title: "Suppliers",
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
    };
  },
};
</script>
<style scoped>
html {
  overflow-y: scroll;
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