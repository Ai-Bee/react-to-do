import React from 'react'
// import { Link } from 'react-router-dom'
import './someStyes.css'


const About = () => {
     return (
       <div>
              <h4 className="text-center my-4" >This is the about page...</h4>
              <summary className="m-4 text-center p-4">This Todo app was made with react, my very first react app 
                actually. </summary>
                <summary className="m-4 text-center p-4">It was made using react hooks, react-router-dom and local storage,
                   for storing the todo items.</summary>
       </div>
     );
   }

export default About