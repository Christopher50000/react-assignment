
import './App.css';

import HeaderComponet from './HeaderComponet.js'

import LeftComponet from './LeftComponent.js'

import RightComponet from './RightComponet.js'
import FooterComponet from './FooterComponet.js';



function App() {
  return (
    <div className="App">
      <div>
      <HeaderComponet />
      </div>
      <div className='Middle'>
      <LeftComponet />
      <RightComponet />
      </div>
      <div>
      <FooterComponet />
      </div>
 
    </div>
  );
}

export default App;
