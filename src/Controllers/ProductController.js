import { ProductSendo } from "../Models/ProductModel.js"

export const GetProduct = async(req,res,next) => {
    const { limit,count } = req.query

    const query = {...req.query}
    delete query["limit"]
    delete query["count"]

    try {

        if(!req.query.count || !req.query.limit){
            throw new Error("limit and count is null!")
        }

        const Products = await ProductSendo.find(query).skip(count).limit(limit*30)
        res.json({Products,Length : Products.length})

    } catch (error) {
        next(error)
    }
}