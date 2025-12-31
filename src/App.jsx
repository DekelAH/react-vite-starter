
import { useEffect } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { showErrorMsg, showSuccessMsg } from './services/event-bus.service'
import { UserMsg } from './components/UserMsg'

function App() {

  useEffect(() => {

    showSuccessMsg('Welcome to React Starter!')

    //showErrorMsg('This is an error message example.')
  }, [])

  return (

    <Router>
      <section className='main-app'>
        <main className="container">
          <Routes>
            <Route path="/" element={<h1>React Vite Starter</h1>} />
          </Routes>
        </main>
        <UserMsg />
      </section>
    </Router>
  )
}

export default App
