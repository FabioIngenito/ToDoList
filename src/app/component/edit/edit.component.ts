import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDosService } from '../../shared/services/todo.service';
import { ToDo } from '../../shared/interfaces/toDo.interface';
import { FormComponent } from '../../shared/components/form/form.component';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  toDosService = inject(ToDosService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  toDo: ToDo = inject(ActivatedRoute).snapshot.data['toDo'];

  onSubmit(toDo: ToDo) {
    this.toDosService.put(this.toDo.id, toDo).subscribe(() => {
      this.matSnackBar.open('Compromisso editado com sucesso!', 'Ok');

      this.router.navigateByUrl('/');
    });
  }
}
