import { GridItemType } from '../../types/GridItemType'
import * as C from './styes'

import b7Svg from '../../svgs/b7.svg'
import {Items} from '../../data/items'

type Props ={
  item: GridItemType,
  onClick: () => void
}

export const GridItem = ({item, onClick}: Props) =>{
  return(
    <C.Container onClick={onClick} showBackground={item.permanentShown || item.shown}>
      {item.permanentShown === false && item.shown === false &&
        <C.Icon src={b7Svg} opacity={.1} alt=''/>
      }
      {(item.permanentShown || item.shown) && item.item !== null &&
        <C.Icon src={Items[item.item].icon} alt=''/>
      }
    </C.Container>
  )
}