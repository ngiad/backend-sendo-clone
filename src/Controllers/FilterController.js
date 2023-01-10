import  { FilterSendo }  from "../Models/FilterProducts.js"

export const GetProductFilter = async(req,res,next) => {
    try {
        const filter = await FilterSendo.find()
        res.json({filter})
    } catch (error) {
        next(error)
    }
}