import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";

const material = [MatToolbarModule, MatIconModule, MatTabsModule, MatButtonModule, MatMenuModule, MatGridListModule, MatDividerModule, MatProgressBarModule, MatSelectModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatDialogModule];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [material],
})
export class MaterialModule { }
