import React, {useState} from 'react'
import './App.css';
import Todo from './Todo'
import TodoForm from './addTodo'
import FileHeader from './headerFile'
import About from './About'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
      updateItems([...allItems], allItems.map((item, index) => {
        if(index == val){
            item.completed = !item.completed;
        }}));
      updateCheck(prev => prev + 1); // Check if there's an alternative to this
  }

  let addTodo = (val) => {
     const newArray = [...allItems,{
      item: val,
      completed: false
    }]
    updateItems(newArray);
    updateCheck(prev => prev + 1);
  }

  let deleting = (val) => {
    const newTodos = allItems.filter((_, index) => index !== val)
    updateItems(newTodos);
    updateCheck(prev => prev + 1);
  }

  return (
    <Router>
      <div className="container justify-content-center mt-4">
        <div className="row">
          <FileHeader className="col-12 justify-content-center"/>
        </div>
        <Route exact path="/" render={() => (
          <React.Fragment>
            <TodoForm addTodo={addTodo} className="mx-auto"/>
            <h4>These are the things to be done...</h4>
            <Todo allItems={allItems} key={check} adjustItem={adjustItem} deleting={deleting} />
          </React.Fragment>
        )}>
        </Route>
        <Route component={About} path="/about"/>
      </div>
    </Router>
  )
}

export default App;
