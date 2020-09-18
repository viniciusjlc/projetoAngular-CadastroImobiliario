import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LoginComponent} from './components/login/login.component';
import {TableModule} from 'primeng/table';
import {UsuarioService} from './services/usuario/usuario.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UnidadeFederativaComponent} from './components/unidade-federativa/unidade-federativa.component';
import { TipoLogradouroComponent } from './components/tipo-logradouro/tipo-logradouro.component';
import { CadastroImobiliarioComponent } from './components/cadastro-imobiliario/cadastro-imobiliario.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    UnidadeFederativaComponent,
    TipoLogradouroComponent,
    CadastroImobiliarioComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    InputTextModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
