import { Component } from '@angular/core';
import { SnackbarService } from './snack-bar/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
onFailure() {
  this._snackBarService.openCustomSnackBar('Download Failed...', 'Close', false);
}
  constructor(private _snackBarService: SnackbarService) {}

  onSuccess() {
    this._snackBarService.openCustomSnackBar('Starting Download...', 'Ok', true);
  }
  title = 'Custom SnackBar';
}
