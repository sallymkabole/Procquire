export default {
  SET_TENDER_DETAILS(state, data) {
    console.log(data, "data");
    const { tender_title, tender_category, tender_ref_no, tender_open_date, tender_close_date, tender_description, tender_quantity, tender_photo, tender_doc } = data;
    state.tenders.tender_title = tender_title;
    state.tenders.tender_category = tender_category;
    state.tenders.tender_ref_no = tender_ref_no;
    state.tenders.tender_open_date = tender_open_date;
    state.tenders.tender_close_date = tender_close_date;
    state.tenders.tender_description = tender_description;
    state.tenders.tender_quantity = tender_quantity;
    state.tenders.tender_photo = tender_photo;
    state.tenders.tender_doc = tender_doc;
  },

};
