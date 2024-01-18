import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Additives, MenuItem, SizeAddition } from 'app/models/menuItem.model';

type AddiMap = { index: number, addi: Additives }

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent {

  @Input() item: MenuItem | undefined;
  @Output() closeModal = new EventEmitter()

  sizeOptions: (SizeAddition | undefined)[] = [];
  addiOptions: AddiMap[] = []

  selectedSize: SizeAddition | undefined
  selectedAddi: AddiMap[] = []

  totalPrice = 0;


  ngOnChanges() {
    if (this.item) {
      this.sizeOptions = [this.item?.sizes.s, this.item?.sizes.m, this.item?.sizes.l];
      this.addiOptions = this.item?.additives.map((x, index) => ({ index, addi: x }));
      this.selectedSize = this.sizeOptions[0];
      this.selectedAddi = [];
      this.totalPrice = Number(this.item.price)
    }
  }


  close(event: Event) {
    if ((event.target as HTMLElement).classList.contains('overlay'))
      this.closeModal.emit()
  }

  switchSizeContent(value: SizeAddition | undefined) {
    if (value) {
      this.selectedSize = value
    }
    this.countPrice();

  }
  switchAddiContent(value: AddiMap | undefined) {
    if (!value) return
    if (this.isAddiChecked(value)) {
      this.selectedAddi = this.selectedAddi.filter(x => x.index !== value.index)
    } else this.selectedAddi?.push(value)
    this.countPrice();
  }

  countPrice() {
    const addiTotal = this.selectedAddi?.reduce((acc, x) => acc + Number(x.addi['add-price']), 0)
    this.totalPrice = Number(this.item?.price) + addiTotal + Number(this.selectedSize?.['add-price'])

  }
  isAddiChecked(value: AddiMap) {
    return this.selectedAddi?.find(v => v.index === value.index)
  }

}
