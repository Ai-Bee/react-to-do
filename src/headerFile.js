import React from 'react'
import { Link } from 'react-router-dom'
import './someStyes.css'


const FileHeader = () => {
     return (
       <React.Fragment>
          <div className='justify-content-center col-sm-12'>
              <h3 className='text-center col-sm-12'>Todo App</h3>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link active" to="/" ><kbd>Home</kbd></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about"><kbd>About</kbd></Link>
                </li>
              </ul>
          </div>
       </React.Fragment>
     );
   }

export default FileHeader