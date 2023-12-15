import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;

    img {
        max-width: 212px;
        margin: 0;
    }

    @media (max-width: 1440px) {
        padding: 60px 30px;
    }

    @media (max-width: 744px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 30px;
    }
`

const Cabecalho = ({atualizarFotosFiltradas}) => {
    return (
        <HeaderEstilizado  
       >
            <img src="/imagens/logo.png" alt="imagem do logo" />
            <CampoTexto  
            atualizarFotosFiltradas={atualizarFotosFiltradas}/>
        </HeaderEstilizado>
    )
}

export default Cabecalho