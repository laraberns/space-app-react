import styled from "styled-components"

const ItemDeListaEstilizado = styled.li`
    font-size: 24px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? "rgba(123, 120, 229, 1)" : "rgba(217, 217, 217, 1)"};
    font-family: ${props => props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
    display:flex;
    align-items: center;
    gap: 22px;

    @media (max-width: 1440px) {
       margin-right: 20px;
       gap: 10px;
       font-size: 20px;
    }

    @media (max-width: 870px) {
        font-size: 16px;
    }

    @media (max-width: 744px) {
      margin: 10px;
    }
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {

    return (
        <ItemDeListaEstilizado $ativo={ativo}>
            <img 
            src={ativo ? iconeAtivo : iconeInativo}
            alt="imagem de icone" />
            {children}
        </ItemDeListaEstilizado>
    )

}

export default ItemNavegacao