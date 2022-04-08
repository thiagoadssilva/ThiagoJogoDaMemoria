import { useEffect, useState } from 'react';
import * as C from './App.styles'
import { Button } from './components/Button'
import { InforItem } from './components/InfoItem'

import RestartIcon from './svgs/restart.svg';
import { GridItemType } from './types/GridItemType';

import {Items} from './data/items'
import { GridItem } from './components/GridItem';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

const App = () =>{
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => handleResetAndCreateGrid(), [])

  useEffect(() => {
    const timer = setInterval(() =>{
      if(playing){
        setTimeElapsed(timeElapsed + 1)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [playing, timeElapsed])

  useEffect(() => {
    if(shownCount === 2){
      let opened = gridItems.filter(item => item.shown === true)
      if(opened.length === 2){
        if(opened[0].item === opened[1].item){
          let tmpGrid = [...gridItems]
          for(let i in tmpGrid){
            if(tmpGrid[i].shown){
              tmpGrid[i].permanentShown = true
              tmpGrid[i].shown = false
            }
          }
          setGridItems(tmpGrid)
          setShownCount(0)
        }else{
          let tmpGrid = [...gridItems]
          setTimeout(() =>{
            for(let i in tmpGrid){
              tmpGrid[i].shown = false
            }
          }, 500)
          setGridItems(tmpGrid)
          setShownCount(0)
        }
        setMoveCount(moveCount => moveCount + 1)
      }
    }
  },[shownCount, gridItems])

  useEffect(() => {
    if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)){
      setPlaying(false)
    }
  }, [moveCount, gridItems])

  const handleResetAndCreateGrid = () =>{
    setTimeElapsed(0)
    setMoveCount(0)
    setShownCount(0)
    
    let tmpGrid: GridItemType[] = []

    for(let i=0; i < (Items.length * 2); i++){
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      })
    }

    for(let w = 0; w < 2; w++){
      for(let i = 0; i < Items.length; i++){
        let pos = -1
        while(pos < 0 || tmpGrid[pos].item !== null){
          pos = Math.floor(Math.random() * (Items.length * 2))
        }
        tmpGrid[pos].item = i
      }
    }

    setGridItems(tmpGrid)

    setPlaying(true)

  }

  const handleItemClick = (index: number) =>{
    let tmpGrid = [...gridItems]

    if(playing && index !== null && shownCount < 2){
     
      if(tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false){
        tmpGrid[index].shown = true
        setShownCount(shownCount + 1)
      }
      setGridItems(tmpGrid)
    }
  }

  return(
    <div>
      <C.Container>
        <C.Info>
          <C.LogoLink href=''>
            <h1>Jogo da Memória</h1>
          </C.LogoLink>
          
          <C.InfoArea>
            <InforItem label='Tempo' value={formatTimeElapsed(timeElapsed)}/>
            <InforItem label='Movimentos' value={moveCount.toString()}/>
          </C.InfoArea>

          <Button label='Reiniciar' icon={RestartIcon} onClick={handleResetAndCreateGrid}/>

        </C.Info>
        <C.GridArea>
          <C.Grid>
            {gridItems.map((item, index) =>(
              <GridItem 
                key={index}
                item={item}
                onClick={() => handleItemClick(index)} 
              />
            ))}
            

          </C.Grid>
        </C.GridArea>
      </C.Container>
    </div>
  )
}

export default App