import React from 'react'
import ReactDOM from 'react-dom'


function Part(props){
  return <p>{props.part.name} {props.part.exercises}</p>
}
function Header(props){
  return <h1>{props.course}</h1>
}
function Content(props){
  return <div>
            {props.parts.map((part) => {
			      return(<Part part={part}/>)})}
        </div>
}
function Total({parts}){
  const amount = (item) => {return item.exercises}
  const sum = (prev, next) => {return prev + next}
  const total = parts.map(amount).reduce(sum)
  return(
    <div>
	    {parts.map}
	    <p>Number of exercises {total} </p>
    </div>  
  )
}
const App = () => {
  const course = 'Desarrollo de Aplicaciones Web Avanzada'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))