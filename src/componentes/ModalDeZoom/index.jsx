import Imagem from "../Galeria/Imagem"
import styled from "styled-components"

const Overlay = styled.div`
    background-color: rgba(0 ,0 ,0 , 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const Dialog = styled.dialog`
    position: absolute;
    top: 294px;
    padding: 0;
    border: none;
    border-radius: 25px;
`

const Button = styled.button`
    position:absolute;
    top: 30px;
    right: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const ModalDeZoom = ({ foto, aoAlternarFavorito,  aoFechar}) => {
    return (
        <>
            {foto ?
                <>
                    <Overlay />
                    <Dialog 
                    open={foto ? true : false} 
                    onClose={aoFechar}>
                        <Imagem
                            foto={foto}
                            expandida={true}
                            aoAlternarFavorito={aoAlternarFavorito}
                        />
                        <form method="dialog">
                            <Button>
                                <img src="icones/fechar.png" />
                            </Button>
                        </form>
                    </Dialog >
                </>
                : null}
        </>
    )
}

export default ModalDeZoom