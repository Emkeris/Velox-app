import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatSelectModule],
  exports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatSelectModule],
})
export class MaterialModule { }
