import { Component } from '@angular/core';
import { WorkoutService} from './workout.service';
import { error } from 'selenium-webdriver';
import { OktaAuthService } from '@okta/okta-angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isAuthenticated : boolean;
  constructor ( public oktaAuth: OktaAuthService, private workoutService: WorkoutService) {
    // get authentication state for immediate use
    this.oktaAuth.isAuthenticated().then(result => {
      this.isAuthenticated = result;
    });
 
    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }
  
}
