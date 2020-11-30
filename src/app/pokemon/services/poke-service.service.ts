import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { ResponseInfo } from '../models/response.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  
  constructor(private httpClient: HttpClient) { }

  public findByPokeName(name: string): Pokemon {
    const endpoint = `${environment.baseUrl}${name}/`;
    return null;
  }

  public findByPage(page: number): Observable<ResponseInfo> {    
    const endpoint = `${environment.baseUrl}pokemon/`;
    const params = new HttpParams()
      .set('limit',environment.limitRecords.toString())
      .set('offset', page.toString());
    return this.httpClient.get(endpoint, {params}).pipe(
      map((data:any) => new ResponseInfo(data.next, data.previous, this.getUrls(data.results)))
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

  private getType(types: Array<any>) {
    console.log(types[0].type.name)
    return types[0].type.name;
  }

}
