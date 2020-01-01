/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { CloudloadingService } from './services/cloudloading.service';
import { DictionaryService } from './services/dictionary.service';
import { FamilysharingService } from './services/familysharing.service';
import { MyconfigService } from './services/myconfig.service';
import { MylibraryService } from './services/mylibrary.service';
import { NotificationService } from './services/notification.service';
import { OnboardingService } from './services/onboarding.service';
import { PersonalizedstreamService } from './services/personalizedstream.service';
import { PromoofferService } from './services/promooffer.service';
import { SeriesService } from './services/series.service';
import { BookshelvesService } from './services/bookshelves.service';
import { VolumesService } from './services/volumes.service';
import { LayersService } from './services/layers.service';
import { VolumeAdapter, VolumesAdapter } from './adapters/index';

const ADAPTERS = [ VolumeAdapter, VolumesAdapter ];

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    CloudloadingService,
    DictionaryService,
    FamilysharingService,
    MyconfigService,
    MylibraryService,
    NotificationService,
    OnboardingService,
    PersonalizedstreamService,
    PromoofferService,
    SeriesService,
    BookshelvesService,
    VolumesService,
    LayersService,
    ...ADAPTERS
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
