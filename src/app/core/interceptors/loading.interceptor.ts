import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs/operators';



export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {

  const loadingService: LoadingService = inject(LoadingService);

  if (req.method === 'GET') {
    return next(req);
  }

  loadingService.show();


  return next(req).pipe(
    delay(300),
    finalize(
      () => loadingService.hide()
    )
  );
};
