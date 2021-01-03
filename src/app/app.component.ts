import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './models/client.model';
import { ClientServiceService } from './services/client-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  clients: Client[];
  constructor(private clientService: ClientServiceService) {

  }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

}
