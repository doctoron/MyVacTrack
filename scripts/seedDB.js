const mongoose = require("mongoose");
const Users = require("../models/Users");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/members", { useNewUrlParser: true }
);

const userSeed = [
  {
    email: "ron.antonio@google.com",
    password: "vaccineswork",
    date: new Date(Date.now())
  },
  {
    email: "denise.antonio@google.com",
    password: "vaccineswork",
    date: new Date(Date.now())
  },
  {
    email: "ivonne.lawless@google.com",
    password: "vaccineswork",
    date: new Date(Date.now())
  },
  {
    email: "michael.pacuzzi@google.com",
    password: "vaccineswork",
    date: new Date(Date.now())
  },
  {
    email: "craig.zimbler@google.com",
    password: "vaccineswork",
    date: new Date(Date.now())
  }
];

// console.log(userSeed)

Users.collection.deleteMany()
  .then(() => {
    Users.collection.insertMany(userSeed)
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  })
const Members = require("../models/Members");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/members", { useNewUrlParser: true }
);

const memberSeed = [
  {
    email: "ron.antonio@google.com",
    password: "vaccineswork",
    username: "ronantonio",
    dob: "03/07/1950",
    gender: "Male",
    pregnancy: null,
    travelling: false,
    immunity: false,
    hiv: false,
    cd4above200: true,
    dormitory: false,
    healthCareWorker: true,
    conditions: false,
    otherFactors: false,
    zoster: true,
    date: new Date(Date.now())
  },
  {
    email: "ivonne.lawless@google.com",
    username: "ivonnelawless",
    password: "vaccineswork",
    dob: "05/10/2010",
    gender: "Female",
    pregnancy: false,
    travelling: false,
    immunity: false,
    hiv: false,
    cd4above200: true,
    dormitory: false,
    healthCareWorker: true,
    conditions: false,
    otherFactors: false,
    zoster: true,
    date: new Date(Date.now())
  },
  {
    email: "craig.zimbler@google.com",
    username: "craigzimbler",
    password: "vaccineswork",
    dob: "05/10/2010",
    gender: "Male",
    pregnancy: null,
    travelling: false,
    immunity: false,
    hiv: false,
    cd4above200: null,
    healthCareWorker: true,
    conditions: false,
    otherFactors: false,
    zoster: true,
    date: new Date(Date.now())
  },
  {
    email: "denise.antonio@google.com",
    username: "deniseantonio",
    password: "vaccineswork",
    dob: "8/10/1960",
    gender: "Female",
    pregnancy: null,
    travelling: false,
    immunity: false,
    hiv: null,
    cd4above200: null,
    dormitory: false,
    healthCareWorker: true,
    conditions: false,
    otherFactors: false,
    zoster: true,
    date: new Date(Date.now())
  },
  {
    email: "gatorpazz@gmail.com",
    username: "gpazz",
    password: "vaccineswork",
    dob: "5/10/1990",
    gender: "Male",
    pregnancy: null,
    travelling: false,
    immunity: false,
    hiv: false,
    cd4above200: false,
    dormitory: false,
    healthCareWorker: true,
    conditions: false,
    otherFactors: false,
    zoster: true,
    date: new Date(Date.now())
  }
];

console.log(memberSeed)

Members.collection.deleteMany()
  .then(() => {
    Members.collection.insertMany(memberSeed)
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  })
const Vaccines = require("../models/Vaccines");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/members", { useNewUrlParser: true }
);

const vaccineSeed = [
  {
    name: "Influenza inactivate (IIV) ",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    dose: "1 dose annually",
    date: new Date(Date.now())
  },
  {
    name: "Influenza recombinant (RIV) ",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "1 dose annually",
    date: new Date(Date.now())
  },
  {
    name: "Tetanus, diptheria, pertussis (TDAP) ",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "1 dose Tdap, the Td booster every 10yrs",
    date: new Date(Date.now())
  },
  {
    name: "Measles, mumps, rubella (MMR) ",
    needed: true,
    age: 65,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "1 or 2 doses depending on indication (if born in 1957 or later)",
    date: new Date(Date.now())
  },
  {
    name: "Varicella (VAR) ",
    needed: true,
    age: 40,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "2 doses (if born in 1980 or later",
    date: new Date(Date.now())
  },
  {
    name: "Zoster (RZV (preferred) ",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "",
    date: new Date(Date.now())

  },
  {
    name: "Zoster live (ZVL)",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "",
    date: new Date(Date.now())

  },
  {
    name: "Human papillomavirus (HPV) ",
    needed: true,
    age: 21,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "2-3 doses depending on age at initial vaccination",
    date: new Date(Date.now())
  },
  {
    name: "Human papillomavirus (HPV) ",
    needed: true,
    age: 30,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "2-3 doses depending on age at initial vaccination",
    date: new Date(Date.now())
  },
  {
    name: "Pneumococcal conjugte (PCV13) ",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "1 dose",
    date: new Date(Date.now())
  },
  {
    name: "Pneumococcal polysaccharide (PPSV23) ",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "1 dose",
    date: new Date(Date.now())
  },
  {
    name: "Hepatitis A (HepA) ",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "2 or 3 doses depending on vaccine",
    date: new Date(Date.now())
  },
  {
    name: "Hepatitis B (HepB) ",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "2 or 3 doses depending on vaccine",
    date: new Date(Date.now())
  },
  {
    name: "Meningococcal A, C, W, Y (MenACWY) ",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "1 or 2 doses depending on indication",
    date: new Date(Date.now())
  },
  {
    name: "Meningococcal B (MenB) ",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "2 or 3 doses depending on indication",
    date: new Date(Date.now())
  },
  {
    name: "Haemophilus influenzae type b (Hib) ",
    needed: true,
    age: 125,
    gender: null,
    pregnancy: true,
    travelling: true,
    immunity: true,
    hiv: true,
    cd4below200: true,
    dormitory: true,
    healthCareWorker: true,
    conditions: true,
    otherFactors: true,
    zoster: true,
    pregnancy: true,
    cd4below200: true,
    dose: "1 or 3 doses depending on indication",
    riskfactors: true,
    date: new Date(Date.now())
  }
];

console.log(vaccineSeed)

Vaccines.collection.deleteMany()
  .then(() => {
    Vaccines.collection.insertMany(vaccineSeed)
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  })
