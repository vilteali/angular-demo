import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  initialState: any;
  @Input() view!: boolean;

  constructor(private modalService: BsModalService) {  
    this.initialState = this.modalService.config.initialState;
   } 
 
  confirm(): void {
    this.initialState.action = true;
    this.modalService.hide();
  }
 
  decline(): void {
    this.modalService.hide();
  }

  ngOnInit(): void { }
}