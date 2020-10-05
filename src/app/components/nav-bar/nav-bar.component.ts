import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Usuario} from 'src/app/models/usuario';
import {UsuarioService} from '../../services/usuario/usuario.service';
import {PrimeNGConfig} from 'primeng/api';
import {SessionService} from '../../services/session/session.service';
import {routing} from '../../app.routing';
import {JwtService} from '../../services/jwt/jwt.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navegacao',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private modalService: BsModalService,
              private usuarioService: UsuarioService,
              private sessionService: SessionService) {
  }

  abaAtual: string = 'home';
  isLogado: boolean = false;
  usuarioLogin: Usuario = new Usuario('teste@teste.com', 'Vinicius', 'teste');
  mensagemErroLogin: string = null;
  usuarioCadastro: Usuario = new Usuario('', '', '');
  confirmacaoSenha: string = '';
  mensagemErroCadastro: string = null;
  renderizarLogin: boolean = false;
  renderizarCadastro: boolean = false;


  async ngOnInit(): Promise<void> {
    /*console.log('Ao retornar: ' + localStorage.getItem('emailUserSession'));
    console.log('Ao retornar token: ' + localStorage.getItem('token'));
    if (localStorage.getItem('emailUserSession').toString() !== 'undefined') {
      JwtService.instace.gerarHeader(localStorage.getItem('token'));
      const userSession = await this.usuarioService.consultarPorEmail({
        email: localStorage.getItem('emailUserSession'), senha: null
      });
      this.sessionService.gravarUsuario(userSession);
    }*/
  }

  abrirDialogLogin(): void {
    this.mensagemErroLogin = null;
    this.renderizarLogin = true;
  }

  abrirDialogCadatro(): void {
    this.mensagemErroCadastro = null;
    this.renderizarCadastro = true;
  }

  public async logar(): Promise<void> {
    if (this.usuarioLogin.email === '' || this.usuarioLogin.senha === '') {
      this.mensagemErroLogin = 'Email e Senha obrigatórios!';
    } else {
      this.isLogado = await this.usuarioService.autenticar({
        email: this.usuarioLogin.email,
        senha: this.usuarioLogin.senha
      });
      if (this.isLogado) {
        this.renderizarLogin = false;
        this.usuarioLogin = await this.usuarioService.consultarPorEmail({
          email: this.usuarioLogin.email,
          senha: this.usuarioLogin.senha
        });
        SessionService.instace.gravarUsuario(this.usuarioLogin);
      } else {
        this.mensagemErroLogin = 'Email ou Senha incorretos!';
      }
    }
  }

  public async cadastrarUsuario(): Promise<void> {
    if (this.usuarioCadastro.email === ''
      || this.usuarioCadastro.senha === ''
      || this.usuarioCadastro.nome === ''
      || this.confirmacaoSenha === '') {
      this.mensagemErroCadastro = 'Todos os campos são obrigatórios!';
    } else if (this.usuarioCadastro.senha !== this.confirmacaoSenha) {
      this.mensagemErroCadastro = 'Senha e confimação devem ser iguais!';
    } else {
      const retorno: boolean = await this.usuarioService.cadastrar(this.usuarioCadastro);
      if (retorno) {
        this.renderizarLogin = false;
        this.renderizarCadastro = false;
      } else {
        this.mensagemErroCadastro = 'Erro ao realizar o cadastro! Entre em contato com o administrador do sistema';
      }
    }
  }

}
