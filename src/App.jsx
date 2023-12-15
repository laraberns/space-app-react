import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import { useState } from "react"
import ModalDeZoom from "./componentes/ModalDeZoom"
import Rodape from "./componentes/Rodape"

const FundoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
  padding: 0 ;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;

  @media (max-width: 1440px) {
       flex-direction: column;
       padding: 0 40px;
    }

    @media (max-width: 744px) {
       padding: 0 15px;
    }

`

const ConteudoDaGaleria = styled.section`
  flex-direction: column;
  display:flex; 
  flex-grow: 1;
`

function App() {

  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const [fotosFiltradas, setFotosFiltradas] = useState();

  const atualizarFotosFiltradas = (fotos) => {
    setFotosFiltradas(fotos);
  };

  const aoAlternarFavorito = (foto) => {

    if (foto.id == fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }

    setFotosFiltradas(fotosFiltradas.map(fotoFiltrada => {
      return {
        ...fotoFiltrada,
        favorita: fotoFiltrada.id == foto.id ? !foto.favorita : fotoFiltrada.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho
          atualizarFotosFiltradas={atualizarFotosFiltradas} />
        <MainContainer>
          <BarraLateral />
          <ConteudoDaGaleria>
            <Banner />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              fotos={fotosFiltradas}
              aoAlternarFavorito={aoAlternarFavorito}
              atualizarFotosFiltradas={atualizarFotosFiltradas}
            />
          </ConteudoDaGaleria>
        </MainContainer>
      </AppContainer>
      <ModalDeZoom
        foto={fotoSelecionada}
        aoAlternarFavorito={aoAlternarFavorito}
        aoFechar={() => setFotoSelecionada(null)}
      />
      <Rodape />
    </FundoGradiente>
  )
}

export default App
