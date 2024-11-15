import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client, Gender, FitnessProgram } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientForm: FormGroup;
  isEditMode = false;

  // Enums for dropdowns
  genders = Object.values(Gender);
  fitnessPrograms = Object.values(FitnessProgram);

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {
    this.clientForm = this.fb.group({
      clientID: ['', [Validators.required]],
      name: ['', [Validators.required]],
      DOB: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      fitnessProgram: ['', [Validators.required]],
      contactInfo: ['', [Validators.required, Validators.email]],
      joinedDate: ['', [Validators.required]],
      endingDate: ['', [Validators.required]],
      specialHealthNotes: [''],
      isVIP: [false],
    });
  }

  ngOnInit(): void {
    // Check if we are in edit mode
    const clientToEdit = history.state.client as Client | undefined;
    if (clientToEdit) {
      this.isEditMode = true;
      this.clientForm.patchValue(clientToEdit);
    }
  }

  onSubmit(): void {
    if (this.clientForm.invalid) {
      return;
    }

    const client: Client = {
      ...this.clientForm.value,
      DOB: new Date(this.clientForm.value.DOB),
      joinedDate: new Date(this.clientForm.value.joinedDate),
      endingDate: new Date(this.clientForm.value.endingDate),
    };

    if (this.isEditMode) {
      this.clientService.updateClient(client);
      alert('Client updated successfully!');
    } else {
      if (this.clientService.searchClient(client.clientID)) {
        alert('Error: Client ID must be unique!');
        return;
      }
      this.clientService.addClient(client);
      alert('Client added successfully!');
    }

    this.router.navigate(['/clients']);
  }

  onCancel(): void {
    this.router.navigate(['/clients']);
  }
}
