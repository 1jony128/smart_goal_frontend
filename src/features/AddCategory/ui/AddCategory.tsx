import { FC, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import useInput from "@/shared/shared/hooks/useInput.ts";
import { TaskActions } from "@/entities/Task/models/slice/taskSlice.ts";
import { v4 as uuidv4 } from "uuid";
import { HStack } from "@/shared/shared/ui/Stack";

interface AddCategoryProps {}

const AddCategory: FC<AddCategoryProps> = ({}) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const [open, setOpen] = useState(false);

  const name = useInput("");

  const onAddTask = () => {
    setOpen(true);
    setTimeout(() => {
      // @ts-ignore
      inputRef.current.focus();
    }, 100);
  };

  const onKeyDown = (e: any) => {
    if (e.key === "Enter") {
      dispatch(
        TaskActions.addCategory({
          category_id: uuidv4(),
          category: name.value,
        }),
      );
      name.setValue("");
      setOpen(false);
    }
  };

  return (
    <HStack gap={"16"}>
      <AddIcon
        className={"cursor-pointer hover:bg-sky-500/50 rounded-full"}
        onClick={onAddTask}
      />
      {open && (
        <input // @ts-ignore
          ref={inputRef}
          className={"border border-muted rounded p-1 px-2 outline-none"}
          {...name}
          onKeyUp={onKeyDown}
        />
      )}
    </HStack>
  );
};

export default AddCategory;
