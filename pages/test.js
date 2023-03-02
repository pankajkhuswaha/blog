import React from 'react'

const Test = () => {
    let arr = [{
        "title": "What is mobile",
        "content": "Next-js is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
        "name": "what-is-Mobile",
        "description": "Welcome to the blog of Pankaj where you can get the update of all Kind the technologie which help to update with latest technology Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum molestiae neque vero, odit, iure officia minima nihil ab libero veritatis fugit dolor nam in minus tempore unde suscipit perferendis.",
        "author": "Pankaj"
    },
    {
        "title": "What is Next-js",
        "content": "Next-js is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
        "name": "what-is-Next-js",
        "description": "Welcome to the blog of Pankaj where you can get the update of all Kind the technologie which help to update with latest technology Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum molestiae neque vero, odit, iure officia minima nihil ab libero veritatis fugit dolor nam in minus tempore unde suscipit perferendis.",
        "author": "Pankaj"
    },
    {
        "title": "What is React",
        "content": "React is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
        "author": "Pankaj",
        "description": "Welcome to the blog of Pankaj where you can get the update of all Kind the technologie which help to update with latest technology Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum molestiae neque vero, odit, iure officia minima nihil ab libero veritatis fugit dolor nam in minus tempore unde suscipit perferendis.",
        "name": "what-is-React"
    }
    ]
  
    // arr.map(item=>console.log(item))
    // todo for finding a particular array
    let arrs = arr.find((arr)=>arr.title==="What is React")
    console.log(arrs)
    return (
        <>{arrs.description}</>
    )
}

export default Test