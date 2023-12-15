import styled from "styled-components";


const TituloCategoria = styled.h2`
    font-size: 32px;
    line-height: 39px;
    color: rgba(123, 120, 229, 1);
    text-align: ${props => props.$alinhamento ? props.$alinhamento : "left"};
    font-weight: 400;
`

export default TituloCategoria