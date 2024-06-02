
import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { DirtyGuardPageComponent } from '../../routes/dirty-guard/dirty-guard-page/dirty-guard-page.component';

export const dirtyGuard: CanDeactivateFn<DirtyGuardPageComponent> = (component: DirtyGuardPageComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {

  if (component.isDirty) {
    component.showPopup(nextState)
    return false;
  }

  return true;
}




