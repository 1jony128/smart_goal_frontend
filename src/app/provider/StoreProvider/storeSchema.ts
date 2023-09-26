import { AxiosInstance } from "axios";
import { ITaskSlice } from "@/entities/Task/models/slice/taskSlice.ts";

export interface StateSchema {
  Task: ITaskSlice;
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
