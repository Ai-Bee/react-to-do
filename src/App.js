import {useState} from 'react'
import './App.css';
import Todo from './Todo'

function App() {
  const [allItems] = useState([
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
  return (
    <div>
      <h3>These are the things to be done...</h3>
      <Todo allItems={allItems}/>
    </div>
  )
}

export default App;
