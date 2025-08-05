const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;


const defaultImgUrl = "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"

const listingSchema = new Schema ({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    }, 
    img : {
        // type : String,
        // default: defaultImgUrl,
        // set : (v) => v === "" ? defaultImgUrl : v
        url : String,
        filename : String,
    },
    price : { 
        type : Number,
        required : true
    },
    location : {
        type : String
    },
    country : {
        type : String
    },
    reviews : [{
        type : Schema.Types.ObjectId,
        ref : "Review"
    }],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User",
    },
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;