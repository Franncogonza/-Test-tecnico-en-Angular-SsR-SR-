import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LicensesService } from 'src/app/services/license-service/licenses.service';

@Component({
	selector: 'reusable-table',
	templateUrl: './reusable-table.component.html',
	styleUrls: ['./reusable-table.component.scss']
})
export class ReusableTableComponent implements OnInit {
	public id: any;
	public pageIndex = 1;
	public beforePageIndex = 0;
	public indexIndicator: number[] = [];
	public auxData: any[] = [];
	@Input() data: any[] = [];
	// @Input() dataChange: Observable<any> ;
	// @Input() dataSource: string = null;
	@Input() columns: any = [];
	@Input() filters: any = [];
	@Input() defaults: any = [];
	@Input() paginator = true;
	@Input() resultLength = 0;
	@Input() typeLicense = 'admin';
	@Input() action = true;
	@Output() returnActions = new EventEmitter();
	@Output() returnData = new EventEmitter();
	@Output() returnModal = new EventEmitter();
	@Output() returnSortable = new EventEmitter();


	constructor(
		private router: Router,
		private licenseService: LicensesService) { }


	ngOnInit() {
		this.columns = this.columns;
		this.buildIndexPaginado();
	}
	// ngOnChanges() {
	// 	if (this.dataChange) {
	// 		this.dataChange.subscribe((res: any) => {
	// 			console.log(res);
	// 			this.data = res;
	// 			this.buildIndexPaginado();
	// 		});
	// 	}
	// }

	detail(page: any) {
		this.id = page.id;
		this.router.navigate(['/license-detail/', this.id])
		this.licenseService.licenseData$.next(page)
	}

	editLicense(item: any) {
		//to do
		console.log('edit', item)
	}

	deleteLicense(item: any) {
		let idLicense: number = item.id;
		let licensesList$ = [...this.data];
		const license = licensesList$.find(element => element.id === idLicense);
		const index = licensesList$.indexOf(license);
		licensesList$.splice(index, 1)
		this.licenseService.licenseData$.next(licensesList$);
		this.showSuccesMessage();
	}

	showSuccesMessage() {
		//to do succes alert
		alert('elemento eliminado con exito');
	}

	// Paginado

	buildIndexPaginado() {
		let value = this.resultLength;
		if (this.paginator) { // pregunto si el paginado lo hace el Front o back
			value = this.data.length;
		}
		if (value > 10 && value <= 20) {
			this.indexIndicator = [1, 2];
		} else if (value > 20 && value <= 30) {
			this.indexIndicator = [1, 2, 3];
		} else if (value > 30) {
			this.indexIndicator = [1, 2, 3, 4];
		}
	}

	customIndex(customIndex: number) {
		this.pageIndex = customIndex;
		this.beforePageIndex = (this.pageIndex * 10) - 10;
	}

	sortable(column: any) {
		const direction = (column.split(',')[1] === '' || column.split(',')[1] === 'desc') ? 'desc' : 'asc';
		const orderBy = `${column},${direction}`;
		this.returnSortable.emit(orderBy);
	}

}
