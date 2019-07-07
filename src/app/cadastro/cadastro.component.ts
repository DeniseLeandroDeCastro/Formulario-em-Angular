import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: any = {
    matricula: null,
    nome: null,
    email: null,
    senha: null,
    conf_senha: null
  }

  onSubmit(form) {
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }
  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': !campo.valid && campo.touched };
  }
}
