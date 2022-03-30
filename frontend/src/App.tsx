import * as C from './App.styles'
import { InforItem } from './components/InfoItem'

const App = () =>{
  return(
    <div>
      <C.Container>
        <C.Info>
          <C.LogoLink href=''>
            <h1>Jogo da Memória</h1>
          </C.LogoLink>
          
          <C.InfoArea>
            <InforItem label='Tempo' value='00:00'/>
            <InforItem label='Movimentos' value='0'/>
          </C.InfoArea>

          <button>Reniciar</button>
        </C.Info>
        <C.GridArea>
        ...
        </C.GridArea>
      </C.Container>
    </div>
  )
}

export default App