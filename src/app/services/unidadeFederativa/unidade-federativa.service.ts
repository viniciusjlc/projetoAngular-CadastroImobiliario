import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtService} from '../jwt/jwt.service';
import {UnidadeFederativa} from '../../models/unidadeFederativa';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {
  private readonly urlListarUnidadeFederativa = '/cadastroImobiliario/unidadeFederativa/listar';

  constructor(private http: HttpClient) {
  }

  public async listar(): Promise<UnidadeFederativa[]> {
    const headers = JwtService.instace.header;
    return this.http.get<UnidadeFederativa[]>(JwtService.instace.urlAPI + this.urlListarUnidadeFederativa, {headers}).toPromise();
  }
}
