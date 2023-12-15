import { styled } from "styled-components"
import search from '../../../public/icones/search.png'
import { useEffect, useState } from "react";
import fotos from "../../fotos.json"

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    margin: 0;

    @media (max-width: 1440px) {
        width: 426px;
    }

    @media (max-width: 744px) {
        width: 80vw;
    }
`
const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 30px;
    width: 38px;
    height: 38px;

    @media (max-width: 744px) {
        right: 10px;
    }
`;

const CampoTexto = ({atualizarFotosFiltradas}) => {

    const [busca, setBusca] = useState('')

    useEffect( ()=> {
        
        const fotosFiltradas = fotos.filter( fotos => fotos.titulo.includes(busca))

        atualizarFotosFiltradas(fotosFiltradas);

    }, [busca])

    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado 
            placeholder="O que você procura?" 
            onChange={(event) => setBusca(event.target.value)}
            />
            <IconeLupa 
            src={search} 
            alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto
