import {RouterModule, Routes} from '@angular/router';
import {CadastroImobiliarioComponent} from './components/cadastro-imobiliario/cadastro-imobiliario.component';
import {TipoLogradouroComponent} from './components/tipo-logradouro/tipo-logradouro.component';
import {UnidadeFederativaComponent} from './components/unidade-federativa/unidade-federativa.component';
import {ModuleWithProviders} from '@angular/core';

const APP_ROUTES: Routes = [
  {path: 'unidadeFederativa', component: UnidadeFederativaComponent},
  {path: 'tipoLogradouro', component: TipoLogradouroComponent},
  {path: 'cadastroImobiliario', component: CadastroImobiliarioComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

