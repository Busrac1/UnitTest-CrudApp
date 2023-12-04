
import Scoops from './components/Scoops/index';
import Toppings from './components/Toppings/index';
import Card from './components/Card/index';
import Form from './components/Form/index';

function App() {
  return (
    <div>
      {/* ürün çeşitleri */}
      <Scoops/>
      {/* sos çeşitleri */}
      <Toppings/>
      {/* cardları basma */}
      <Form/>
    </div>
  )
 
  ;
}

export default App;
