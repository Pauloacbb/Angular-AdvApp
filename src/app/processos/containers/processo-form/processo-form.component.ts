import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

import { ProcessosService } from '../../services/processos.service';
import { ActivatedRoute } from '@angular/router';
import { Processo } from '../../model/processo';

@Component({
  selector: 'app-processo-form',
  templateUrl: './processo-form.component.html',
  styleUrls: ['./processo-form.component.scss'],
})
export class ProcessoFormComponent implements OnInit {
  form = this.formBuilder.group({
    _id: new FormControl('', { nonNullable: true }),
    numero: new FormControl('', { nonNullable: true }),
    digito: new FormControl('', { nonNullable: true }),
    ano: new FormControl('', { nonNullable: true }),
    justica: new FormControl('', { nonNullable: true }),
    tribunal: new FormControl('', { nonNullable: true }),
    vara: new FormControl('', { nonNullable: true }),
    clienteNome: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200),
      ],
    }),
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: ProcessosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    // this.form =
  }
  ngOnInit(): void {
    // this.form.value.
    const processo: Processo = this.route.snapshot.data['processo'];
    this.form.setValue({
      _id: processo._id,
      numero: processo.numero,
      digito: processo.digito,
      ano: processo.ano,
      justica: processo.justica,
      tribunal: processo.tribunal,
      vara: processo.vara,
      clienteNome: processo.clienteNome,
    });
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

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);
    if (field?.hasError('required')) {
      return 'Campo Obrigatorio';
    }

    if (field?.hasError('minlength')) {
      const requiredLength = field.errors
        ? field.errors['minlength']['requiredLength']
        : 3;
      return `Caracteres minimos: ${requiredLength}`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength = field.errors
        ? field.errors['maxlength']['requiredLength']
        : 200;
      return `Caracteres maximos: ${requiredLength}`;
    }

    return 'Erro';
  }
}
