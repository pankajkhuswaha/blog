import * as fs from 'fs';
export default async function handler(req, res) {
    let data = await fs.promises.readdir("blogsData")
    let blogeddata=[];
    //   res.status(200).json(data)
      for(let i=0;i<data.length;i++){
        const blog = data[i]
        let singleData = await fs.promises.readFile((`blogsData/${blog}`),'utf-8')
        blogeddata.push(JSON.parse(singleData))
      }
    res.status(200).json(blogeddata)
    
    // fs.promises.readdir(`blogsData`, 'utf-8', (err, data) => {
    //     if (err) {
    //         res.status(400).json({ error: "Invalid Request" })
    //     }
    //     console.log(data)
    //     const blogsdata=data.forEach((ele) => {
    //         let bloged = []
    //         fs.readFile(`blogsData/${ele}`, 'utf-8', (err, blog) => {
    //             if (err) {
    //                 res.status(400).json({ error: "Invalid Request" })
    //             }
    //             console.log(blog)
    //             bloged.unshift(blog)
    //         })
    //         return bloged
    //     })
    //     res.status(200).json(blogsdata)
    // })
}