import styled from "styled-components"

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

const Titulo = ({ children }) => {
    return (
        <TituloEstilizado>
            {children}
        </TituloEstilizado>
    )
}

export default Titulo