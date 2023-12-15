import styled from "styled-components";

const ContainerRodape = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: rgba(4, 36, 79, 1);
    margin-top: 70px;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    width: 100%;

    @media (max-width: 744px) {
       flex-direction: column;
       margin-top: 30px;
       padding: 0;
    }
`

const ListaIcones = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 22px;
    align-items: center;

    @media (max-width: 744px) {
        gap: 22px;
       padding: 0;
    }
`

const IconeImg = styled.img`
    width: 24px;
`

const TextoRodape = styled.p`
    font-size: 20px;
    line-height: 19px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin-right: 40px;

    @media (max-width: 744px) {
        margin-right: 0;
    }
`

const Rodape = () => {
    return (
        <ContainerRodape>
        <ListaIcones>
            <li>
                <a href="#">
                <IconeImg src="imagens/sociais/facebook.svg" alt="icone de midia social"/>
                </a>
            </li>
            <li>
                <a href="#">
                <IconeImg src="imagens/sociais/twitter.svg" alt="icone de midia social"/>
                </a>
            </li>
            <li>
                <a href="#">
                <IconeImg src="imagens/sociais/instagram.svg" alt="icone de midia social"/>
                </a>
            </li>
        </ListaIcones>
        <TextoRodape>Desenvolvido pela Lara 🤩</TextoRodape>
        </ContainerRodape>
    )
}

export default Rodape