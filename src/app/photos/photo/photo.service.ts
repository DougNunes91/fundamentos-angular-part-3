import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos');
    }

    //implementacao de paginacao utilizando a class Httparams
    listFromUserPaginated(userName: string, page: number) {
      const params = new HttpParams()
          .append('page', page.toString());

      return this.http
      //passando como segundo parametro um objeto json ao GET (necessario a propriedade params no JSON)
          .get<Photo[]>(API + '/' + userName + '/photos', { params: params });
  }
}
