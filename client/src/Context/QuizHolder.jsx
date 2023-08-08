import React, {useContext, createContext} from 'react'

const QuizContext =  createContext();

export default function Quiz (props) {
  return (
    <QuizContext.Provider>
      {props.children}
    </QuizContext.Provider>
  )
}

export {QuizContext}