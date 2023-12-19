import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { ModalComponent } from './components/modal/modal.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { ModifyTaskComponent } from './pages/modify-task/modify-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './components/filter/filter.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DeleteTaskComponent } from './pages/delete-task/delete-task.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        NavbarComponent,
        CreateTaskComponent,
        ModalComponent,
        ModifyTaskComponent,
        CardComponent,
        ListComponent,
        FilterComponent,
        DetailComponent,
        DetailComponent,
        DeleteTaskComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [],
})
export class AppModule {}
