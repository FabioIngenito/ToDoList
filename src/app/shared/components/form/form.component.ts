import { Component, EventEmitter, Output, input, output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToDo } from '../../interfaces/toDo.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  toDo = input<ToDo | null>(null);

  form!: FormGroup;

  @Output() done = new EventEmitter<ToDo>();

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>(this.toDo()?.title ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  }

  onSubmit() {
    const toDo = this.form.value as ToDo;
    this.done.emit(toDo);
  }
}
