import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TwoTabsComponent } from './two-tabs/two-tabs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgmCoreModule } from '@agm/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatedLocationsComponent } from './paginated-locations/paginated-locations.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { AddLocationFormComponent } from './add-location-form/add-location-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const ROUTES: Routes = <Routes>[
  {path: '', component: MapComponent},
  {path: 'tabs', component: TwoTabsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TwoTabsComponent,
    PageNotFoundComponent,
    PaginatedLocationsComponent,
    AddLocationFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCgmOsuwqid78kVPubYZMG4vfnjnAU_Hno', libraries: ['drawing', 'geometry']}),
    NoopAnimationsModule,
    MatTabsModule,
    MatPaginatorModule,
    MatGridListModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
