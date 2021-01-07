import { render } from '@testing-library/react'
import React, {useState} from 'react'
import AnItem from './TodoItem'
import PropTypes from 'prop-types'

function Todo (props){
     const [allProps, setstate] = useState(props)
     return (allProps.allItems.map((el, index) => {
          return <AnItem oneItem={el} key={index}/>
     }))
}

Todo.PropTypes = {
     allItems: PropTypes.array.isRequired
}

export default Todo;
