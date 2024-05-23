import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { categoriesRoutes } from './routes/categories-page/categories.routes';
import { productsRoutes } from './routes/products-page/products.routes';
import { buliltInPipesRoutes } from './routes/built-in-pipes-page/built-in-pipes.routes';

export const routes: Routes = [
  {
    path:"",
    component: HomePageComponent
  },

  ...categoriesRoutes,

  ...productsRoutes,

  ...buliltInPipesRoutes
];
