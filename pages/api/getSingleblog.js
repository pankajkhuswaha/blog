// todo old code with the help of cwh
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as fs from 'fs';

// export default function handler(req, res) {
//     // console.log(req) 
//     fs.readFile(`blogsData/${req.query.blog}.json`,'utf-8',(err,data)=>{
//     if(err){
//         res.status(400).json({ error:"Invalid Request" })
//     }
//     // console.log(data)
//     res.status(200).json( JSON.parse(data))
//     })
//   }

  

export default async function handler(req, res) {
    let data = await fetch("http://blog-pk.netlify.app/api/getblogs")
    let parseddata = await data?.json();
    let userqery = req?.query?.blogs
    // console.log(userqery,"api")
    let singleblog = parseddata?.find((arr)=>arr.name===`${userqery}`)
    if(singleblog){
        res.status(200).json(singleblog)
    }else{
        res.status(200).json("No Data Found")
    }

  }