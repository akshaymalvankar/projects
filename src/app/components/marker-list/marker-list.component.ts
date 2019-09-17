import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
    selector: 'app-marker-list',
    templateUrl: './marker-list.component.html',
    styleUrls: ['./marker-list.component.css']
})
export class MarkerListComponent implements OnInit {
     zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 18.955113,
		  lng: 72.814246,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 18.954793,
		  lng: 72.814246,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 18.954204,
		  lng: 72.815055,
		  label: 'C',
		  draggable: true
	  },
      {
		  lat: 18.95314,
		  lng: 72.815982,
		  label: 'D',
		  draggable: true
	  },
      {
		  lat: 18.9520914,
		  lng: 72.815055,
		  label: 'E',
		  draggable: true
	  },
      {
		  lat: 18.950728,
		  lng: 72.818209,
		  label: 'F',
		  draggable: true
	  }
  ]


    ngOnInit() {
    }

}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
