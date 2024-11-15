import { Component } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchID = '';
  searchResult: Client | null = null;
  errorMessage = '';

  constructor(private clientService: ClientService) {}

  onSearch(): void {
    if (this.searchID.trim() === '') {
      this.errorMessage = 'Please enter a Client ID.';
      this.searchResult = null;
      return;
    }

    const client = this.clientService.searchClient(this.searchID);
    if (client) {
      this.searchResult = client;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'No client found with the given ID.';
      this.searchResult = null;
    }
  }

  onClear(): void {
    this.searchID = '';
    this.searchResult = null;
    this.errorMessage = '';
  }
}
