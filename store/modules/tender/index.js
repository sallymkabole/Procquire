/***
 *
 * Tender Module
 *
 *
 */

 import getters from "./getter";
 import mutations from "./mutation";
 import actions from "./action";
 
 export default {
   state: {
     tenders: {
       tender_title: "",
       tender_category: "",
       tender_ref_no: "",
       tender_open_date: "",
       tender_close_date: "",
       tender_description: "",
       tender_quantity: "",
       
       tender_photo: ""
     }
   },
   getters,
   actions,
   mutations
 };