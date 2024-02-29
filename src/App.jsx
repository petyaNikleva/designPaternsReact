import  ControlledForm  from './components/ControlledForm/ControlledForm.jsx';
import Modal from './components/Modal/Modal.jsx';

import './App.css'
import { useState } from 'react';

function App() {
	const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <>
      <ControlledForm />
	  <button onClick={() => setShouldShowModal(true)}>Show Modal</button>
	  <Modal shouldShowModal={shouldShowModal} onRequestClose={() => setShouldShowModal(false)}>
	  	<ControlledForm />
      </Modal>
    </>
  )
}

export default App;
