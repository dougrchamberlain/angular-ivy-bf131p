import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './src/material-module';
import { TelemetryService } from './src/app/telemetry.service';
import { AppRoutingModule } from './src/app/app-routing.module';
import { MedicationsContainerComponent } from './src/app/medications-container/medications-container.component';

@NgModule({
  declarations: [MedicationsContainerComponent],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  providers: [TelemetryService]
})
export class MedicationsModule {}
