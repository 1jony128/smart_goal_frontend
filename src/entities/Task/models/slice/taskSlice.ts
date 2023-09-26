import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "@/entities/Task/models/types";
import { ICategory } from "@/entities/Category/models/types";

export interface ITaskSlice {
  tasks: ITask[];
  category: ICategory[];
}

const initialState: ITaskSlice = {
  tasks: [
    {
      id: 1,
      name: "окна",
      category_id: 1,
      completed: false,
    },
    {
      id: 2,
      name: "Плесень зал",
      category_id: 1,
      completed: true,
    },
    {
      id: 3,
      name: "плинтуса",
      category_id: 1,
      completed: false,
    },
    {
      id: 4,
      name: "тонировка",
      category_id: 2,
      completed: false,
    },
    {
      id: 5,
      name: "Усилитель",
      category_id: 2,
      completed: false,
    },
    {
      id: 6,
      name: "сигнал",
      category_id: 2,
      completed: false,
    },
  ],
  category: [
    {
      category_id: 1,
      category: "Дом",
    },
    {
      category_id: 2,
      category: "Машина",
    },
  ],
};

export const TaskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    setTask(state, { payload }: PayloadAction<ITask[]>) {
      state.tasks = payload;
    },
    setCategory(state, { payload }: PayloadAction<ICategory[]>) {
      state.category = payload;
      localStorage.setItem("category", JSON.stringify(state.category));
    },
    addCategory(state, { payload }: PayloadAction<ICategory>) {
      state.category.push(payload);
      localStorage.setItem("category", JSON.stringify(state.category));
    },
    addTask(state, { payload }: PayloadAction<ITask>) {
      state.tasks.push(payload);
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
    deleteTask(state, { payload }: PayloadAction<number>) {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
    checkedTask(state, { payload }: PayloadAction<number>) {
      state.tasks.map((item) => {
        if (item.id === payload) {
          item.completed = !item.completed;
        }
        return item;
      });
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
    editTask(state, { payload }: PayloadAction<ITask>) {
      state.tasks.map((item) => {
        if (item.id === payload.id) {
          item.name = payload.name;
        }
        return item;
      });
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
  },
});

export const { actions: TaskActions } = TaskSlice;
export const { reducer: TaskReducer } = TaskSlice;
