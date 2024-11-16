import { Injectable } from '@angular/core';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private localStorageKey = 'clients';

  constructor() {
    this.loadClients();
  }

  private clients: Client[] = [];

  private loadClients(): void {
    const clientsJson = localStorage.getItem(this.localStorageKey);
    if (clientsJson) {
      this.clients = JSON.parse(clientsJson);
    }
  }

  private saveClients(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.clients));
  }

  addClient(client: Client): void {
    this.clients.push(client);
    this.saveClients();
  }

  updateClient(updatedClient: Client): void {
    const index = this.clients.findIndex(client => client.clientID === updatedClient.clientID);
    if (index !== -1) {
      this.clients[index] = updatedClient;
      this.saveClients();
    }
  }

  deleteClient(clientID: string): void {
    this.clients = this.clients.filter(client => client.clientID !== clientID);
    this.saveClients();
  }

  searchClient(clientID: string): Client | undefined {
    return this.clients.find(client => client.clientID === clientID);
  }

  getClients(): Client[] {
    return this.clients;
  }

  getVipClients(): Client[] {
    return this.clients.filter(client => client.isVIP);
  }
}
