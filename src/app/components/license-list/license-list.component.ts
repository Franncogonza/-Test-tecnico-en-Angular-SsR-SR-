import { LicensesList } from './../../shared/models/licenses-model';
import { LicensesService } from '../../services/license-service/licenses.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.scss']
})
export class LicenseListComponent implements OnInit, OnDestroy {
  public columns: any[] = [];
  public dataLicense: LicensesList[] = [];
  public subscription: Subscription = new Subscription();
  loadSpinner: boolean = true;

  constructor(private licenseService: LicensesService) { }

  ngOnInit(): void {
    this.setView();
  }

  setView() {
    this.buildHaderTable();
    this.buildBodyTable();
  }

  buildHaderTable() {
    this.columns = [];
    this.columns = [
      { headerName: 'id Solicitud', field: 'id' },
      { headerName: 'Nombre', field: 'name' },
      { headerName: 'Apellido', field: 'surname' },
      { headerName: 'ID HR', field: 'tenant' },
      { headerName: 'CUIL', field: 'cuil' },
      { headerName: 'Licencia', field: 'typeLicense' },
      { headerName: 'Unidad Organizativa', field: 'id' },
      { headerName: 'Fecha de inicio', field: 'initDate' },
      { headerName: 'Fecha de fin', field: 'endingDate' },
      { headerName: 'Estado', field: 'gcbaLicenseStatus' },
    ];
  }

  buildBodyTable() {
    this.subscription = this.licenseService.getLicenses().subscribe(data => {
      this.dataLicense = data;
      this.licenseService.licenseData$.next(data);
      this.loadSpinner = false;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
