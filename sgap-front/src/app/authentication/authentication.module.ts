import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserEditComponent } from "./user-edit/user-edit.component";

@NgModule({
  declarations: [
    LoginComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    UserCreateComponent,
    UserEditComponent
  ]
})
export class AuthenticationModule {}
