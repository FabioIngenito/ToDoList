import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToDosService } from '../../shared/services/todo.service';
import { Router } from '@angular/router';
import { ToDo } from '../../shared/interfaces/toDo.interface';
import { FormComponent } from '../../shared/components/form/form.component';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  toDosService = inject(ToDosService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(toDo: ToDo) {
    this.toDosService.post(toDo).subscribe(() => {
      this.matSnackBar.open('Compromisso criado com sucesso!', 'Ok');
      this.router.navigateByUrl('/');
    });
  }
}
