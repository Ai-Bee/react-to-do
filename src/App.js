import {useState} from 'react'
import './App.css';
import Todo from './Todo'

function App(props) {
  let [check, updateCheck] = useState(0)
  let [allItems, updateItems] = useState([
    {
      item: 'Sleep Today',
      completed: false
    },
    {
      item: 'Sleep Tomorrow',
      completed: true
    },
    {
      item: 'Sleep tonight',
      completed: true
    },
    {
      item: 'Sleep Tuesday',
      completed: false
    }
  ])

  let adjustItem = (val) => {
    allItems.map((item, index) => {
      if(index == val){
          item.completed = !item.completed;
      }});
      updateItems([...allItems], allItems)
      updateCheck(prev => prev + 1) // Check if there's an alternative to this
      console.log({check})
  }

  return (
    <div>
      <h3>These are the things to be done...</h3>
      <Todo allItems={allItems} key={check} adjustItem={adjustItem} />
    </div>
  )
}

export default App;
