const Listing = require("../models/listing");

module.exports.index = async (req, res) => {  
  let listing = await Listing.find(); 
  res.render("listing.ejs", { listing }); 
}

module.exports.renderListingForm =  (req, res) => {
    res.render("new.ejs");
}

module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.img = {url, filename};
    await newListing.save();
    req.flash("success", "New  Listing is Created!");
    res.redirect("/listings");
   
}

module.exports.showListing = async (req, res) => {
     let { id } = req.params;
     let listing = await Listing.findById(id)
     .populate({ path : "reviews", populate : {path : "author"}}) // nested populate
     .populate("owner");
     if(!listing) {
        req.flash("error","Listing You Requested for Does Not Exist!");
        return res.redirect("/listings");
     }
    //  console.log(listing);
     res.render("show.ejs", { listing }); 
}

module.exports.editRenderForm = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
     if(!listing) {
        req.flash("error","Listing You Requested for Does Not Exist!");
        return res.redirect("/listings");
     }

     let originalImageUrl = listing.img.url.replace("/upload", "/upload/w_250");

    res.render("edit.ejs", { listing,originalImageUrl });
}

module.exports.editListing = async (req, res) => { 
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.img = {url, filename};
        await listing.save();
    }
    req.flash("success", " Listing Updated!");
    res.redirect(`/listings/${id}`);

}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    console.log(id);
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}