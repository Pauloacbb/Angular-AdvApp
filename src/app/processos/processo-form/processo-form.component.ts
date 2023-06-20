import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProcessosService } from '../services/processos.service';

@Component({
  selector: 'app-processo-form',
  templateUrl: './processo-form.component.html',
  styleUrls: ['./processo-form.component.scss'],
})
export class ProcessoFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProcessosService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      numero: [null],
      digito: [null],
      ano: [null],
      justica: [null],
      vara: [null],
      clienteNome: [null],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (data) => console.log(data),
      error: () => {
        this.onError();
      },
    });
  }

  onCancel() {
    console.log('onCancel');
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso', '', { duration: 3000 });
  }
}
