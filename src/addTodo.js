import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import './someStyes.css'


let TodoForm = (props) => {
     const [value, setValue] = useState("");
   
     const handleSubmit = e => {
       e.preventDefault();
       if (!value) return;
       props.addTodo(value);
       setValue("");
     };
   
     return (
       <form onSubmit={handleSubmit} className='my-4'>
         <div className="row">
          <input
            type="text"
            className="input ml-4 mr-2"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button type="submit" className="btn btn-danger">Add Item</button>
         </div>
       </form>
     );
   }

export default TodoForm