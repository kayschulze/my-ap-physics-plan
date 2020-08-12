import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
//import { Email } from'https://smtpjs.com/v3/smtp.js';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  onSubmit() {
    var fname = $('input[name = "fname"]').val();
    var lname = $('input[name = "lname"]').val();
    var message = $('input[name = "message"]').val();
    var emailAddress = $('input[name = "email"]').val();
    Email.send({
        SecureToken:'ac8ff012-7e6c-4215-b793-abaaf6ea27ee',
        To : 'kimberlykayschulze@gmail.com',
        From : 'myapphysicsplan@gmail.com',
        Subject : "My AP Physics Plan Works!",
        Body : "Hello, " + fname + " " + lname + ",<br> Thank you for signing up with My AP Physics Plan. <br><br>" +
        "I will be contacting you shortly.  <br>Your message is:  <br>" + message + "<br>From email address: " + emailAddress +
        "<br>~ Kim Schulze"
      })
      .then(
        message => alert("Mail sent successfully.")
         );
        //this.contactForm.reset();
      }

  constructor() { }

  ngOnInit(): void {

  }

}

/*
<script type="text/javascript">
  function sendEmail() {
    this.fname = document.getElementById("fname").value;
    this.lname = document.getElementById("lname").value;
    this.email = document.getElementById("email").value;
    this.message = document.getElementById("message").value;
    Email.send({
        SecureToken:'ac8ff012-7e6c-4215-b793-abaaf6ea27ee',
        To : 'kimberlykayschulze@gmail.com',
        From : 'myapphysicsplan@gmail.com',
        Subject : "My AP Physics Plan Works!",
        Body : "Hello, " + this.fname + " " + this.lname + ",<br> Thank you for signing up with My AP Physics Plan. <br><br>" +
        "I will be contacting you shortly.  <br>Your message is:  <br>" + this.message + "<br>From email address: " + this.email +
        "<br>~ Kim Schulze"
      })
      .then(
        message => alert("Mail sent successfully.")
         );
        this.contactForm.reset();
       }
</script> */
