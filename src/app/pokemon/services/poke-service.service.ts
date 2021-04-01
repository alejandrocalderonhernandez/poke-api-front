import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { ResponseInfo } from '../models/response.model';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeService {
  
  constructor(private httpClient: HttpClient) { }

  public findByPokeName(name: string): Observable<Pokemon> {
    const url = `${environment.baseUrl}pokemon/${name}`;
    return this.httpClient.get(url).pipe(
      map((data:any) => new Pokemon(data.id, 
                                    data.name, 
                                    data.height, 
                                    data.weight, 
                                    this.getType(data.types),
                                    this.buidImageUrl(data.id),
                                    this.getMoves(data.moves)))
    );
  }

  public findByPage(page: number): Observable<ResponseInfo> {    
    const endpoint = `${environment.baseUrl}pokemon/`;
    const params = new HttpParams()
      .set('limit',environment.limitRecords.toString())
      .set('offset', page.toString());
    return this.httpClient.get(endpoint, {params}).pipe(
      map((data:any) => new ResponseInfo(data.count, this.getUrls(data.results)))
    );
  }

  public findAll(): Observable<ResponseInfo> {    
    const endpoint = `${environment.baseUrl}pokemon?limit=1118&offset=0`;
    return this.httpClient.get(endpoint).pipe(
      map((data:any) => new ResponseInfo(data.count, this.getUrls(data.results)))
    );
  }

  public findByUrl(url: string): Observable<Pokemon> {    
    return this.httpClient.get(url).pipe(
      map((data:any) => new Pokemon(data.id, 
                                    data.name, 
                                    data.height, 
                                    data.weight, 
                                    this.getType(data.types),
                                    this.buidImageUrl(data.id)))
    );
  }

  public getPokeTypes(): Observable<Map<number, string>> {
    const endpoint = `${environment.baseUrl}type`;
    return this.httpClient.get(endpoint).pipe(
      map((data: any) => {
        return this.getTypes(data.results);
      })  
    )
  }

  private getUrls(array: Array<any>): Array<string>{
    let urls = new Array<string>();
    array.forEach(element => {
     urls.push(element.url);
   });
   return urls;
  }

  private buidImageUrl(id: number): string {
    return `${environment.ImageUrl}${id}${environment.imageSufix}`
  }

  private getType(types: Array<any>): string {
    return types[0].type.name;
  }

  private getMoves(moves: Array<any>): Array<string> {
    let result = new Array<string>();
    moves.forEach(m => result.push(m.move.name));
    console.log(moves.length)
    return result;
  }

  private getTypes(types: Array<any>): Map<number, string> {
    const delimiter = '/';
    const idPosition = 6
    let response = new Map<number, string>();
     types.forEach((t: any) => {
       let array = t.url.split(delimiter);
       let id = array[idPosition];
       response.set(id, t.name);
     });
    return response;
  }

  public getByType(type: string): Observable<Array<any>> {
    const url = `${environment.baseUrl}type/${type}`;
    return this.httpClient.get(url).pipe(
      map((r: any) => r.pokemon)
    )
  }

}
