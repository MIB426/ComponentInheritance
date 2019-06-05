import { Component, OnInit, Input } from '@angular/core';
import { SimplePaginationComponent } from './simple-pagination.component';
@Component({
  selector: 'app-child-pagination',
  template: `
  <h2>{{ title }}</h2>
  <a (click)="previousPage()" [class.disabled]="!hasPrevious()"
    href="javascript:void(0)">
    {{ previousText }}
  </a>
  <span>{{ page }} / {{ pageCount }}</span>
  <a (click)="nextPage()" [class.disabled]="!hasNext()"
    href="javascript:void(0)" >
    {{ nextText }}
  </a>
`
})
export class ChildPaginationComponent extends SimplePaginationComponent {
  @Input()
  title: string;

  @Input()
  previousText = '<<';

  @Input()
  nextText = '>>';


}
