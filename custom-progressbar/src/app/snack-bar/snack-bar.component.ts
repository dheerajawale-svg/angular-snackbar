import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Subscription, map, take, timer } from 'rxjs';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss',
})
export class SnackBarComponent implements AfterViewInit, OnDestroy {
  value = 100;
  palleteColor: string = 'primary';
  barColor: string = 'accent';

  @ViewChild(MatProgressBar) progressBar!: MatProgressBar;
  countDownSub: Subscription | undefined;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    if (data.success) {
      this.palleteColor = 'primary';
    } else {
      this.palleteColor = 'warn';
      this.barColor = 'warn';
    }
    console.log(data);
  }

  ngAfterViewInit() {
    const start = 100;
    this.countDownSub = timer(100, 50)
      .pipe(
        map((i) => start - i),
        take(start + 5)
      )
      .subscribe({
        next: (i) => (this.value = i),
        complete: () => {
          timer(500).subscribe(() => this.onAction());
        },
      });
  }

  onAction() {
    this.data.snackBar.dismiss();
  }

  ngOnDestroy(): void {
    this.countDownSub?.unsubscribe();
  }
}
