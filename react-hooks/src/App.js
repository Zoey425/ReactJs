import useWindowWidth from './Hooks/useWindowWidth';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Example4 from './components/Example4';

function App() {

  const width = useWindowWidth();


  return (
    <div className="App">
      <Example2 />
      <Example3 />
      <Example4 />
      {width}
    </div>
  );
}

export default App;
