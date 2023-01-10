import { ProductSendo } from "../Models/ProductModel.js"


const SetQuery = (obj) => {
    let output = {...obj}

    if(Number(obj.gtprice) < 0){
        delete output.levelPrice 

        output.sale_price_min = {$lt: obj.ltprice}
    }

    if(Number(obj.gtprice) > 0 && !obj.ltprice){
        delete output.levelPrice 

        output.sale_price_min = { $gt: obj.gtprice}
    }

    if(Number( obj.gtprice) > 0  && Number(obj.ltprice)  > 0 && Number(obj.ltprice)  > Number( obj.gtprice)){
        output.sale_price_min = { $gt: Number( obj.gtprice),$lt:  Number(obj.ltprice)}
    }
    
    return output
    
}

export const GetProduct = async(req,res,next) => {
    const { limit,count } = req.query

    const query = {...req.query}
    delete query["limit"]
    delete query["count"]

    try {

        if(!req.query.count || !req.query.limit){
            throw new Error("limit and count is null!")
        }

        const Products = await ProductSendo.find(SetQuery(query)).skip(count).limit(limit*30)
        res.json({Products,Length : Products.length})

    } catch (error) {
        next(error)
    }
}