import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  @Input() renderizarCadastro: boolean = false;
  mensagemErroCadastro: string = null;
  usuarioCadastro: Usuario = new Usuario('', '', '');
  confirmacaoSenha: string = '';

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
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
        this.renderizarCadastro = false;
      } else {
        this.mensagemErroCadastro = 'Erro ao realizar o cadastro! Entre em contato com o administrador do sistema';
      }
    }
  }

}
