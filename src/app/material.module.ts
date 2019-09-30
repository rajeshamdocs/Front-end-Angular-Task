import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatSelectModule, MatPaginatorModule, MatAutocompleteModule, MatTableModule, MatToolbarModule, MatDialogModule, MatButtonModule, MatRadioModule } from "@angular/material";
import { FormsModule } from '@angular/forms';
@NgModule({
    exports: [ CommonModule, MatButtonModule, MatRadioModule, MatToolbarModule, FormsModule, MatDialogModule, MatFormFieldModule, MatSelectModule, MatPaginatorModule, MatAutocompleteModule, MatTableModule ]
})
export class MaterialModule { }