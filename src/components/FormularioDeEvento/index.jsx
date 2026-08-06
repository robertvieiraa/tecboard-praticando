import { TituloDoFormulario } from "../TituloDoFormulario"
import { CampoDeFormulario } from "../CampoDeFormulario"
import { Label } from "../Label"
import { CampoDeEntrada } from "../CampoDeEntrada"
import './formulario-de-evento.estilos.css'

export function FormularioDeEvento() {
  return (
  <form className="form-evento">
    <TituloDoFormulario>
      Preencha para criar um evento:
    </TituloDoFormulario>
    <div className="campos">
      <CampoDeFormulario>
        <Label htmlFor={'nomeEvento'}>Qual o nome do evento?</Label>
        <CampoDeEntrada
        type="text"
        id="nomeEvento"
        placeholder='Summer dev hits'
        name="nomeEvento"/>
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor={'dataEvento'}>Data do evento</Label>
        <CampoDeEntrada
        type="date"
        id="dataEvento"
        name="dataEvento"/>
      </CampoDeFormulario>
    </div>
  </form>
  )
}