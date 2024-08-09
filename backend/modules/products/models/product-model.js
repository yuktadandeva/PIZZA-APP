import mongoose, { SchemaTypes } from "mongoose";

const productSchema = mongoose.Schema({
category : {type: SchemaTypes.String, required:true},
name : {type:SchemaTypes.Mixed, required:true},
image : {type:SchemaTypes.Mixed, required: true},
desc : {type: SchemaTypes.Mixed, required: true},
price : {type: SchemaTypes.Number, required:true},
discount : {type: SchemaTypes.Mixed}
})

export const productModel = mongoose.model('products', productSchema)