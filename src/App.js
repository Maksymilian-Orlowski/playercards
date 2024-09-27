import './App.css';
import Card from './Card.js';
import g1 from './assets/g1.jpg'
import g2 from './assets/g2.jpg'

function App() {
  return (

    <div className="App">
      <Card name="Gizmo" lvl="23" description="Gizmo is a diminutive, mischievous goblin with a penchant for causing chaos. " image={g1} />
      <Card name="Zibble" lvl="54" description="A diminutive, nimble-fingered goblin skilled in trickery and gadgets. " image={g2} />
    </div>

  );
}

export default App;
