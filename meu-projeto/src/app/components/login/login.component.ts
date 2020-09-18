import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: BsModalService) {
  }
  @ViewChild('teste') content: any;
  modalRef: BsModalRef;

  private modalConfig: ModalOptions = {
    backdrop: 'static',
    keyboard: true,
    class: 'modal-md',
  };

  ngOnInit(): void {
  }

  show(): void {
    this.modalRef = this.modalService.show(this.content, this.modalConfig);
  }

  hide(): void {
    this.modalRef.hide();
  }

}
