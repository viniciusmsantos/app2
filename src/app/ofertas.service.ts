import { Oferta } from './shared/oferta.model';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs'

@Injectable()
export class OfertasService {

    constructor(private http: Http){}
 
    public getOfertas(): Promise<Oferta[]> {
        //efetua requisição http
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta.json())
        //retorna promise de Oferta[]
    }

    public getOfertasPorCategoria(catergoria: string) : Promise<Oferta[]>{
        return this.http.get(`http://localhost:3000/ofertas?categoria=${catergoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }
}