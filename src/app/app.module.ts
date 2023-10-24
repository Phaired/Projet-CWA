import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePickerComponent } from './components/datepicker/datepicker.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { ModalComponent } from './components/modal/modal.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ModifyTaskComponent } from './modify-task/modify-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        FooterComponent,
        NavbarComponent,
        DatePickerComponent,
        CreateTaskComponent,
        ModalComponent,
        ModifyTaskComponent,
        CardComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [DatePickerComponent],
})
export class AppModule {}
