import React, {useState} from 'react'
import PropTypes from 'prop-types'


function TodoItem (props){
     let [allProps] = useState(props.oneItem.item)
     let [done] = useState(props.oneItem.completed)
     let [itemIndex] = useState(props.theKey)
     // How to add functions, like getStyle to functionalComponents // Done!
     
    function adjustIt (){
         props.adjustItem(itemIndex)
     // setState(prevValue => !prevValue)
    }
     return (
          <div>
               <p style={getStyles(done)}>
                    <input type="checkbox" onChange={adjustIt} checked={done} style={{marginRight:'5px'}}/>
                    {allProps}</p>
          </div>
     )
}

let getStyles = (val) => {
     return {
          textDecoration: val?'line-through':'none',
          padding: '13px',
          backgroundColor: 'pink'
     }
}

TodoItem.propTypes = {
     oneItem: PropTypes.object.isRequired
}

export default TodoItem;
