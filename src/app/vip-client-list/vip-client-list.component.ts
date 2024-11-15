import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-vip-client-list',
  templateUrl: './vip-client-list.component.html',
  styleUrls: ['./vip-client-list.component.css']
})
export class VipClientListComponent implements OnInit {
  vipClients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadVipClients();
  }

  loadVipClients(): void {
    this.vipClients = this.clientService.getVipClients();
  }
}
