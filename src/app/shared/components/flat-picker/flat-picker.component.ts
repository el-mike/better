import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  FlatPickerItem,
} from './flat-picker-item.model';

@Component({
  selector: 'app-flat-picker',
  templateUrl: './flat-picker.component.html',
  styleUrls: ['./flat-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlatPickerComponent {
  /**
   * As there is no way to communicate a type wanted by parent,
   * "selected" property needs to be typed as any.
   */
  @Input() public selected: any;
  @Input() public items: FlatPickerItem[] = [];

  @Output() public selectItem = new EventEmitter<any>();

  public onSelectItem(item: FlatPickerItem) {
    this.selectItem.emit(item.value);
  }

  public trackByFn(item: FlatPickerItem) {
    return item.value;
  }
}
