import { Component } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { GenericPopupComponent } from '../../../shared/generic-popup/generic-popup.component';
import { CategoriesService } from '../../../features/categories/services/categories.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LayoutComponent } from "../../../shared/layout/layout.component";

@Component({
  selector: 'app-dirty-guard-page',
  standalone: true,
  templateUrl: './dirty-guard-page.component.html',
  styleUrl: './dirty-guard-page.component.scss',
  imports: [LayoutComponent, ReactiveFormsModule]
})
export class DirtyGuardPageComponent {
  categoryFormGroup!: FormGroup;
  constructor(
    private categoryService: CategoriesService,
    private formBuilder: FormBuilder,
    private router: Router,
    public popup: MatDialog
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  private createForm(): void {
    this.categoryFormGroup = this.formBuilder.group({
      name: [""],
      description: [""]
    })
  }

  addedForm() {

  }

  get isDirty(): boolean {

    return this.categoryFormGroup.dirty;
  }

  showPopup(nextState: RouterStateSnapshot) {
    console.log(nextState);

    const popupRef = this.popup.open(GenericPopupComponent, {
      data: {
        baslik: "Uyarı",
        message: "Bazı değişiklikler kaydedilmedi.Kaydetmeden devam etmek istediğinize emin misiniz?"
      }
    });

    popupRef.componentInstance.confirm.subscribe((res) => {
      if (res) {
        // this.router.navigate(["/categories"])
        window.location.href = nextState.url
      }
      this.popup.closeAll()
    })

  }
}
