import { useEffect, useState } from "preact/hooks";
import { fetchTodos } from "../../services/pokemon.service";

const LimitComponent = () => {
  const [limit, setLimit] = useState("10");

  useEffect(() => {
    fetchTodos(Number(limit)).subscribe();
  }, [limit]);

  return (
    <div>
      <select
        value={limit}
        onChange={({ currentTarget }) => {
          setLimit(currentTarget.value);
        }}
      >
        <option value={"5"}>5</option>
        <option value={"10"}>10</option>
        <option value={"15"}>15</option>
        <option value={"20"}>20</option>
      </select>
    </div>
  );
};

export default LimitComponent;
