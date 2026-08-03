import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function FormularioDeEvento() {
  return (
  <form className="form-evento">
    <h2>Preencha para criar um evento:</h2>
    <fieldset>
      <label htmlFor="nome">Qual o nome do evento?</label>
      <input type="text" id="nome" />
    </fieldset>
  </form>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <img src="logo.png" />
      </header>
      <section>
        <img src="banner.png" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
