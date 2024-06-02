import { CUSTOM_ELEMENTS_SCHEMA, Component, Injectable, OnInit, Output } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-overlay.component.html',
  styleUrl: './loading-overlay.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoadingOverlayComponent implements OnInit {
  isLoading: Observable<Boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading = loadingService.loading$
  }

  ngOnInit(): void {
  }
  // onSubmit(){
  //   this.loading$=false;
  // }
}
