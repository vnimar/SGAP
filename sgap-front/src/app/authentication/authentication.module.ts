import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserListComponent } from './user-list/user-list.component';
import { AuthenticationRoutingModule } from "./authentication-routing.module";

@NgModule({
  declarations: [
    LoginComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule
  ],
  exports: [
    LoginComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent
  ]
})
export class AuthenticationModule {}
