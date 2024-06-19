import { ActivatedRouteSnapshot } from '@angular/router';
import { ToDosService } from '../services/todo.service';
import { inject } from '@angular/core';

export const getToDo = (route: ActivatedRouteSnapshot) => {
  const toDosService = inject(ToDosService);
  return toDosService.get(route.paramMap.get('id') as string);
};
