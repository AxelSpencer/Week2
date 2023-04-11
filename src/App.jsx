import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Modal } from './modal'; 
import { Card } from './Card'

const todoList = [{
  id: 1,
  name: 'Clean the dishes'
},
{
  id: 2,
  name: 'Walk the dog'
},
{
  id: 3,
  name: 'Do laundry'
}]

function App(){
  return (
    <div className='todo-container'>
      {todoList.map(todo => <Card name={todo.name}/>)}
    </div>
  )
}


export default App
