import mongoose from "mongoose";

const ProductModel = mongoose.Schema({
    name : {
        type : String,
        required  : true
    },
    category_path : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    sold: {
        type: Number,
        required: true
    },
    has_video: {
        type: Boolean,
        default: false
    },
    sale_percent : {
        type : Number,
        default : 0
    },
    default_price_min : {
        type : Number,
        require : true
    },
    default_price_max : {
        type : Number,
        required : true
    },
    sale_price_min : {
        type : Number
    },
    sale_price_max : {
        type : Number
    },
    seller_admin_id : {
        type : Number
    },
    sku_user : String,
    product_type : Number,
    status_new : {
        type : Number,
        default : 1
    },
    stock_status : {
        type : Number,
        default : 1
    },
    search_feed_type : {
        type : String,
        default : "A"
    },
    shop : {},
    rated : {},
    options : {},
    package_discount : [],
    active_event_frame : String
})


export const ProductSendo = mongoose.model("productsendo",ProductModel) 