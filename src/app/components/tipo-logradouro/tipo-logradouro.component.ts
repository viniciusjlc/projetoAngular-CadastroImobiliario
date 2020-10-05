import {Component, OnInit} from '@angular/core';
import {TipoLogradouro} from '../../models/tipoLogradouro';
import {TipoLogradouroService} from '../../services/tipoLogradouro/tipo-logradouro.service';

@Component({
  selector: 'app-tipo-logradouro',
  templateUrl: './tipo-logradouro.component.html',
  styleUrls: ['./tipo-logradouro.component.css']
})
export class TipoLogradouroComponent implements OnInit {
  listaTipoLogradouro: TipoLogradouro[];

  constructor(private tipoLogradouroService: TipoLogradouroService) {
  }

  async ngOnInit(): Promise<void> {
    this.listaTipoLogradouro = await this.tipoLogradouroService.listar();
  }
}
