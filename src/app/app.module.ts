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
import {TipoLogradouroComponent} from './components/tipo-logradouro/tipo-logradouro.component';
import {CadastroImobiliarioComponent} from './components/cadastro-imobiliario/cadastro-imobiliario.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {MenuItemContent} from 'primeng/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CadastroUsuarioComponent} from './components/cadastro-usuario/cadastro-usuario.component';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {routing} from './app.routing';
import {HomeComponent} from './components/home/home.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {NgxMaskModule, IConfig} from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    UnidadeFederativaComponent,
    TipoLogradouroComponent,
    CadastroImobiliarioComponent,
    CadastroUsuarioComponent,
    HomeComponent
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
    InputTextModule,
    DialogModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputMaskModule,
    DropdownModule,
    InputTextareaModule,
    ConfirmDialogModule,
    MessagesModule,
    NgxMaskModule.forRoot(maskConfig),
    routing
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
