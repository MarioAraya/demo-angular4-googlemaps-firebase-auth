import { Component } from '@angular/core';
import { AgmMarker, MarkerManager, MouseEvent } from "@agm/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'Angular4 + angular-google-maps';
  zoomDefault: number = 14;
  markers: marker[] = [
	  {
		  lat: -33.417447123123,
		  lng: -70.605089123123,
		  label: 'Costanera Center',
      draggable: true
	  },
	  {
		  lat: -33.417295454545,
		  lng: -70.597136454545,
      label: 'InvSec',
      draggable: true
    },
    {
		  lat: -33.41088934344,
		  lng: -70.57998234343,
      label: 'InstaGis',
      draggable: true        
	  }
  ];

  constructor() {}

  onClickMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log(`dragEnd [${$event.coords.lat}, ${$event.coords.lng}]`, m, $event);
    this.updateMarker(m.label, $event.coords.lat, $event.coords.lng);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  private updateMarker(markerLabel: string, lat: number, lng: number){
    this.markers.map((m, i, arr) => {
      if (m.label === markerLabel){
        m.lat = lat;
        m.lng = lng;
      }
    })
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}