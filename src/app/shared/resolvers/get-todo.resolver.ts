import { inject } from '@angular/core';
import { ToDosService } from '../services/todo.service';

export const getToDos = () => {
  const toDosService = inject(ToDosService);
  return toDosService.getAll();
};
