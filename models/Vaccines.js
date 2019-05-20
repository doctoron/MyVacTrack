const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const VaccineSchema = new Schema({
    name: { type: String, required: true },
    needed: { type: Boolean, required: true},
    age: { type: Number, min: 19, max: 120 },
    gender: { type: String,required: false },
    pregnancy: { type: Boolean, required: false},
    travelling: { type: Boolean, required: false},
    immunity: { type: Boolean, required: true},
    hiv: { type: Boolean, required: true},
    cd4below200: { type: Boolean, required: true},
    dormitory: { type: Boolean, required: true},
    healthCareWorker: { type: Boolean, required: true},
    conditions: { type: Boolean, required: true},
    otherFactors: { type: Boolean, required: true},
    zoster: { type: Boolean, required: true},
    dose: { type: String, required: true }
});

const Vaccines = mongoose.model("Vaccines", VaccineSchema);

module.exports = Vaccines;