import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './child-barrel.routes';
import { ChildBarrelComponent } from './child-barrel.component';

import {SharedModule, SliderModule, DropdownModule, MultiSelectModule} from 'primeng/primeng'; //

import {DataTableModule} from 'primeng/components/datatable/datatable';

console.log('`ChildBarrel` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    ChildBarrelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes), 
    DataTableModule,
    SharedModule,
    SliderModule, DropdownModule, MultiSelectModule
  ],
})
export class ChildBarrelModule {
  public static routes = routes;
}
