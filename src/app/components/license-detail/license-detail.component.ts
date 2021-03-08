import { LicensesService } from 'src/app/services/license-service/licenses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-license-detail',
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.scss']
})
export class LicenseDetailComponent {
  licenseData$ = this.licenseService.licenseData$.value;
  constructor(private licenseService: LicensesService) {}
}