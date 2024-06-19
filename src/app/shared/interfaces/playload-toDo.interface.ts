import { ToDo } from './toDo.interface';

export type ToDoPayload = Omit<ToDo, 'id'>;
