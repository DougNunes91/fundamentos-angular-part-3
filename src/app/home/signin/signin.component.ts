import { AuthService } from '../../core/auth/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private platformId: PlatformDetectorService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.platformId.isPlatformBrowser()) this.userNameInput.nativeElement.focus();


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
        if (this.platformId.isPlatformBrowser()){
          this.userNameInput.nativeElement.focus();
        }
      }
    );

  }
}
