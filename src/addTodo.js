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
       <form onSubmit={handleSubmit} className='justify-content-center row my-4'>
         <input
           type="text"
           className="input col-sm-5 ml-4 mr-2"
           value={value}
           onChange={e => setValue(e.target.value)}
         />
         <button type="submit" className="btn btn-danger col-sm-2">Add Item</button>
       </form>
     );
   }

export default TodoForm