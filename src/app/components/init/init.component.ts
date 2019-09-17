import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-init',
	templateUrl: './init.component.html',
	styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

	lat = 51.678418;
	lng = 7.809007;
	iconUrl: any = {
		url: 'https://www.iconsdb.com/icons/preview/red/pin-5-xxl.png',
		scaledSize: { width: 28, height: 28 }
	};

	constructor() { }

	ngOnInit() {
	}

}
