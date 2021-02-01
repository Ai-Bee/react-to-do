import React, {useState} from 'react'
import AnItem from './TodoItem'
import PropTypes from 'prop-types'

function Todo (props){
     const [allProps] = useState(props)

     return (allProps.allItems.map((el, index) => {
          return <AnItem oneItem={el} 
          adjustItem={props.adjustItem} 
          deleting={props.deleting}
          theKey={index}/>
     }))
}

Todo.propTypes = {
     allItems: PropTypes.array
}

export default Todo;
