import CalculatorAndHistory from "./components";
import CalculatorProvider from './commons/calculatorProvider'

function App() {
  return (
    <div className="App">
        <CalculatorProvider>
            <CalculatorAndHistory />
        </CalculatorProvider>
    </div>
  );
}

export default App;
