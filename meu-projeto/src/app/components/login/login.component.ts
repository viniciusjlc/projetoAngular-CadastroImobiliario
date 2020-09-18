import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() renderizarLogin: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
