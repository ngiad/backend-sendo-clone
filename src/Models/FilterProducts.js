import mongoose from "mongoose";


const Schema = mongoose.Schema({
    attribute_term : String,
    attribute_name : String,
    attribute_key : String,
    attribute_icon : String,
    attribute_label :String,
    attribute_value : [{option_name : String}],
    attribute_background_color : String,
    attribute_background_image : String
})


export const FilterSendo = mongoose.model("productfilter",Schema)