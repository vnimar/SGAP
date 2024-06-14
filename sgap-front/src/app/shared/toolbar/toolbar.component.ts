import { Component } from '@angular/core';
import { UserService } from 'src/app/authentication/services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  menuOpen = false;

  constructor(private userService: UserService){}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout(){
    this.userService.logout();
  }
}
