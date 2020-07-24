function sendEmail() {
   Email.send({
      SecureToken:'ac8ff012-7e6c-4215-b793-abaaf6ea27ee',
      To : 'kimberlykayschulze@gmail.com',
      From : "myapphysicsplan@gmail.com",
      Subject : "My AP Physics Plan Works!",
      Body : "Time to Dab!"
    })
    .then(
      message => alert("Mail sent successfully.")
       );
     }
