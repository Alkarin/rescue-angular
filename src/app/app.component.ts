import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {SearchService} from "./search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {

    this.searchService.search(this.searchTerm$).subscribe(
      (response) => this.handleResponse(response),
      (error) => this.handleResponseError(error)
    );
  }

  private handleResponse(response) {
    if(JSON.stringify(response) === "\"No Results\""){
      // Do nothing
      console.log("There were no results");
    } else {
      console.log("RESPONSE:" + JSON.stringify(response));
    }

  }

  private handleResponseError(error) {
    console.log("ERROR:" + JSON.stringify(error));
  }


}
