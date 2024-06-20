import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ToDo } from '../../../../shared/interfaces/toDo.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  toDo = input.required<ToDo>();

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  // O "computed" é um "signal" que escuta outros signal (apenas leitura e recomputa)
  toDoTitle = computed(() => this.toDo().title);

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
