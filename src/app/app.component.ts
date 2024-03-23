import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'companyProject';

  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  email: string = ''; 
  @ViewChild('emailBox') emailBox: ElementRef | any;
  invalidEmail: boolean = false;

  constructor() { }

  ngOnInit(): void {
    let endDateString = localStorage.getItem('endDate');
  
    if (endDateString) {
      // If end date is found in localStorage, parse it
      let endDate = new Date(endDateString);
      this.calculateCountdown(endDate);
  
      setInterval(() => {
        this.calculateCountdown(endDate);
      }, 1000);
    } else {
      // If end date is not found, calculate it and store in localStorage
      let endDate = new Date();
      endDate.setDate(endDate.getDate() + 30); // Set the end date to 30 days from now
      localStorage.setItem('endDate', endDate.toString());
      this.calculateCountdown(endDate);
  
      setInterval(() => {
        this.calculateCountdown(endDate);
      }, 1000);
    }
  }
  

  subscribe(email: string): void {
    // Check if the email is valid
    if (!this.validateEmail(email)) {
      // If email is invalid, set invalidEmail to true
      this.invalidEmail = true;
      return; // Stop further execution
    }

    // If email is valid, show a popup message
    alert('Thank you for subscribing!');

    // Clear the input field
    this.email = '';
    this.emailBox.nativeElement.style.borderColor = ''; // Reset border color
  }
 
  validateEmail(email: string): boolean {
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email); // Check if email matches the pattern
  }

  calculateCountdown(endDate: Date): void {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();
  
    if (difference <= 0) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    } else {
      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
    }
  }
}