// export default async function handler(req, res) {
//     let data = await fetch("http://blog-pk.netlify.app/api/getblogs")
//     let parseddata = await data?.json();
//     if (req.method === 'POST') {
//         if (req?.body!==undefined &&req?.body!=="") {
//             let newBlog =req.body;
//             let blogExists = parseddata?.find((arr)=>arr.name===newBlog?.name)
//             if(blogExists==undefined){
//                  res.status(200).json("New Blog add request accepted")
//                  fetch('http://blog-pk.netlify.app/api/getblogs', {
//                     method: 'POST',
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(newBlog)
//                 }).then(res => res.text()).catch((err) => console.log(err))
//             }else{
//             res.status(400).json("Blog is already available in database")

//             }

//         }else{
//         res.status(200).json("Invalid Syntax error")
//         }

//     } else {
//         res.status(500).json("Interval Serval Error")
//     }
// }