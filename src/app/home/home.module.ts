import { SignUpService } from './signup/signup.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
    declarations: [ SignInComponent, SignUpComponent, HomeComponent ],
    imports: [ CommonModule, ReactiveFormsModule, VMessageModule, RouterModule, FormsModule, HomeRoutingModule ],
    providers: [SignUpService]
})
export class HomeModule { }
