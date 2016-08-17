import { NgModule,
         ModuleWithProviders }      from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
// import { AwesomePipe }              from './awesome.pipe';
// import { HighlightDirective }       from './highlight.directive';
// import { TitleComponent }           from './title.component';
import { ApiService }               from '../core/api-service/app-api-service';
import { PAGINATION_DIRECTIVES }    from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PAGINATION_DIRECTIVES ],
  exports:      [ PAGINATION_DIRECTIVES,
                  CommonModule, FormsModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ApiService ]
    };
  }
}
