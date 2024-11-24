const sendEmail = (formData) => {
    const { name, location, services, address, contactNumber } = formData;
    
    const emailBody = `
      <h3>New Enquiry Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Services Required:</strong> ${services}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Contact Number:</strong> ${contactNumber}</p>
    `;
  
    // Using Email.send from the SMTP.js CDN
    Email.send({
      Host: "smtp.gmail.com",
      Username: "care@momandnewborn.in", // Your email address
      Password: "momandnewborn_care", // Your email password
      To: "harshvardhan36912@gmail.com", // Receiver's email address
      From: "care@momandnewborn.in", // Your email address
      Subject: "New Enquiry Form Submission",
      Body: emailBody,
    })
      .then((message) => {
        console.log("Mail sent successfully: ", message);
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  };
  
  export default sendEmail;
  