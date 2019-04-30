import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinct, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa
    .pipe(debounceTime(1000))
    .pipe(distinct())
    .pipe(switchMap((termo : string) => {
      console.log("requisição http");
      if(termo.trim() === ''){
        return of<Oferta[]>([]);
      }
      return this.ofertasService.getPesquisaOfertas(termo);
    }))
    .pipe(
      catchError ((erro) => {
        console.log(erro)
        return of<Oferta[]>([])
       })
    )

}

  public pesquisa(termoDaBusca: string): void {
    console.log('Keyup: ', termoDaBusca);
    
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('') 
  }

}
