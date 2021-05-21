import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module';
import { TelemetryService } from './app/telemetry.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule],
  providers: [TelemetryService]
})
export class MedicationsModule {}
