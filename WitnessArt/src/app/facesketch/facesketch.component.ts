import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-facesketch',
  templateUrl: './facesketch.component.html',
  styleUrls: ['./facesketch.component.css']
})
export class FacesketchComponent {
  sketchGenerated: boolean = false;
  matchingSketched: boolean = false;
  faceDescription: string = '';

  // Method to generate the sketch based on face description
  generateSketch(): void {
    // Get the value of the face description
    this.faceDescription = (document.getElementById('face-description-input') as HTMLTextAreaElement).value;

    // Check if face description is provided
    if (!this.faceDescription.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please provide a face description to generate the sketch.'
      });
      return;
    }

    // If description is provided, generate the sketch (Mocked for now)
    this.sketchGenerated = true; // Enable sketch section visibility
    this.matchingSketched = true; // Enable matching results section visibility
  }}
