import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clients = this.clientService.getClients();
  }

  onEdit(client: Client): void {
    // Navigate to the client form with the client data passed as state
    this.router.navigate(['/add-client'], { state: { client } });
  }

  onDelete(clientID: string): void {
    if (confirm(`Are you sure you want to delete client ${clientID}?`)) {
      this.clientService.deleteClient(clientID);
      alert('Client deleted successfully!');
      this.loadClients();
    }
  }
}
