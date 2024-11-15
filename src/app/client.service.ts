import { Injectable } from '@angular/core';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clients: Client[] = [];

  getClients(): Client[] {
    return [...this.clients];
  }

  addClient(client: Client): void {
    this.clients.push(client);
  }

  updateClient(updatedClient: Client): void {
    const index = this.clients.findIndex((c) => c.clientID === updatedClient.clientID);
    if (index !== -1) {
      this.clients[index] = updatedClient;
    }
  }

  deleteClient(clientID: string): void {
    this.clients = this.clients.filter((client) => client.clientID !== clientID);
  }

  searchClient(clientID: string): Client | undefined {
    return this.clients.find((client) => client.clientID === clientID);
  }

  getVipClients(): Client[] {
    return this.clients.filter((client) => client.isVIP);
  }
}
