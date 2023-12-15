import TituloCategoria from "../../TituloCategoria"
import styled from "styled-components"

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;

    @media (max-width: 744px) {
       width: 50vw;
       max-width: unset;
    }
`

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
    transition: background-color 0.3s ease;
    &:hover {
      border-color: #FFF;
    }
`

const Populares = () => {
    return (
        <section>
            <TituloCategoria $alinhamento="center">Populares</TituloCategoria>
            <ColunaFotos>
                <Imagem src="/imagens/populares/foto-1.png" alt="imagem de populares" />
                <Imagem src="/imagens/populares/foto-2.png" alt="imagem de populares" />
                <Imagem src="/imagens/populares/foto-3.png" alt="imagem de populares" />
                <Imagem src="/imagens/populares/foto-4.png" alt="imagem de populares" />
                <Imagem src="/imagens/populares/foto-5.png" alt="imagem de populares" />
            </ColunaFotos>
            <Button>Ver mais</Button>
        </section>
    )
}

export default Populares