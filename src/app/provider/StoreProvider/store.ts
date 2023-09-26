import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  StateSchema,
  ThunkExtraArg,
} from "@/app/provider/StoreProvider/storeSchema.ts";
import { $api } from "@/app/config/service.ts";
import { TaskReducer } from "@/entities/Task/models/slice/taskSlice.ts";

const rootReducer = combineReducers<StateSchema>({
  Task: TaskReducer,
});

export const setupStore = (): any => {
  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
