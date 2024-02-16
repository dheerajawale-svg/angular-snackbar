import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openCustomSnackBar(message: string, action: string, isSuccess: boolean) {

    let config: MatSnackBarConfig = {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: {
        message: message,
        action: action,
        snackBar: this._snackBar,
        success: isSuccess
      },
      panelClass: 'success-snackbar',
    };

    if(!isSuccess) {
      config.panelClass = 'failure-snackbar';
    }

    this._snackBar.openFromComponent(SnackBarComponent, config);
  }

  openSnackBar(message: string) {
    let snackBarRef = this._snackBar.open(message, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
