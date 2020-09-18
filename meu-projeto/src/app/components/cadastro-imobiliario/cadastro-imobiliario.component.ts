import {Component, Input, OnInit} from '@angular/core';
import {CadastroImobiliarioService} from '../../services/cadastroImobiliario/cadastro-imobiliario.service';
import {CadastroImobiliario} from '../../models/cadastroImobiliario';

@Component({
  selector: 'app-cadastro-imobiliario',
  templateUrl: './cadastro-imobiliario.component.html',
  styleUrls: ['./cadastro-imobiliario.component.css']
})
export class CadastroImobiliarioComponent implements OnInit {

  @Input() idUsuarioAtual: number;
  listaCadastrosImobiliario: CadastroImobiliario[];
  listaCadastrosImobiliarioSelecionados: CadastroImobiliario[];

  constructor(private cadastroImobiliarioService: CadastroImobiliarioService) {
  }

  async ngOnInit(): Promise<void> {
    this.listaCadastrosImobiliario = await this.cadastroImobiliarioService.consultarImobiliarioPorUsuario(this.idUsuarioAtual);
  }

  openNew(): void {

  }

  deleteSelectedProducts(): void {

  }

  editProduct(cadastroImobiliario): void {

  }

  deleteProduct(cadastroImobiliario): void {

  }
}
