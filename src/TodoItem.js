import React, {useState} from 'react'
import PropTypes from 'prop-types'


function TodoItem (props){
     const [allProps, setstate] = useState(props)
     const [done, setTodoState] = useState(props.oneItem.completed)
     // How to add functions, like getStyle to functionalComponents
     return (
          <div style={{backgroundColor:"pink"}}>
               <p>{allProps.oneItem.item}</p>
          </div>
     )
}

TodoItem.propTypes = {
     oneItem: PropTypes.object.isRequired
}

export default TodoItem;
