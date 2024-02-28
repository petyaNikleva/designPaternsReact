import './App.css'
import { BigSuccessButton, Button, DangerButton } from './components/Button.jsx'
import { DangerButton2, BigSuccessButton2 } from './components/partiallyApplyButtons.jsx'



function App() {

  return (
    <>
      <Button text="Click me" />
      <DangerButton text="Don't do it!" />
		  <BigSuccessButton text="Yes!!!" />
      <div>----------------</div>
      <DangerButton2 text="Don't do it!" />
		  <BigSuccessButton2 text="Yes!!!" />
    </>
  )
}

export default App
