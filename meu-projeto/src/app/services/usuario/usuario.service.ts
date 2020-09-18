import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Token} from '../../models/token';
import {JwtService} from '../jwt/jwt.service';
import {Usuario} from '../../models/usuario';
import {TipoLogradouro} from '../../models/tipoLogradouro';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly urlAutenticar = '/autenticar';
  private readonly urlConsultarPorEmail = '/usuario/consultarPorEmail';
  private readonly urlCadastrarUsuario = '/usuario/salvar';

  constructor(private http: HttpClient) {
  }

  public async autenticar(usuario): Promise<boolean> {
    let erro: string = null;
    const retorno = await this.http.post<Token>(JwtService.instace.urlAPI + this.urlAutenticar, usuario);
    await retorno.toPromise().then(value => JwtService.instace.gerarHeader(value.token))
      .catch(reason => erro = reason.error.erro.toString());
    if (erro != null) {
      console.log(erro);
    }
    return erro == null;
  }

  public async cadastrar(usuario): Promise<boolean> {
    const retorno = await this.http.post<Usuario>(JwtService.instace.urlAPI + this.urlCadastrarUsuario, usuario);
    let retornoAutenticao: boolean;
    retornoAutenticao = await retorno.toPromise().then(value => this.autenticar({email: usuario.email, senha: usuario.senha}));
    return retornoAutenticao;
  }

  public async consultarPorEmail(usuario): Promise<Usuario> {
    const headers = JwtService.instace.header;
    return this.http.post<Usuario>(JwtService.instace.urlAPI + this.urlConsultarPorEmail, usuario, {headers}).toPromise();
  }
}

