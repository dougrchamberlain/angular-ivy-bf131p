import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './src/material-module';
import { TelemetryService } from './src/app/telemetry.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule],
  providers: [TelemetryService]
})
export class MedicationsModule {}
