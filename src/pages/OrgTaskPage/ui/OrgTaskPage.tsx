import { FC, useEffect } from "react";
import TaskList from "@/entities/Task/ui/TaskList.tsx";
import Category from "@/entities/Category/ui/Category.tsx";
import { useDispatch, useSelector } from "react-redux";
import { StateSchema } from "@/app/provider/StoreProvider/storeSchema.ts";
import { TaskActions } from "@/entities/Task/models/slice/taskSlice.ts";

interface OrgTaksPageProps {}

const OrgTaskPage: FC<OrgTaksPageProps> = ({}) => {
  const category = useSelector((state: StateSchema) => state.Task.category);
  const tasks = useSelector((state: StateSchema) => state.Task.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("task")) {
      dispatch(TaskActions.setTask(JSON.parse(localStorage.getItem("task"))));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("category")) {
      dispatch(
        TaskActions.setCategory(JSON.parse(localStorage.getItem("category"))),
      );
    }
  }, []);

  return (
    <div className={"container mx-auto"}>
      <h2 className={"text-2xl mb-3 mt-3"}>Все дела</h2>
      <Category>
        {category.map((item) => (
          <TaskList
            key={item.category_id}
            tasks={tasks}
            category_id={item.category_id}
            category_name={item.category}
          />
        ))}
      </Category>
    </div>
  );
};

export default OrgTaskPage;
