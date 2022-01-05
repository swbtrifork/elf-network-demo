import { useObservable } from "@ngneat/react-rxjs";
import styled from "styled-components";
import { todosDataSource } from "../../repositories/todos.repository";
import LimitComponent from "../LimitComponent";

interface Props {
  type: "ELF" | "REDUX";
}

const List = (props: Props) => {
  const { type } = props;

  const [{ error, loading, todos }] = useObservable(todosDataSource.data$());

  if (!todos) return null;

  return (
    <div>
      <Heading>{type}</Heading>
      <LimitComponent></LimitComponent>
      <ol>
        {todos.map(({ id, completed, title, userId }, i) => {
          return <li key={id}>{title}</li>;
        })}
      </ol>
    </div>
  );
};

export default List;

const Heading = styled.h1``;

const PokemonListItem = styled.li``;
