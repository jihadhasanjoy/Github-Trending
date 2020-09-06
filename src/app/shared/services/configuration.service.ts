import { Injectable } from '@angular/core';
import { IConfiguration } from './../models/configuration.model';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    serverSettings: IConfiguration;
    private settingsLoadedSource = new Subject();
    settingsLoaded$ = this.settingsLoadedSource.asObservable();
    isReady  = false;

    constructor( ) { }

    load(): void {
        // For best practise, we haveto load this configuration from server
        if (environment.production) {
            this.serverSettings = {
                identityUrl: 'https://api.github.com/'
            };
        } else {
            this.serverSettings = {
                identityUrl: 'https://api.github.com/'
            };
        }

        this.isReady = true;
        this.settingsLoadedSource.next();
    }
}
