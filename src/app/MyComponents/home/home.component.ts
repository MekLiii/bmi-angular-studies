import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  public userHeight: number = 0;
  public userWeight: number = 0;
  public userGender: string = '';
  public bodyMassIndex: number | null = null;
  public bodyMassCategory: string = '';

  public computeBMI(): void {
    if (!(this.userWeight > 0 && this.userHeight > 0)) {
      return;
    }
    const heightInMeters = this.userHeight / 100;
    this.bodyMassIndex = +(this.userWeight / (heightInMeters * heightInMeters)).toFixed(2);
    this.bodyMassCategory = this.getBMICategory(this.bodyMassIndex);
  }

  private getBMICategory(bmi: number): string {
    if (bmi < 18.5) {
      return 'Underweight';
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    }
    return 'Obesity';

  }
}
