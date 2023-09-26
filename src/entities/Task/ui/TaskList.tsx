import { FC } from "react";
import Task from "@/entities/Task/ui/Task.tsx";
import { VStack } from "@/shared/shared/ui/Stack";
import AddTask from "@/features/addTask/ui/AddTask.tsx";
import { ITask } from "@/entities/Task/models/types";

interface TaskListProps {
  tasks: ITask[];
  category_id: number;
  category_name: string;
}

const TaskList: FC<TaskListProps> = ({ tasks, category_id, category_name }) => {
  // Функция сравнения для сортировки задач
  const compareTasks = (a: any, b: any) => {
    // Сначала сортируем по выполнению (выполненные задачи будут внизу)
    if (a.completed && !b.completed) {
      return 1;
    } else if (!a.completed && b.completed) {
      return -1;
    }
    // Затем сортируем по другим критериям, если нужно
    // Например, по дате или по имени
    // return a.date.localeCompare(b.date); // Пример сортировки по дате
    // return a.name.localeCompare(b.name); // Пример сортировки по имени
    return 0;
  };

  // Сортируем задачи перед отображением
  const sortedTasks = tasks
    .filter((item) => item.category_id === category_id)
    .sort(compareTasks);

  return (
    <VStack className={"border border-muted p-3 px-8 rounded-md "} gap={"8"}>
      <span className={"text-xl underline underline-offset-4"}>
        {category_name}
      </span>
      {sortedTasks.map((item) => (
        <Task key={item.id} {...item} />
      ))}
      <AddTask category_id={category_id} />
    </VStack>
  );
};

export default TaskList;
