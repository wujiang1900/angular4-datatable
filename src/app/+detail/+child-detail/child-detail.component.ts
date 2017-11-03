import {
  Component,
  OnInit,
} from '@angular/core';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`ChildDetail` component loaded asynchronously');

@Component({
  selector: 'child-detail',
  styleUrls: [
    '../../../assets/css/material.css'
  ],
  template: `
<<<<<<< Updated upstream
    <h1>Hello from Child Detail</h1>    
  `,
=======
    <div>
      <h3>
        Client-side Sorting
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/sorting/sorting-client.component.ts" target="_blank">
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columns]="columns"
        [sortType]="'multi'"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="50"
        [scrollbarV]="true">
      </ngx-datatable>
    </div>
  `
>>>>>>> Stashed changes
})
export class ChildDetailComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `ChildDetail` component');
  }

}
