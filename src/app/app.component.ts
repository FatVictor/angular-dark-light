import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeService} from "./theme.service";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule} from "@angular/forms";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatSlideToggleModule, MatToolbarModule, FormsModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-theme';
  isDarkMode: boolean;
  showFiller = false;

  constructor(private themeService: ThemeService, public dialog: MatDialog) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log(`Dialog closed`);
    });
  }
}
