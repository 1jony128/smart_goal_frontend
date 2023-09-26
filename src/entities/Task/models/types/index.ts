export interface ITask {
  id: number;
  name: string;
  date?: string;
  category_id: number;
  description?: string;
  completed: boolean;
}
