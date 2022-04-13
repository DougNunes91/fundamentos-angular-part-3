import { PhotoService } from './../photo/photo.service';
import { Photo } from './../photo/photo';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {


  photos: Photo[] = [];
  filter: string ='';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';


  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }


  ngOnInit(): void {

    this.userName = this.activatedRoute.snapshot.params.userName;

    this.photos = this.activatedRoute.snapshot.data['photos'];

  }

  //Esse metodo será chamado quando for clicado o botão
  load() {

    this.filter = '';
    this.photoService
    //++ é um pré-incremento para pegar a segunda pagina
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
          //Spread Operator(...) é utilizado para desmembrar os elementos do array
          // this.photos.push(...photos);
          //Só q n utilizaremos o Spread Operator, vamos criar uma nova referencia de this.photos
          //concat() gera uma nova lista q é uma nova referencia. Isso foi feito para q o outro
          //component possa receber uma nova referencia, pq o Angular só consegue identificar
          //alguma algeracao em alguma inbound property(@Input) quando é atribuido um novo valor
          this.photos = this.photos.concat(photos)

            //O length retorna false se n conter nenhum elemento. True se contiver elementos
            if(!photos.length) this.hasMore = false;
        });
}

}
