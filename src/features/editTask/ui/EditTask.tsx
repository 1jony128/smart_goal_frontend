import * as React from "react";
import { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Edit } from "@mui/icons-material";
import useInput from "@/shared/shared/hooks/useInput.ts";
import { useDispatch } from "react-redux";
import { TaskActions } from "@/entities/Task/models/slice/taskSlice.ts";

interface EditTaskProps {
  name: string;
  id: number;
}

const EditTask: FC<EditTaskProps> = ({ id, name }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(
      // @ts-ignore
      TaskActions.editTask({
        id,
        name: nameInput.value,
      }),
    );
    nameInput.setValue("");
    handleClose();
  };
  const onKeyDown = (e: any) => {
    console.log("das");
    if (e.key === "Enter") {
      onSave();
    }
  };

  const nameInput = useInput("");

  useEffect(() => {
    if (name) {
      nameInput.setValue(name);
    }
  }, [name]);

  return (
    <div>
      <Edit onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className={"text-xl pb-5"}>Изменить задачу</h2>
          <input
            onKeyDown={onKeyDown}
            className={"p-1 px-5 border border-muted ounline-none"}
            {...nameInput}
          />
          <button
            onClick={onSave}
            className={
              "border border-primary bg-primary py-2 px-5 mt-5 rounded-md text-white hover:opacity-75"
            }
          >
            Сохранить
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditTask;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #9d9797",
  p: 4,
  borderRadius: 2,
};
