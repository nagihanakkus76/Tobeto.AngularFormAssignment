import { Routes } from "@angular/router";
import { DirtyGuardPageComponent } from "./dirty-guard-page/dirty-guard-page.component";
import { dirtyGuard } from "../../shared/guards/dirty.guard";

export const dirtyGuardRoutes: Routes = [
  {
    path: "dirtyguard",
    component: DirtyGuardPageComponent,
    canDeactivate: [dirtyGuard]
  }
]
