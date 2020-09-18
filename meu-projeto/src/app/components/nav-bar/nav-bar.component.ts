import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Usuario} from 'src/app/models/usuario';
import {UsuarioService} from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  abaAtual: string = 'home';
  isLogado: boolean = false;
  modalRef: BsModalRef;
  usuarioLogin: Usuario = new Usuario('teste@teste.com', 'Vinicius', 'teste');
  mensagemErroLogin: string = null;
  usuarioCadastro: Usuario = new Usuario('', '', '');
  confirmacaoSenha: string = '';
  mensagemErroCadastro: string = null;

  constructor(private modalService: BsModalService,
              private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public async logar(): Promise<void> {
    // tslint:disable-next-line:triple-equals
    if (this.usuarioLogin.email === '' || this.usuarioLogin.senha === '') {
      this.mensagemErroLogin = 'Email e Senha obrigatórios!';
    } else {
      this.isLogado = await this.usuarioService.autenticar({
        email: this.usuarioLogin.email,
        senha: this.usuarioLogin.senha
      });
      if (this.isLogado) {
        this.isLogado = true;
        this.modalService.hide();
        this.usuarioLogin = await this.usuarioService.consultarPorEmail({
          email: this.usuarioLogin.email,
          senha: this.usuarioLogin.senha
        });
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
        this.modalRef.hide();
      } else {
        this.mensagemErroCadastro = 'Erro ao realizar o cadastro! Entre em contato com o administrador do sistema';
      }
    }
  }
}
