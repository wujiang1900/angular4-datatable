import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './child-detail.routes';
import { ChildDetailComponent } from './child-detail.component';

<<<<<<< Updated upstream
=======
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {DataTableModule} from 'primeng/components/datatable/datatable';

>>>>>>> Stashed changes
console.log('`ChildDetail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    ChildDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
<<<<<<< Updated upstream
=======
    NgxDatatableModule, DataTableModule
>>>>>>> Stashed changes
  ],
})
export class ChildDetailModule {
  public static routes = routes;
}
