import { Oferta } from './shared/oferta.model';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs'

@Injectable()
export class OfertasService {

    private url_api = 'http://localhost:3000/'

    constructor(private http: Http){}
 
    public getOfertas(): Promise<Oferta[]> {
        //efetua requisição http
        return this.http.get(`${this.url_api}ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json())
        //retorna promise de Oferta[]
    }

    public getOfertasPorCategoria(catergoria: string) : Promise<Oferta[]>{
        return this.http.get(`${this.url_api}ofertas?categoria=${catergoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${this.url_api}ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta.json()[0]
            })
    }

    public getComoUsarOfertasPorId(id: number): Promise<string> {
        return this.http.get(`${this.url_api}como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta.json()[0].descricao
        })
    }
    
    public getOndeFicaOfertasPorId(id: number): Promise<string> {
        return this.http.get(`${this.url_api}onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta.json()[0].descricao
        })
    }
}