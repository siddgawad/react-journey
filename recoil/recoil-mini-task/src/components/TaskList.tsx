import { useRecoilState } from "recoil";
import { taskAtom } from "../atom/taskAtom";
import { useNavigate } from "react-router-dom";

export const TaskList = () => {
  const [list, setList] = useRecoilState(taskAtom);
  const navigate = useNavigate();

  function handleNav() {
    navigate("/input");
  }

  function deleteHandle(taskToDelete: string) {
    const updatedList = list.filter((task) => task !== taskToDelete);
    setList(updatedList);
  }

  return (
    <div>
      <ul>
        {list.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteHandle(task)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleNav}>Go back to input</button>
    </div>
  );
};
