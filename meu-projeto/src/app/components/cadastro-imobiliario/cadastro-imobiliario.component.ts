import {Component, Input, OnInit} from '@angular/core';
import {CadastroImobiliarioService} from '../../services/cadastroImobiliario/cadastro-imobiliario.service';
import {CadastroImobiliario} from '../../models/cadastroImobiliario';
import {TipoLogradouro} from '../../models/tipoLogradouro';
import {UnidadeFederativa} from '../../models/unidadeFederativa';
import {UnidadeFederativaService} from '../../services/unidadeFederativa/unidade-federativa.service';
import {TipoLogradouroService} from '../../services/tipoLogradouro/tipo-logradouro.service';
import {SessionService} from '../../services/session/session.service';
import {Usuario} from '../../models/usuario';
import {ConfirmationService, Message} from 'primeng/api';

@Component({
  selector: 'app-cadastro-imobiliario',
  templateUrl: './cadastro-imobiliario.component.html',
  styleUrls: ['./cadastro-imobiliario.component.css'],
  providers: [ConfirmationService]
})
export class CadastroImobiliarioComponent implements OnInit {

  @Input() idUsuarioAtual: number;
  listaCadastrosImobiliario: CadastroImobiliario[];
  listaCadastrosImobiliarioSelecionados: CadastroImobiliario[];
  renderizarCadastrar: boolean;
  mensagemDeErroCadastrar: string = null;
  mensagemDeErroEditar: string = null;
  unidadeFederativaSelecionada: UnidadeFederativa = new UnidadeFederativa('', '', 0);
  tipoLogradouroSelecionada: TipoLogradouro = new TipoLogradouro('', 0);
  cadastroImobiliario: CadastroImobiliario = new CadastroImobiliario('', '', '', '',
    '', '', this.tipoLogradouroSelecionada, this.unidadeFederativaSelecionada);
  listaUnidadeFederativas: UnidadeFederativa[];
  listaTipoLogradouro: TipoLogradouro[];
  tituloDlgCadastrarEditar: string = 'Cadastro Imobiliário';
  mensagens: Message[] = [];


  constructor(private cadastroImobiliarioService: CadastroImobiliarioService,
              private unidadeFederativaService: UnidadeFederativaService,
              private tipoLogradouroService: TipoLogradouroService,
              private confirmationService: ConfirmationService) {
  }

  private iniciarCadastroDados(): void {
    this.unidadeFederativaSelecionada = new UnidadeFederativa('', '', 0);
    this.tipoLogradouroSelecionada = new TipoLogradouro('', 0);
    this.cadastroImobiliario = new CadastroImobiliario('', '', '', '',
      '', '', this.tipoLogradouroSelecionada, this.unidadeFederativaSelecionada);
  }

  async ngOnInit(): Promise<void> {
    this.listaTipoLogradouro = await this.tipoLogradouroService.listar();
    this.listaUnidadeFederativas = await this.unidadeFederativaService.listar();
    await this.listarCadastrosPorUsuarioAtual();
  }

  private async listarCadastrosPorUsuarioAtual(): Promise<void> {
    this.listaCadastrosImobiliario = await this.cadastroImobiliarioService.consultarImobiliarioPorUsuario(this.idUsuarioAtual);
  }

  abrirDialogCadastro(): void {
    this.iniciarCadastroDados();
    this.renderizarCadastrar = true;
  }

  abrirDialogEditar(cadastroImobiliario): void {
    this.renderizarCadastrar = true;
    this.cadastroImobiliario = cadastroImobiliario;
    this.tipoLogradouroSelecionada = cadastroImobiliario.tipoLogradouro;
    this.unidadeFederativaSelecionada = cadastroImobiliario.unidadeFederativa;
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
      this.renderizarCadastrar = false;
    } else {
      this.mensagemDeErroCadastrar = 'Todos os valores devem ser preenchidos!';
    }
  }

  deletarCadastrosSelecionados(): void {
    console.log(this.listaCadastrosImobiliarioSelecionados);
  }

  deletarCadastroImobiliario(cadastroImobiliario): void {
    this.cadastroImobiliarioService.excluir(cadastroImobiliario.id);
    this.listarCadastrosPorUsuarioAtual();
  }

  private verificarSeValoresDoCadastroPreenchidos(cadImobiliario): boolean {
    return !(cadImobiliario.cep === '' || cadImobiliario.endereco === '' || cadImobiliario.complemento === ''
      || cadImobiliario.numero === '' || cadImobiliario.bairro === '' || cadImobiliario.cidade === ''
      || this.tipoLogradouroSelecionada.id === 0 || this.unidadeFederativaSelecionada.id === 0);
  }


  confirmarExcluir(cadImobiliario): void {
    this.confirmationService.confirm({
      message: 'Deseja excluir o cadastro cep ' + cadImobiliario.cep + '?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deletarCadastroImobiliario(cadImobiliario);
        this.mensagens = [{severity: 'info', summary: 'Confirmado', detail: 'Cadastro excluido com sucesso'}];
      },
      reject: () => {
        this.mensagens = [{severity: 'info', summary: 'Cancelado', detail: 'Você cancelou a exclusão'}];
      }
    });
  }
}
