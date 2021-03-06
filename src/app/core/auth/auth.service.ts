import { UserService } from './../user/user.service';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private tokenService: TokenService, private userService: UserService) { }

    authenticate(userName: string, password: string) {

      //como o nome da propriedade é o mesmo dos parametros, podemos simplicar o objeto javascripta desta forma:
        return this.http
        .post(API_URL + '/user/login', { userName, password }, {observe: "response"} )
        .pipe(tap( resp => {
          this.userService.setToken(resp.headers.get('x-access-token'));
        }))
    }
}
