import { Component, OnInit } from '@angular/core';
import { TimeTrackingService } from 'src/app/shared/services/time-tracking.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-time-tracking-buttons',
  templateUrl: 'time-tracking-buttons.component.html',
  styleUrls: ['time-tracking-buttons.component.scss']
})
export class TimeTrackingButtonsComponent implements OnInit {
  public isWorking = false;
  constructor(private timeTrackingService: TimeTrackingService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.timeTrackingService.isWorking$.subscribe((isWorking) => {
      this.isWorking = isWorking;
    }, (error) => {

    });

    this.timeTrackingService.getIsWorking();
  }

  public pause() {
    this.openConfirmDialog('¿Está seguro de que desea pausar?');
  }

  public work() {
    this.openConfirmDialog('¿Está seguro de que desea fichar?')
  }

  private openConfirmDialog(confirmMessage: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: confirmMessage
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.timeTrackingService.send();
      }
    });
  }


}
