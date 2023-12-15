import TituloCategoria from "../TituloCategoria"
import Tags from "./Tags"
import styled from "styled-components"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display:flex;
    gap: 24px;

    @media (max-width: 744px) {
    flex-direction: column;
    align-items: center;
    }
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`
const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 24px;

    @media (max-width: 870px) {
       width: 375px;
    }

`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, atualizarFotosFiltradas }) => {
    return (
        <>
            <Tags atualizarFotosFiltradas={atualizarFotosFiltradas}/>
            <GaleriaContainer>
                <SecaoFluida>
                    <TituloCategoria>
                        Navegue pela  galeria
                    </TituloCategoria>
                    <ImagensContainer>
                        {fotos.map(foto =>
                            <Imagem
                                foto={foto}
                                aoZoomSelecionado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito}
                            />
                        )}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria