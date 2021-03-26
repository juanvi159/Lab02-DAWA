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
            <Part part={props.part1}/>
		        <Part part={props.part2}/>
		        <Part part={props.part3}/>
        </div>
}
function Total(props){
  const {part1, part2, part3} = props
  	const total = part1.exercises + part2.exercises + part3.exercises
  	return(
	    <div>
	    	<p>Number of exercises {total}</p>
	    </div>  
  	)
}
const App = () => {
  const course = 'Desarrollo de Aplicaciones Web Avanzado'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1}
               part2={part2}
               part3={part3}/>
      <Total   part1={part1}
               part2={part2}
               part3={part3}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))