import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'reusable-toolbar',
	templateUrl: './reusable-toolbar.component.html',
	styleUrls: ['./reusable-toolbar.component.scss']
})
export class ReusableToolbarComponent implements OnInit {

	// Inside the tabs
	@Input() title = '';
	@Input() subtitle = '';
	@Input() linkTo = '';
	@Input() tabs: any = '';

	// Title before tabs
	@Input() section = '';
	@Input() breadcrumbs = '';

	// Menu on Right
	@Input() textAction = '';
	@Input() linkAction = '';

	// Send back seletected tab
	@Output() returnTabSelected = new EventEmitter();
	@Input() currentTab = '';

	constructor(
		private router: Router,
	) { }

	ngOnInit() {
	}

	goTo(data: any) {
		return (data.tab) ? this.returnTabSelected.emit(data.tab) : this.router.navigate([data.linkTo]);
	}

	callToAction() {
		return (this.linkAction) ? this.router.navigate([this.linkAction]) : window.history.back();
	}

}
