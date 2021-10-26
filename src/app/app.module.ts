import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { SolutionsSectionComponent } from './solutions-section/solutions-section.component';
import { SupportSectionComponent } from './support-section/support-section.component';
import { TrialSectionComponent } from './trial-section/trial-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    FeaturesSectionComponent,
    SolutionsSectionComponent,
    SupportSectionComponent,
    TrialSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
