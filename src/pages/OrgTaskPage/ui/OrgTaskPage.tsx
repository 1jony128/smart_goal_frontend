import { FC, useEffect } from "react";
import TaskList from "@/entities/Task/ui/TaskList.tsx";
import Category from "@/entities/Category/ui/Category.tsx";
import { useDispatch, useSelector } from "react-redux";
import { StateSchema } from "@/app/provider/StoreProvider/storeSchema.ts";
import { TaskActions } from "@/entities/Task/models/slice/taskSlice.ts";
import { HStack, VStack } from "@/shared/shared/ui/Stack";

interface OrgTaksPageProps {}

const OrgTaskPage: FC<OrgTaksPageProps> = ({}) => {
  const category = useSelector((state: StateSchema) => state.Task.category);
  const tasks = useSelector((state: StateSchema) => state.Task.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("task")) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(TaskActions.setTask(JSON.parse(localStorage.getItem("task"))));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("category")) {
      dispatch(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        TaskActions.setCategory(JSON.parse(localStorage.getItem("category"))),
      );
    }
  }, []);

  return (
    <VStack className={"h-full"} max>
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
    </Р>
  );
};

export default OrgTaskPage;
