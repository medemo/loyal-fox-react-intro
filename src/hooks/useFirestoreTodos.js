import { useState, useEffect } from 'react'
import { db } from '../config/firebase'


export default function useFirestoreTodos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const unsubscribe = db.collection('todos')
      .onSnapshot(querySnapshot => {
        let todos = []
        querySnapshot.forEach(doc => {
          todos.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setTodos(todos)
      })

    return () => {
      unsubscribe()
    }
  }, [])


  return todos
}