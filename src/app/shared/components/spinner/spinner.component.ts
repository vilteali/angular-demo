import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerService } from '../../services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() visible!: boolean;
  textDefault = "Loading table..."
  
  constructor(private spinner: NgxSpinnerService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.isLoading$.subscribe(value => {
      this.spinner.show()
      this.visible = value;
    });
    this.changeText();
  }

  changeText() {
    this.spinnerService.changeText$.subscribe(text => {
      this.textDefault = text;
    }); 
  }
}