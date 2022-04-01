import { useEffect, useState } from 'react';
import * as C from './App.styles'
import { Button } from './components/Button'
import { InforItem } from './components/InfoItem'

import RestartIcon from './svgs/restart.svg';
import { GridItemType } from './types/GridItemType';

const App = () =>{
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => handleResetAndCreateGrid())

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
          <C.Grid>
            
          </C.Grid>
        </C.GridArea>
      </C.Container>
    </div>
  )
}

export default App