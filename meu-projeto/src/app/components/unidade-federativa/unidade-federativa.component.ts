import {Component, OnInit} from '@angular/core';
import {UnidadeFederativaService} from '../../services/unidadeFederativa/unidade-federativa.service';
import {UnidadeFederativa} from '../../models/unidadeFederativa';

@Component({
  selector: 'app-unidade-federativa',
  templateUrl: './unidade-federativa.component.html',
  styleUrls: ['./unidade-federativa.component.css']
})
export class UnidadeFederativaComponent implements OnInit {
  listaUnidadeFederativas: UnidadeFederativa[];

  constructor(private unidadeFederativaService: UnidadeFederativaService) {
  }

  async ngOnInit(): Promise<void> {
    this.listaUnidadeFederativas = await this.unidadeFederativaService.listar();
  }

}
