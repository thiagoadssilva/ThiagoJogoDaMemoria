import * as C from './App.styles'

const App = () =>{
  return(
    <div>
      <C.Container>
        <C.Info>
          <C.LogoLink href=''>
            <h1>Jogo da Memória</h1>
          </C.LogoLink>
          
          <C.InfoArea>
            Thiago
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