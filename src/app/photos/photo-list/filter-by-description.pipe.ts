import { Photo } from './../photo/photo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], descricao: string) {
    descricao = descricao.trim().toLowerCase();
    if (descricao){
      return photos.filter(photo => photo.description.toLowerCase().includes(descricao))
    }else{
      return photos;
    }

  }

}
