import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserCreateComponent } from "./user-list/user-create/user-create.component";
import { UserEditComponent } from "./user-list/user-edit/user-edit.component";

const routes: Routes = [
  {
    path: 'lista',
    component: UserListComponent
  },
  {
    path: 'cadastrar',
    component: UserCreateComponent
  },
  {
    path: 'editar/:id',
    component: UserEditComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
