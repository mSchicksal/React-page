// COMPONENTES
import Body from './components/body/Body';
import NavBar from './components/navbar/NavBar';
// CSS
import './assets/css/general.css';
import './assets/css/navbar.css';
import './assets/css/body.css'
// OTHERS
import logo from './logo.svg';

function App() {
  let users = {
    items: [ {
        id: 1,
        name: 'Alvaro',
        lastName: 'Catalan',
        icon: logo
      },
      {
        id: 2,
        name: 'Pamela',
        lastName: 'Nahum',
        icon: logo
      },
    ]
  }
  return (
    <div className="App">
        <section className='components'>
          <NavBar users={users}/>
          <Body users={users}/>
        </section>
    </div>
  );
}

export default App;
