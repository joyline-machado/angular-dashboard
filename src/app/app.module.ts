import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    NgxEchartsDirective,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angular-dashboard-b0325","appId":"1:836644170834:web:90f9edfa91716c0c7dc38b","databaseURL":"https://angular-dashboard-b0325-default-rtdb.firebaseio.com","storageBucket":"angular-dashboard-b0325.appspot.com","apiKey":"AIzaSyDigGQUcTBBgVfQ3K2x0UwtnZx5AxDwesA","authDomain":"angular-dashboard-b0325.firebaseapp.com","messagingSenderId":"836644170834","measurementId":"G-LRMSEJF65E"})),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    AngularFireModule.initializeApp({"projectId":"angular-dashboard-b0325","appId":"1:836644170834:web:90f9edfa91716c0c7dc38b","databaseURL":"https://angular-dashboard-b0325-default-rtdb.firebaseio.com","storageBucket":"angular-dashboard-b0325.appspot.com","apiKey":"AIzaSyDigGQUcTBBgVfQ3K2x0UwtnZx5AxDwesA","authDomain":"angular-dashboard-b0325.firebaseapp.com","messagingSenderId":"836644170834","measurementId":"G-LRMSEJF65E"}),
    ToastrModule.forRoot(), 
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
