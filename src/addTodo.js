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
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           className="input"
           value={value}
           onChange={e => setValue(e.target.value)}
         />
         <button type="submit" className="btn btn-lg">Add Item</button>
       </form>
     );
   }

export default TodoForm