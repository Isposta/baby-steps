import './App.css';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status'
import { Greet } from './components/Greet'
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

function App() {
  return( 
  <div className='App'>
    <Status status='loading'/>
    <Heading>Placeholder text</Heading>
    <Oscar>
      <Heading>Oscar goes to Leonardo DiCaprio</Heading>
    </Oscar>
    <Greet name= 'Ispost' isLoggedIn={false}/>
    <Button handleClick={(event, id) =>{
      console.log('Button clicked', event, id)
    }}/>
    <Input value= '' handleChange={event => console.log(event)} />
    <Container styles={{ border: '1px solid black', padding: '1rem' }} />
  </div>
  )
}

export default App