import * as C from './App.styles'
import { Button } from './components/Button'
import { InforItem } from './components/InfoItem'

import RestartIcon from './svgs/restart.svg';

const App = () =>{

  const handleResetAndCreateGrid = () =>{

  }

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

          <Button label='Reiniciar' icon={RestartIcon} onClick={handleResetAndCreateGrid}/>

        </C.Info>
        <C.GridArea>
        ...
        </C.GridArea>
      </C.Container>
    </div>
  )
}

export default App