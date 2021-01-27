import React from 'react'
import { Link } from 'react-router-dom'
import './someStyes.css'


const FileHeader = () => {
     return (
       <React.Fragment className='row'>
          <div className='justify-content-center col-sm-6'>
              <h3>Todo App</h3>
              <br/>
              <Link className="" to="/" >Home</Link> |  <Link to="/about" className="" >About</Link>
          </div>
       </React.Fragment>
     );
   }

export default FileHeader