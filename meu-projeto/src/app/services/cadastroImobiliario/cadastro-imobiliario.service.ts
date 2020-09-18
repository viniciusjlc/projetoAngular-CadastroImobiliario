import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtService} from '../jwt/jwt.service';
import {CadastroImobiliario} from '../../models/cadastroImobiliario';

@Injectable({
  providedIn: 'root'
})
export class CadastroImobiliarioService {
  private readonly urlCadastroImobiliario = '/cadastroImobiliario';
  private readonly urlConsultarCadastroImobiliarioPorId = this.urlCadastroImobiliario + '/';
  private readonly urlConsultarCadastroImobiliarioPorUsuario = this.urlCadastroImobiliario + '/listar/';
  private readonly urlListarCadastroImobiliario = this.urlCadastroImobiliario + '/listar';
  private readonly urlSalvarCadastroImobiliario = this.urlCadastroImobiliario + '/salvar';
  private readonly urlAlterarCadastroImobiliario = this.urlCadastroImobiliario + '/alterar';
  private readonly urlExcluirCadastroImobiliario = this.urlCadastroImobiliario + '/';

  constructor(private http: HttpClient) {
  }

  public async listar(): Promise<CadastroImobiliario[]> {
    const headers = JwtService.instace.header;
    return this.http.get<CadastroImobiliario[]>(JwtService.instace.urlAPI + this.urlListarCadastroImobiliario, {headers}).toPromise();
  }

  public async consultarImobiliarioPorId(id): Promise<CadastroImobiliario[]> {
    const headers = JwtService.instace.header;
    return this.http.get<CadastroImobiliario[]>(JwtService.instace.urlAPI + this.urlConsultarCadastroImobiliarioPorId + id,
      {headers}).toPromise();
  }

  public async consultarImobiliarioPorUsuario(idUsuario): Promise<CadastroImobiliario[]> {
    const headers = JwtService.instace.header;
    return this.http.get<CadastroImobiliario[]>(JwtService.instace.urlAPI + this.urlConsultarCadastroImobiliarioPorUsuario + idUsuario,
      {headers}).toPromise();
  }

  public async cadastrar(cadastroImobiliario): Promise<CadastroImobiliario> {
    const headers = JwtService.instace.header;
    return await this.http.post<CadastroImobiliario>(JwtService.instace.urlAPI + this.urlSalvarCadastroImobiliario,
      cadastroImobiliario, {headers}).toPromise();
  }

  public async alterar(cadastroImobiliario): Promise<CadastroImobiliario> {
    const headers = JwtService.instace.header;
    return await this.http.post<CadastroImobiliario>(JwtService.instace.urlAPI + this.urlAlterarCadastroImobiliario,
      cadastroImobiliario, {headers}).toPromise();
  }

  public async excluir(idCadastroImobiliario): Promise<void> {
    const headers = JwtService.instace.header;
    await this.http.delete<CadastroImobiliario>(JwtService.instace.urlAPI + this.urlExcluirCadastroImobiliario + idCadastroImobiliario,
      {headers}).toPromise();
  }

}
