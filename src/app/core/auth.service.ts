import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    authenticate(userName: string, password: string) {

      //como o nome da propriedade é o mesmo dos parametros, podemos simplicar o objeto javascripta desta forma:
        return this.http.post(API_URL + '/user/login', { userName, password } )
    }
}
