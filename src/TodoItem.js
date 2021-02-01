import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './someStyes.css'

function TodoItem (props){
     let [allProps] = useState(props.oneItem.item)
     let [done] = useState(props.oneItem.completed)
     let [itemIndex] = useState(props.theKey)
     // How to add functions, like getStyle to functionalComponents // Done!
     
    function adjustIt (){
         props.adjustItem(itemIndex)
     // setState(prevValue => !prevValue)
    }
    function deleting () {
          props.deleting(itemIndex)
    }

     return (
          <div className='justify-content-center border border-right-0 border-left-0'>
               <div className="form-check">
                    <label class="form-check-label p-2">
                         <input className="form-check-input p-2 bg-danger" onChange={adjustIt}  type="checkbox" checked={done}/>
                         <p style={getStyles(done)}>{allProps}</p>
                    </label>
                    <button type="button" className="close" aria-label="Close" onClick={deleting}>
                    <span aria-hidden="true">&times;</span>
               </button>
               </div>
              
          </div>
     )
}

let getStyles = (val) => {
     return {
          textDecoration: val?'line-through':'none',
          color: val?'crimson':'black',
     }
}

TodoItem.propTypes = {
     oneItem: PropTypes.object.isRequired
}

export default TodoItem;
