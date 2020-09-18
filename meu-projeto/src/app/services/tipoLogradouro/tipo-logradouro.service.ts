import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtService} from '../jwt/jwt.service';
import {TipoLogradouro} from '../../models/tipoLogradouro';

@Injectable({
  providedIn: 'root'
})
export class TipoLogradouroService {
  private readonly urlListarTipoLogradouro = '/cadastroImobiliario/tipoLogradouro/listar';

  constructor(private http: HttpClient) {
  }

  public async listar(): Promise<TipoLogradouro[]> {
    const headers = JwtService.instace.header;
    return this.http.get<TipoLogradouro[]>(JwtService.instace.urlAPI + this.urlListarTipoLogradouro, {headers}).toPromise();
  }
}
