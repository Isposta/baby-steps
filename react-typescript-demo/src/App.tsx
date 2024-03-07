import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Big',
    last: 'Boss',
  }

const nameList = [
  {
    first: 'Big',
    last: 'Boss',
  },
  {
    first: 'Venom',
    last: 'Snake',
  },
  {
    first: 'Kazuhara',
    last: 'Miller'
  }
]



  return (
    <div className="App">
     <Greet name='Ispost' messageCount={20} isLoggedIn={false} />
     <Person name={personName} />
     <PersonList names={nameList} />
    </div>
  );
}

export default App;
