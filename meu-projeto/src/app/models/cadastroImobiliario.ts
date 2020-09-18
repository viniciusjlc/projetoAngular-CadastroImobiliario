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


 /* get cep(): string {
    return this._cep;
  }

  set cep(value: string) {
    if (value == null) {
      this._cep = null;
    }
    let cepMask = '';
    const max: number = value.length;
    for (let i = 0; i < max; i++) {
      if (i === 4) {
        cepMask += '-';
      }
      cepMask += value[i];
    }
    console.log();
    this._cep = cepMask;
  }*/
}
