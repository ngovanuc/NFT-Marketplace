import { EthProvider } from "./contexts";
import {Demo} from "./components";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <hr />
          <Demo />
          <hr />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
