import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxRequestComponent } from './ngx-request.component';


@NgModule({
  declarations: [
    NgxRequestComponent
  ],
  imports: [
  ],
  exports: [
    NgxRequestComponent
  ]
})
export class NgxRequestModule {
  public static forRoot(): ModuleWithProviders<NgxRequestModule> {
    return {
      ngModule: NgxRequestModule,
      providers: [

      ]
    };
  }
}
