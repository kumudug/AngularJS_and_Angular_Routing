import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
    const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
    // bootstrap angular1
    (<any>ref.instance).upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
});