import React, { Component, Fragment } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';
import { vondTheme } from '../Theme/VondTheme'

export default class App extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles(){
    const initExercises = muscles.reduce( ( exercises, category ) => ({
      ...exercises,
      [ category ]: []
    }), {})

    return Object.entries( 
      this.state.exercises.reduce(( exercises, exercise ) => {
        const { muscles } = exercise
        // separa os objetos com base no atruibuto muscle, caso tenha o 
        // mesmo muscle aumenta a array.
        exercises[ muscles ] = exercises[ muscles ]
          ? [ ...exercises[ muscles ], exercise ]
          : [ exercise ]
          return exercises
      }, initExercises )
    )
  }

  handleCategorySelect = category => {
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
    this.setState( ( { exercises } ) => ({
      exercises: exercises.filter( ex => ex.id !== id )
    }))
  }
  
  handleExerciseSelectEdit = id => {
    this.setState( ( { exercise } ) =>  ({
      exercise: exercises.find( ex => ex.id === id),
      editMode: true
    }))
  }

  handleCategorySelect = exercise => {
    this.state( ( { exercises } ) => ({
      exercises: [
        ...exercises.filter( ex => ex.id !== exercise.id ),
        exercise
      ]
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
    { category, exercise, editMode } = this.state
    return (
      <MuiThemeProvider theme={ vondTheme }>
          <Header 
            muscles={ muscles }
            onExerciseCreate={ this.handleExerciseCreate }
          />
          <Exercises
            exercise={ exercise }
            category={ category }
            exercises={ exercises }
            editMode={ editMode }
            muscles={ muscles }
            onSelect={ this.handleExerciseSelect }
            onSelectEdit={ this.handleExerciseSelectEdit }
            onDelete={ this.handleExerciseDelete }
            onEdit={ this.handleExerciseEdit }
          />
          <Footer
            category={ category }
            muscles={ muscles }
            onSelect= { this.handleCategorySelect }
          />
      </MuiThemeProvider>      
    )
  }
}

