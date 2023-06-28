import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

import { ProcessosService } from '../../services/processos.service';

@Component({
  selector: 'app-processo-form',
  templateUrl: './processo-form.component.html',
  styleUrls: ['./processo-form.component.scss'],
})
export class ProcessoFormComponent implements OnInit {
  form = this.formBuilder.group({
    numero: new FormControl('', { nonNullable: true }),
    digito: new FormControl('', { nonNullable: true }),
    ano: new FormControl('', { nonNullable: true }),
    justica: new FormControl('', { nonNullable: true }),
    tribunal: new FormControl('', { nonNullable: true }),
    vara: new FormControl('', { nonNullable: true }),
    clienteNome: new FormControl('', { nonNullable: true }),
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: ProcessosService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    // this.form =
  }
  ngOnInit(): void {
    // this.form.value.
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: () => {
        this.onSuccess();
      },
      error: () => {
        this.onError();
      },
    });
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Processo salvo com sucesso', '', { duration: 3000 });
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar processo', '', { duration: 3000 });
  }
}
