import './App.css';
import FootBar from './Footbar/FootBar';
import ModelView from './ModelView/ModelView';
import {KennoProvider} from "./kennoContextAPI/KennoContextAPI"
import {StackRangeProvider} from "./kennoContextAPI/StackRangeAPI"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function App() {
  return (
    <div className="App">
      <KennoProvider>
        <StackRangeProvider>
          <ModelView>
            <FootBar /> 
          </ModelView>
        </StackRangeProvider>
      </KennoProvider>
    </div>
  );
}

export default App;
