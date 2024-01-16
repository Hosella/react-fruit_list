import useStore from '../../store/useStore';
import './App.scss';
import { FruitsList } from '../FruitsList';


function App() {
  const { fruitsData } = useStore();

  return (
    <div className='App'>
      <span className='App__span'>Selected: {fruitsData.join(', ')}</span>
      <FruitsList />
    </div>
  )
}

export default App;
