import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'config',
      component: ConfigComponent
    },
     {
       path: 'flights',
      loadChildren: () => loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Module'
         })
         .then(m => m.FlightsModule)
     },
     {
      matcher: startsWith('angular2'),
    component: WebComponentWrapper,
     data: {
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
       remoteName: 'angular2',
       exposedModule: './web-components',
      elementName: 'angular2-element'
   }  as WebComponentWrapperOptions
   },
];
