import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { FormularioDeEvento } from './components/FormularioDeEvento'

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
