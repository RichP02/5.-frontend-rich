import { useState, useEffect } from 'react'
import './App.css'
import ListIssues from './components/ListIssues'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(res => res.json())
      .then(results => {
        setList(results) // La respuesta de la API no tiene una propiedad data
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>
        <h1 className='title'>Issues list</h1>
        <div className='grid-cards'>
          {list && list.map(item => (
            <ListIssues
              number={item.number}
              url={item.html_url}
              title={item.title}
              user={item.user}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
