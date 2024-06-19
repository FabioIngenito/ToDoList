import { Component, inject, signal } from '@angular/core';
import { ToDosService } from '../../shared/services/todo.service';
import { ToDo } from '../../shared/interfaces/toDo.interface';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { filter } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { NoItemsComponent } from './components/no-items/no-items.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  toDos = signal<ToDo[]>(inject(ActivatedRoute).snapshot.data['toDos']);

  toDosService = inject(ToDosService);
  router = inject(Router);
  confirmationDialogComponent = inject(ConfirmationDialogService);

  onEdit(toDo: ToDo) {
    this.router.navigate(['/edit-todo', toDo.id]);
  }

  onDelete(toDo: ToDo) {
    this.confirmationDialogComponent
      .openDialog()
      .pipe(filter((anwser) => anwser === true))
      .subscribe(() => {
        this.toDosService.delete(toDo.id).subscribe(() => {
          this.toDosService.getAll().subscribe((toDos) => {
            this.toDos.set(toDos);
          });
        });
      });
  }
}
