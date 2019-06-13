const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// change all lines below to match our database
const IndicationSchema = new Schema({
    condition: { type: String, required: true},
    vaccineName: { type: String, required: true },
  
});

const Indications = mongoose.model("Indications", IndicationSchema);

module.exports = Indications;