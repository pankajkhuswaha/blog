// todo Old code
// import * as fs from 'fs';
// import { useRouter } from 'next/router';

// ;
// export default async function handler(req, res) {
//   let data = await fs.promises.readdir("blogsData")
//   let blogeddata = [];
//   //   res.status(200).json(data)
//   for (let i = 0; i < data.length; i++) {
//     const blog = data[i]
//     let singleData = await fs.promises.readFile((`blogsData/${blog}`), 'utf-8')
//     blogeddata.push(JSON.parse(singleData))
//   }
//   res.status(200).json(blogeddata)

//   // fs.promises.readdir(`blogsData`, 'utf-8', (err, data) => {
//   //     if (err) {
//   //         res.status(400).json({ error: "Invalid Request" })
//   //     }
//   //     console.log(data)
//   //     const blogsdata=data.forEach((ele) => {
//   //         let bloged = []
//   //         fs.readFile(`blogsData/${ele}`, 'utf-8', (err, blog) => {
//   //             if (err) {
//   //                 res.status(400).json({ error: "Invalid Request" })
//   //             }
//   //             console.log(blog)
//   //             bloged.unshift(blog)
//   //         })
//   //         return bloged
//   //     })
//   //     res.status(200).json(blogsdata)
//   // })
// }
import { BlogData } from "@/blogsData/Data";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // if (req?.body !== undefined && req?.body !== "") {
    //   let newBlog = req.body;
    //   const newData = BlogData.push(newBlog)
    //   console.log(typeof newData, newData, BlogData.length)
    // }
    res.status(400).json("Blog is process")
  } else {
    res.status(200).json(BlogData)
  }

}