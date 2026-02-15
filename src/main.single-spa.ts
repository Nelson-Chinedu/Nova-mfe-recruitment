import { enableProdMode, NgZone } from '@angular/core';

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

// if (environment.production) {
//   enableProdMode();
// }

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    // singleSpaPropsSubject.next(singleSpaProps);
    // return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
    return bootstrapApplication(App, {
      providers: [
        ...getSingleSpaExtraProviders(),
        ...appConfig.providers,
        { provide: 'singleSpaProps', useValue: singleSpaProps },
      ],
    });
  },
  template: '<app-root />',
  domElementGetter: () => {
    const sharedLayout = document.getElementById(
      'single-spa-application:@NovaOrg/nova-mfe-shared-layout',
    );
    if (sharedLayout) {
      const mainArea = sharedLayout.querySelector('main');
      if (mainArea) return mainArea as HTMLElement;
    }
    return document.getElementById('single-spa-layout-root') as HTMLElement;
  },
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
