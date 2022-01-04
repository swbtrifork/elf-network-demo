import { devTools } from "@ngneat/elf-devtools";
import styled from "styled-components";
import List from "./components/List";

export function App() {
  devTools();

  return (
    <Wrapper>
      <List type="ELF" />
      <List type="REDUX" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  place-content: center;
  grid-template-columns: 1fr 1fr;
`;
