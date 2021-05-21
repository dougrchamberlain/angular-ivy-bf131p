import { Component, OnInit } from '@angular/core';
import { MedicationsService } from '../medications.service';

@Component({
  selector: 'app-medications-container',
  templateUrl: './medications-container.component.html',
  styleUrls: ['./medications-container.component.css']
})
export class MedicationsContainerComponent implements OnInit {
  patientMedication$: any;
  constructor(private medications: MedicationsService) {}

  ngOnInit() {
    this.patientMedication$ = this.medications.get().subscribe({
      next: (data: any) => {
        console.log(data);
        this.medications = data.PatientOcularMeds;
      },
      error: undefined
    });
  }
}
