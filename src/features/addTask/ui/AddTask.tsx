import { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { TaskActions } from "@/entities/Task/models/slice/taskSlice.ts";

import { v4 as uuidv4 } from "uuid";
import useInput from "@/shared/shared/hooks/useInput.ts";
import { HStack } from "@/shared/shared/ui/Stack";
interface AddTaskProps {
  category_id: number;
}

const AddTask: FC<AddTaskProps> = ({ category_id }) => {
  const dispatch = useDispatch();

  const name = useInput("");

  console.log(category_id);

  const onAddTask = () => {
    dispatch(
      TaskActions.addTask({
        completed: false,
        category_id,
        description: ",",
        name: name.value,
        date: "",
        id: uuidv4(),
      }),
    );
    name.setValue("");
  };

  const onKeyDown = (e: any) => {
    if (e.key === "Enter") {
      onAddTask();
    }
  };

  return (
    <HStack max gap={"16"}>
      <AddIcon
        className={"cursor-pointer hover:bg-sky-500/50 rounded-full"}
        onClick={onAddTask}
      />
      <input
        className={"border border-muted rounded p-1 outline-none"}
        {...name}
        onKeyUp={onKeyDown}
      />
    </HStack>
  );
};

export default AddTask;
