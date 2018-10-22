import React, { Component, Fragment } from 'react'

import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import { muscles, exercises } from '../store'

export default class App extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles(){
    return Object.entries( 
      this.state.exercises.reduce(( exercises, exercise ) => {
        const { muscles } = exercise
        // separa os objetos com base no atruibuto muscle, caso tenha o 
        // mesmo muscle aumenta a array.
        exercises[ muscles ] = exercises[ muscles ]
          ? [ ...exercises[ muscles ], exercise ]
          : [ exercise ]
          return exercises
      }, {} )
    )
  }

  handleCategorySelect = category =>{
    this.setState({
      category
    })
  }

  handleExerciseSelect = id =>{
    this.setState( ( { exercises } ) => ({
      exercise: exercises.find( ex => ex.id === id )
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState( ( { exercises } ) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(( exercises ) => ({
      exercises: exercises.filter( ex => ex.id !== id )
    }))
  }
  
  render() {
    const exercises = this.getExercisesByMuscles(),
    { category, exercise } = this.state
    return (
      <Fragment>
       <Header 
        muscles={ muscles }
        onExerciseCreate={ this.handleExerciseCreate }
       />
       <Exercises
        exercise={ exercise }
        category={ category }
        exercises={ exercises }
        onSelect={ this.handleExerciseSelect }
        onDelete={ this.handleExerciseDelete }
       />
       <Footer
        category={ category }
        muscles={ muscles }
        onSelect= { this.handleCategorySelect }
       />
      </Fragment>
    )
  }
}

