import styled from "styled-components";
import tags from "./tags.json";
import { useEffect, useState } from "react";
import fotos from "../../../fotos.json";

const TituloTag = styled.h3`
  font-size: 24px;
  color: rgba(217, 217, 217, 1);
  font-weight: 400;
  margin: 0 20px 0 0;
`;

const Button = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease; // Adicionado o efeito de transição para a borda
  padding: 12px;
  box-sizing: border-box;
  border: ${(props) =>
    props.$selected
      ? "2px solid  #c98cf1" // Cor quando selecionado
      : "none"};
  
  &:hover {
    background: rgba(172, 172, 172, 0.3);
  }

  @media (max-width: 870px) {
    font-size: 16px;
    }
`;

const DisplayTags = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  
`;

const ContainerPrincipal = styled.div`
  display: flex;
  padding: 40px 0;
  align-items: center;

  @media (max-width: 744px) {
    flex-direction: column;
    gap: 20px;
    }
`

const Tags = ({ atualizarFotosFiltradas }) => {
  const [tagSelecionada, setTagSelecionada] = useState();

  useEffect(() => {
    let fotosFiltradas;

    if (tagSelecionada === 0 || tagSelecionada === undefined) {
      fotosFiltradas = fotos;
    } else {
      fotosFiltradas = fotos.filter((foto) => foto.tagId == tagSelecionada);
    }

    atualizarFotosFiltradas(fotosFiltradas);
  }, [tagSelecionada]);

  return (
    <>
      <ContainerPrincipal>
        <TituloTag>Busque por tags:</TituloTag>
        <DisplayTags>
          {tags.map((tag) => (
            <Button
              key={tag.id}
              onClick={() => setTagSelecionada(tag.id)}
              $selected={tag.id === tagSelecionada}
            >
              {tag.titulo}
            </Button>
          ))}
        </DisplayTags>
      </ContainerPrincipal>
    </>
  );
};

export default Tags;
