import styled from "styled-components";
import TituloEstilizado from "../TituloEstilizado";

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover; 
    background-position: center bottom;

`

const Banner = () => {
    return (
        <FigureEstilizada $backgroundImage="/imagens/banner.jpeg">
            <TituloEstilizado > 
                A galeria mais completa de fotos do espaço!
            </TituloEstilizado>
        </FigureEstilizada>
    );
}

export default Banner;
