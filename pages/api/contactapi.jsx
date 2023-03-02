import * as fs from 'fs';

export default async function handler(req, res) {
    let Data = await fs.promises.readFile("contactdata/request.json", "utf-8")
    let prevData = JSON.parse(Data)
    // console.log(prevData)
    if (req.method === 'POST') {
        prevData.push(req?.body)
        fs.writeFile("contactdata/request.json", JSON.stringify(prevData), (err) => {
            console.log(err)
            res.status(200).json({ error: "Request Sucessfull" })

        })
    } else {
        let Data = await fs.promises.readFile("contactdata/request.json", "utf-8")
        let prevData = JSON.parse(Data)
        res.status(200).json(prevData)
    }
        // res.status(200).json({name:"Pankaj"})

}