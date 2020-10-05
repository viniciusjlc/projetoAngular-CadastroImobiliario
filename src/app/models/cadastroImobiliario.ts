import {UnidadeFederativa} from './unidadeFederativa';
import {Usuario} from './usuario';
import {TipoLogradouro} from './tipoLogradouro';

export class CadastroImobiliario {

  constructor(
    public cep: string,
    public endereco: string,
    public complemento: string,
    public numero: string,
    public bairro: string,
    public cidade: string,
    public tipoLogradouro: TipoLogradouro,
    public unidadeFederativa: UnidadeFederativa,
    public usuario?: Usuario,
    public id?: number) {
  }

}
