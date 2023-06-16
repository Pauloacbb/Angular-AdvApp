import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-processo-form',
  templateUrl: './processo-form.component.html',
  styleUrls: ['./processo-form.component.scss'],
})
export class ProcessoFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
    console.log('onSubit');
  }

  onCancel() {
    console.log('onCancel');
  }
}
