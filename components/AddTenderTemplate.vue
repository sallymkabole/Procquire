<template>
  <v-layout column style="height: 100vh; ">
    <v-card height="100%" color=" " flat>
      <v-layout column style="padding: 20px">
        <v-col md="12" xs="12" sm="12">
          <v-row><h3>New Tender Item</h3></v-row></v-col
        >
        <v-form class="tender-form mt-4" v-model="valid">
          <v-row>
            <v-col md="6" xs="12" sm="12">
              <h3 class="text-left">Title</h3>
              <v-text-field
                v-model="tenderDetails.tender_title"
                dense
                outlined
                color="#45a622"
                placeholder="Title"
              ></v-text-field>
            </v-col>
            <v-col md="3" xs="12" sm="12">
              <h3 class="text-left">Ref No.</h3>

              <v-text-field
                v-model="tenderDetails.tender_ref_no"
                dense
                outlined
                color="#45a622"
                placeholder="Ref No."
              />
            </v-col>
            <v-col md="3" xs="12" sm="12">
              <h3 class="text-left">Category</h3>

              <v-text-field
                v-model="tenderDetails.tender_category"
                dense
                outlined
                color="#45a622"
                placeholder="Medical Equipment"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" xs="12" sm="12">
              <h3 class="text-left">Description</h3>
              <v-textarea
                v-model="tenderDetails.tender_description"
                label="Kindly describe the product"
                auto-grow
                outlined
                rows="3"
                color="#45a622"
                row-height="40"
              ></v-textarea>
            </v-col>
            <v-col md="6" lg="6" xs="12" sm="12">
              <v-row>
                <v-col sm="6" md="6" class="mt-6">
                 
                  <v-menu
            
            v-model="fromDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y 
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                label="Open Date"
                prepend-inner-icon="mdi-calendar"
               outlined
               dense
                :value="fromDateDisp"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              locale="en-in"
              v-model="tender_open_date"
              no-title
              @input="fromDateMenu = false"
              :min="minDate"
            ></v-date-picker>
          </v-menu>
                </v-col>

                <v-col sm="6" md="6" class="mt-6">
                          <v-menu
            
            v-model="toDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y 
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                label="Close Date"
                prepend-inner-icon="mdi-calendar"
               outlined
               dense
                :value="toDateDisp"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              locale="en-in"
              v-model="tender_close_date"
              no-title
              @input="toDateMenu = false"
              :min="minDate"
            ></v-date-picker>
          </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mx-auto" md="12" xs="12" sm="12">
                  <v-text-field
                    v-model="tenderDetails.tender_quantity"
                    type="number"
                    dense
                    outlined
                    color="#45a622"
                    placeholder="Quantity" /></v-col
              ></v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" xs="12" sm="12">
              <h3 class="text-left">Upload Item Photo</h3>
              <input id="imgInp" type="file" @change="chooseImage" />
            </v-col>
            <v-col md="6" xs="12" sm="12">
              <h3> Upload Tender Doc &nbsp<span style="font-size:10px"> *Pdf Format Only</span></h3>
              <input ref="doc" type="file" name="upload" @change="uploadDoc" accept="application/pdf,application/vnd.ms-excel" />
            </v-col>
          </v-row>
          <v-row class="mb-4" align="center" justify="center">
            <v-col md="12" xs="12" sm="12">
              <v-img
                ref="photo"
                src=""
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="200"
                max-height="100"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  />
                </template>
              </v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-card-actions class="">
              <v-btn
                class="btn1"
                outlined
                color="#45A622"
                @click="sendToDraft"
                :disabled="!valid"
              >
                Draft</v-btn
              >

              <v-btn
                class="btn1 white--text"
                color="#45A622"
                @click="publishTender"
                :disabled="!valid"
                
              >
                Publish</v-btn
              ></v-card-actions
            ></v-row
          >
        </v-form>
      </v-layout>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  name: "new-tender",
  components: {},
  data() {
    return {
      fromDateMenu: false,
      toDateMenu: false,
      tender_open_date: null,
      tender_close_date: null,
   
      openDate:false,
      closeDate:false,
      tenderDetails: {
        tender_title: "",
        tender_category: "",
        tender_ref_no: "",
       
        tender_description: "",
        tender_quantity: "",
        tender_photo: "",
        tender_doc:""
      },
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      tabs: null,
      sidebarMenu: true,
      toggleMini: false,
      singleSelect: false,
      selected: [],
      valid: false,
    };
  },
  methods: {
    chooseImage(e) {
      console.log(e.target.value, "the event");
      this.$refs.photo.src = URL.createObjectURL(event.target.files[0]);
      
    },
    
    uploadDoc(e) {
      console.log(e.target.value, "doc uploading");
      this.$refs.doc = URL.createObjectURL(event.target.files[0]);
      
    },
    publishTender() {
      const tenderDetails = {
        tender_title: this.tenderDetails.tender_title,
        tender_category:this.tenderDetails.tender_category,
        tender_ref_no:this.tenderDetails.tender_ref_no,
        tender_open_date:this.tender_open_date,
        tender_close_date:this.tender_close_date,
        tender_description:this.tenderDetails.tender_description,
        tender_quantity:this.tenderDetails.tender_quantity,
        tender_photo:this.$refs.photo.src,
        tender_doc:this.$refs.doc,
      };
      this.$store.commit("SET_TENDER_DETAILS", tenderDetails);
      this.$router.push("/sme/new-tender/new-tender-details")
    },
  },
   computed: {
    fromDateDisp() {
      return this.tender_open_date;
      // format/do something with date
    },
    toDateDisp() {
      return this.tender_close_date;
      // format/do something with date
    },
 
  }
};
</script>
<style scoped>
.tender-form {
  width: 95%;
  height: 600px;
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