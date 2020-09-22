import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {SessionService} from '../../services/session/session.service';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() renderizarLogin: boolean = false;
  usuarioLogin: Usuario = new Usuario('teste@teste.com', 'Vinicius', 'teste');
  mensagemErroLogin: string = null;
  renderizarCadastro: boolean;


  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
  }

  public async logar(): Promise<void> {
    if (this.usuarioLogin.email === '' || this.usuarioLogin.senha === '') {
      this.mensagemErroLogin = 'Email e Senha obrigatórios!';
    } else {
      const autenticado = await this.usuarioService.autenticar({
        email: this.usuarioLogin.email,
        senha: this.usuarioLogin.senha
      });
      if (autenticado) {
        this.renderizarLogin = false;
        const usuarioLogado = await this.usuarioService.consultarPorEmail({
          email: this.usuarioLogin.email,
          senha: this.usuarioLogin.senha
        });
        SessionService.instace.gravarUsuario(usuarioLogado);
      } else {
        this.mensagemErroLogin = 'Email ou Senha incorretos!';
      }
    }
  }

  abrirDialogCadatro(): void {
    this.renderizarCadastro = true;
  }

}
