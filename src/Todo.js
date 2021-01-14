import React, {useState, useEffect} from 'react'
import AnItem from './TodoItem'
import PropTypes from 'prop-types'

function Todo (props){
     const [allProps] = useState(props)

     return (allProps.allItems.map((el, index) => {
          return <AnItem oneItem={el} adjustItem={props.adjustItem} theKey={index}/>
     }))
}

Todo.PropTypes = {
     allItems: PropTypes.array.isRequired
}

export default Todo;
