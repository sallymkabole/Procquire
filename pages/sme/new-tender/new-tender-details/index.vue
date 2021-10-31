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
          <v-list-item  link to="/sme">
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
          <v-layout style="height: 50px">
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
                <v-layout row>
                  <v-col md="6" xs="12" sm="12">
                    <v-layout
                      class="red"
                      style="height:100%;background-color: background-size:cover;background-image: url('https://cdn.vuetifyjs.com/images/cards/docks.jpg');"
                    >
                    </v-layout>
                  </v-col>
                  <v-col md="6" xs="12" sm="12">
                    <v-layout column style="height: 100%">
                      <h2>Tender Name</h2>

                      <h4>Tender Category</h4>
                      <h4>Tender Ref</h4>
                      <h4>Tender Open Date</h4>
                      <h4>Tender Close Date</h4>
                      <h4>Tender Quantity</h4></v-layout
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
                    2.1 This Invitation for Tenders is open to all tenderers
                    eligible as described in the services for the stipulated
                    duration from the date of commencement(hereinafter referred
                    to as the term) specified in the tender includin all
                    attachments and appendices thereto and all Read More...
                  </p></v-layout
                ></v-card
              >
              <v-card
                outlined
                class="mx-auto body-txt pa-4"
                width="100%"
                height="100px"
              >
                <v-layout column
                  ><h3>Downloads</h3></v-layout></v-card></v-col
            ></v-layout
          ></v-layout
        >
      </v-main>
    </v-app>
  </div>
</template>
<script>
import NewTenderDetailsTemplate from "@/components/NewTenderDetailsTemplate";
export default {
  layout: "default",
  name: "new-tender",
  components: {
    NewTenderDetailsTemplate,
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
        {
          title: "Biding Queue",
          href: "/biding-queue",
          icon: "mdi-swap-vertical",
        },
        {
          title: "Suppliers",
          href: "/sme/supplier-list",
          icon: "mdi-check-decagram",
        },

        {
          title: "Contract",
          href: "/sme/contract",
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
