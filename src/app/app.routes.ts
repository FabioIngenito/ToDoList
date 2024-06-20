import { Routes } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { getToDos } from './shared/resolvers/get-todo.resolver';
import { getToDo } from './shared/resolvers/ge-todo.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      toDos: getToDos,
    },
    component: ListComponent,
  },
  {
    path: 'create-todo',
    // Lazy Load
    loadComponent: () =>
      import('./component/create/create.component').then(
        (m) => m.CreateComponent
      ),
  },
  {
    path: 'edit-todo/:id',
    resolve: {
      toDo: getToDo,
    },
    loadComponent: () =>
      import('./component/edit/edit.component').then((m) => m.EditComponent),
  },
];
