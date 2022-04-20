import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {

    //pega os valores do formulario
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.auth.authenticate(userName, password).subscribe(
      () =>
      //após a validacao de login, podemos navegar para uma outra rota
      // navigateByUrl('user/' + userName) faz concatenacao, mas é mais preferivel usar o navigate
      // para evitar concatenacoes
        this.router.navigate(['user', userName]),
      (err) => {
        console.log("Não autenticado");
        //limpa o formulario
        this.loginForm.reset();
      }
    );

  }
}
