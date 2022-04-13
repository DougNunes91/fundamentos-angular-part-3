import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Injectable({ providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private service: PhotoService) {}

    // o metodo resolve retorna Observable<Photo[]>, e podemos ver isso na assinatura da class
    // ActivatedRoutedSnapshot vai pegar uma fotografia doq está acontecendo na rota naquele momento
    // E esse momento da rota, é o momento antes da chamada do component PhotoListComponent
    // O state n estamos utilizando, mas n foi explicado o motivo de seu uso
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName, 1);
    }

}
