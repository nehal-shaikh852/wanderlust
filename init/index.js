const mongoose = require("mongoose");
let sampleListings = require("./data");
const Listing = require("../models/listing");





main().then( ()=> {
    console.log("connected to db");
}).catch (err => {
    console.log(err);
});


async function main(params) {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

async function initData () {
    await Listing.deleteMany({});
    sampleListings = sampleListings.map( (obj) => ({...obj, owner :"688baa17004fbbca5328ea8f"}));
    await Listing.insertMany(sampleListings);
};

initData();