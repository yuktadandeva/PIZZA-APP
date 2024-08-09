import { productModel } from "../models/product-model.js"

export const getProducts =async (request, response, next)=>{
    try{
        const docs =await productModel.find({}).exec();
        return response.status(200).json({"products":docs})

    }catch(error){
        return response.status(400).json({message:"cannot get products",error})
    }
}

export const addProduct =async (request, response, next)=>{
    try{
        console.log(request.body);
        const product = request.body;
        const doc =await productModel.create(product);

        if(doc&& doc._id){
        return response.status(200).json({message:"added successfully"})
        }else{
        return response.status(400).json({message:"cannot add"})
        }
    }catch(error){
        return response.status(404).json({message:"ERROR IN REQUEST","error":error})
    }
}

export const getProduct = async (request, response, next)=>{
    try{
    const {name} = request.query;
    console.log(request.query);
    const doc = productModel.findOne({name});
    
    return response.status(200).json({"product":doc})
    }catch(error){
    return response.status(404).json({message:"ERROR IN REQUEST","error":error})
    }
}
