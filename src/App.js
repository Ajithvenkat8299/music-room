import Searchbox from './components/Searchbox';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Musicplayer from './components/Musicplayer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Explore />
      <Searchbox />
      <Musicplayer />
    </div>
  );
}

export default App;
