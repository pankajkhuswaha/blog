// todo old code
// import * as fs from 'fs';
// export default function handler(req, res) {
//     // console.log(req) 
//     fs.readFile(`Data/ourproducts.json`,'utf-8',(err,data)=>{
//     if(err){
//         res.status(400).json({ error:"Invalid Request" })
//     }
//     // console.log(data)
//     res.status(200).json( JSON.parse(data))
//     })
//   }
import { product } from "@/blogsData/Data"
  export default function handler(req, res) {
    res.status(200).json( product)
  }