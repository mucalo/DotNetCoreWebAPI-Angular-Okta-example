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

  constructor ( public oktaAuth: OktaAuthService, private workoutService: WorkoutService) {

  }

}
