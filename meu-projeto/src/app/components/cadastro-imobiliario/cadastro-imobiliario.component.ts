import {Component, Input, OnInit} from '@angular/core';
import {CadastroImobiliarioService} from '../../services/cadastroImobiliario/cadastro-imobiliario.service';
import {CadastroImobiliario} from '../../models/cadastroImobiliario';
import {TipoLogradouro} from '../../models/tipoLogradouro';
import {UnidadeFederativa} from '../../models/unidadeFederativa';
import {UnidadeFederativaService} from '../../services/unidadeFederativa/unidade-federativa.service';
import {TipoLogradouroService} from '../../services/tipoLogradouro/tipo-logradouro.service';
import {SessionService} from '../../services/session/session.service';
import {Usuario} from '../../models/usuario';

@Component({
  selector: 'app-cadastro-imobiliario',
  templateUrl: './cadastro-imobiliario.component.html',
  styleUrls: ['./cadastro-imobiliario.component.css']
})
export class CadastroImobiliarioComponent implements OnInit {

  @Input() idUsuarioAtual: number;
  listaCadastrosImobiliario: CadastroImobiliario[];
  listaCadastrosImobiliarioSelecionados: CadastroImobiliario[];
  renderizarCadastrar: boolean;
  renderizarEditar: boolean;
  mensagemDeErroCadastrar: string = null;
  mensagemDeErroEditar: string = null;
  cadastroImobiliario: CadastroImobiliario = new CadastroImobiliario('', '', '', '',
    '', '', new TipoLogradouro('', 0), new UnidadeFederativa('', '', 0));
  listaUnidadeFederativas: UnidadeFederativa[];
  listaTipoLogradouro: TipoLogradouro[];
  unidadeFederativaSelecionada: UnidadeFederativa = new UnidadeFederativa('', '', 0);
  tipoLogradouroSelecionada: TipoLogradouro = new TipoLogradouro('', 0);


  constructor(private cadastroImobiliarioService: CadastroImobiliarioService,
              private unidadeFederativaService: UnidadeFederativaService,
              private tipoLogradouroService: TipoLogradouroService) {
  }

  async ngOnInit(): Promise<void> {
    this.listaTipoLogradouro = await this.tipoLogradouroService.listar();
    this.listaUnidadeFederativas = await this.unidadeFederativaService.listar();
    await this.listarCadastrosPorUsuarioAtual();
  }

  private async listarCadastrosPorUsuarioAtual() {
    this.listaCadastrosImobiliario = await this.cadastroImobiliarioService.consultarImobiliarioPorUsuario(this.idUsuarioAtual);
  }

  abrirDialogCadastro(): void {
    this.renderizarCadastrar = true;
  }

  abrirDialogEditar(cadastroImobiliario): void {
    /*this.renderizarEditar = true;*/
    console.log(cadastroImobiliario);
  }

  salvarCadastroImobiliario(): void {
    if (this.verificarSeValoresDoCadastroPreenchidos(this.cadastroImobiliario)) {
      this.cadastroImobiliario.tipoLogradouro = this.tipoLogradouroSelecionada;
      this.cadastroImobiliario.unidadeFederativa = this.unidadeFederativaSelecionada;
      this.cadastroImobiliario.usuario = new Usuario('', '', '', this.idUsuarioAtual);
      console.log(this.cadastroImobiliario);
      this.cadastroImobiliarioService.cadastrar(this.cadastroImobiliario);
      this.listarCadastrosPorUsuarioAtual();
      this.mensagemDeErroCadastrar = null;
    } else {
      this.mensagemDeErroCadastrar = 'Todos os valores devem ser preenchidos!';
    }
  }

  editarCadastroImobiliario(): void {
    if (this.verificarSeValoresDoCadastroPreenchidos(this.cadastroImobiliario)) {

      console.log(this.cadastroImobiliario);
    }
  }

  deletarCadastrosSelecionados(): void {

  }

  deletarCadastroImobiliario(cadastroImobiliario): void {
    console.log(cadastroImobiliario);
  }

  private verificarSeValoresDoCadastroPreenchidos(cadImobiliario): boolean {
    return !(cadImobiliario.cep === '' || cadImobiliario.endereco === '' || cadImobiliario.complemento === ''
      || cadImobiliario.numero === '' || cadImobiliario.bairro === '' || cadImobiliario.cidade === ''
      || this.tipoLogradouroSelecionada.id === 0 || this.unidadeFederativaSelecionada.id === 0);
  }
}
