import { Photo } from "./../../photo/photo";
import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "ap-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"],
})
export class PhotosComponent implements OnChanges {
  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() {}

  //
  ngOnChanges(changes: SimpleChanges){
    if (changes.photos){
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]) {

    const newRows = [];

    // saltando de 3 em 3, comecando pelo 0
    for (let index = 0; index < photos.length; index += 3) {
      /*slice() retorna uma copia de alguns elementos do array original. No caso se colocar (0,3)
      vai pegar os elementos 0, 1 e 2. Se for (1,2), vai pegar o segundo e terceiro elemento,
      pq 0 é o primeiro elemento*/
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }
}
