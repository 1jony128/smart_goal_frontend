import { FC, useState } from "react";
import { ITask } from "@/entities/Task/models/types";
import { HStack } from "@/shared/shared/ui/Stack";
import classNames from "classnames";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { TaskActions } from "@/entities/Task/models/slice/taskSlice.ts";
import EditTask from "@/features/editTask/ui/EditTask.tsx";

interface TaskProps extends ITask {}

const Task: FC<TaskProps> = ({ name, completed, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(TaskActions.deleteTask(id));
  };

  const onChecked = () => {
    dispatch(TaskActions.checkedTask(id));
  };

  return (
    <HStack
      max
      justify={"between"}
      gap={"16"}
      className={classNames("hover:opacity-75")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        onChange={onChecked}
        type={"checkbox"}
        className={"cursor-pointer"}
        checked={completed}
      />
      <span
        className={classNames("", { "line-through opacity-50": completed }, [
          "cursor-pointer",
        ])}
      >
        {name}
      </span>
      <HStack
        gap={"8"}
        className={classNames("cursor-pointer", {
          group: true,
          "opacity-100": isHovered,
          "opacity-0": !isHovered,
        })}
      >
        <EditTask name={name} id={id} />
        <Delete onDoubleClick={onDelete} />
      </HStack>
    </HStack>
  );
};

export default Task;
