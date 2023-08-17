import { CommonModule } from '@angular/common';
 import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  selector: 'app-searchable-select',
  templateUrl: './searchable-select.component.html',
  styleUrls: ['./searchable-select.component.scss'],
})
export class SearchableSelectComponent  implements OnInit {

  // @Input() title = 'Search';
  // @Input() data: any[] = [];
  // @Input() multiple = false;
  // @Input() itemTextField = 'name';
  // @Output()  selectedChanged: EventEmitter<any> = new EventEmitter();

  // isOpen = false;
  // selected = [];
 

  // constructor() { }

   ngOnInit() {}

  // open() {
  //   this.isOpen = true;
  // }

  // cancel(){
  //   this.isOpen = false;
  // }

  // select(){
  //   this.isOpen = false;
  // }

  // itemSelected(){
  //   this.selected = this.data.filter((item) => item.selected);
  //   if (!this.multiple) {
  //     this.selectedChanged.emit(this.selected);
  //     this.isOpen = false;
  //   }
  // }

  // leaf = (obj) =>
  // this.itemTextField.split('.').reduce((value, el) => value[el], obj);

}
