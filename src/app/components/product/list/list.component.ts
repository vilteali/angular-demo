import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/model/product';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild(ModalComponent) modal!: ModalComponent;
  products: Product[] = [];
  maxId!: number;

  constructor(private productService: ProductService, 
    private activatedRoute: ActivatedRoute, 
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.productService.requestGetProducts().subscribe(data => {
      this.products = this.sortTable(data);
      this.maxId = this.getHigherId();
    });
  }

  sortTable(products: Product[]) {
    return products.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }

  getHigherId() {
    return Math.max(...this.products.map(p => p.id));
  }

  deleteItem(id: number) {
    const initialState: Partial<any> = { 
      title: 'Delete item',
      message: 'Do you want to delete?',
      action: false
    }
    this.modalService.show(ModalComponent, {class: 'modal-sm', initialState}).onHide?.subscribe((modal: any) => {
     if(modal.initialState && modal.initialState.action) {
      this.productService.requestDeleteProductById(id).subscribe(() => {
        this.loadTable();
      });
     };
      
    });
  }

}