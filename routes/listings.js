const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner,validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage })



router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,
      upload.single("listing[img]" ),
      validateListing,
      wrapAsync(listingController.createListing)); 



router.get("/new",isLoggedIn, listingController.renderListingForm);


router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,validateListing,upload.single("listing[img]" ),wrapAsync(listingController.editListing))
.delete( isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));


router.get("/:id/edit",
    isOwner,
    wrapAsync(listingController.editRenderForm));





module.exports = router;

