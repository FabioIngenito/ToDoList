import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ToDo } from '../interfaces/toDo.interface';
import { ToDoPayload } from '../interfaces/playload-toDo.interface';

@Injectable({
  providedIn: 'root',
})
export class ToDosService {
  constructor() {}

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<ToDo[]>('/api/toDo');
  }

  get(id: string) {
    return this.httpClient.get<ToDo>(`/api/toDo/${id}`);
  }

  post(payload: ToDoPayload) {
    return this.httpClient.post('/api/toDo', payload);
  }

  put(id: string, payload: ToDoPayload) {
    return this.httpClient.put(`/api/toDo/${id}`, payload);
  }

  delete(id: string) {
    return this.httpClient.delete(`/api/toDo/${id}`);
  }
}
