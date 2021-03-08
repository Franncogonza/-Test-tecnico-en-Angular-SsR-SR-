import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableToolbarComponent } from './reusable-toolbar.component';

describe('ToolbarComponent', () => {
	let component: ReusableToolbarComponent;
	let fixture: ComponentFixture<ReusableToolbarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ReusableToolbarComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ReusableToolbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
