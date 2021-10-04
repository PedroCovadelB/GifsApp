import { Component, Input } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial(){
    return this.gifServices.historial
  }

  constructor(private gifServices: GifsService) { }

  retornar(argumento:string){
     this.gifServices.buscarGifs(argumento)
    }
  
}

