import React from 'react'
import Todos from './components/Todos'

class App extends React.Component {
  componentDidMount() {
    console.log('mounted')

  }

  componentDidUpdate() {
    console.log('updated')
  }

  componentWillUnmount() {
    console.log('before destroy')
  }

  render() {
    return (
      <div className="container mx-auto">
        <Todos />
      </div>
    )
  }
}

export default App
