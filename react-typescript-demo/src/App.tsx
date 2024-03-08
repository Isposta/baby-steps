import './App.css';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status'
import { Greet } from './components/Greet'

function App() {
  return( 
  <div className='App'>
    <Status status='loading'/>
    <Heading>Placeholder text</Heading>
    <Oscar>
      <Heading>Oscar goes to Leonardo DiCaprio</Heading>
    </Oscar>
    <Greet name= 'Ispost' isLoggedIn={false}/>
  </div>
  )
}

export default App