import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-app';
  loadedFeature = 'recipe';
  
  onNavigate(feature: string) {
    this.loadedFeature = feature
  }
}
