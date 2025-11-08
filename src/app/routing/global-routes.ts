import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../features/dashboard/dashboard-routes')
      .then(m => m.DASHBOARD_ROUTES),
  },
  {
    path: 'contact',
    loadChildren: ()=> import('../features/contact/contact-routes').then(m=>m.CONTACT_ROUTES)
  },
  {
    path: 'gallery',
    loadChildren: ()=> import('../features/gallery/gallery-routes').then(m=>m.GALLERY_ROUTES)
  },
  {
    path: '**',
    loadChildren: () => import('../features/dashboard/dashboard-routes')
      .then(c => c.DASHBOARD_ROUTES)
  }
];
