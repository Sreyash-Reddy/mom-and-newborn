import React, { useState } from 'react';


const ContactUs = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility
  const [formData, setFormData] = useState({
    NAME: '',
    LOCATION: '',
    ADDRESS: '',
    CONTACT_NUMBER: '',
    EMAIL: '',
    SERVICES_NEEDED: '',
    COMMENTS: ''
  });



  const handleFormToggle = () => {
    setIsFormVisible(!isFormVisible); // Toggle the form visibility on button click
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className="contactus">
      <div className="contactus-heading">
        <h1>CONTACT US</h1>
      </div>

      <div className="contact-us-container">

        <div className="enquiry-container">
          <div className="phone-number">
          <div className='data'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="rgba(197, 105, 5, 1)" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            <h1>Mrs.Smitha Das </h1> 
            </div>
            <p><i>MSc (N) - Maternal and child health nursing</i></p>
            <div className='data'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="rgba(197, 105, 5, 1)" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            <h1><a href='tel:+91-7680804499'>+91-7680804499</a></h1>
            </div>
          <p></p>
          <div className='data'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="rgba(197, 105, 5, 1)" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
          <h1><a href='mailTo:care@momandnewborn.in'>care@momandnewborn.in</a></h1>
          </div>
          </div>

          <button className="enquiry-button" onClick={handleFormToggle}>
            Enquiry Form
          </button>

          {/* Conditionally render the form with background blur */}
          {isFormVisible && (
            <div className="form-overlay">
              <div className="enquiry-form-container">
                <form action='https://formspree.io/f/xwpknnog' method='POST' className="enquiry-form">
                <div className="form-header">
                  <h2>Enquiry Form</h2>
                  <button 
                    type="button" 
                    className="close-button"
                    onClick={handleFormToggle}
                  >
                    X
                  </button>
                </div>
                  <div className='row row1'>
                  <div class="field-group">
                  <h4>Name</h4> 
                  <input
                    type="text"
                    name="NAME"
                    placeholder="Name of the Mother"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  </div>
                  <div class="field-group">
                  <h4>Phone</h4> 
                  <input
                    type="number"
                    name="CONTACT_NUMBER"
                    placeholder=""
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                  />
                  </div>
                  </div>

                  <div className='row row2'>
                  <div class="field-group">
                  <h4>Email</h4> 
                  <input
                    type="text"
                    name="EMAIL"
                    placeholder=""
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  </div>
                  <div class="field-group">
                  <h4>Location</h4> 
                  <input
                    type="text"
                    name="LOCATION"
                    placeholder=""
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                  </div>
                  </div>

                  <div className="row-services">
                    <div className="services-field-group">
                      <h4>Services Needed</h4>
                      <div className="radio-options">
                        <div className="radio-option">
                          <input 
                            type="radio" 
                            id="mother-only" 
                            name="SERVICES_NEEDED"
                            value="mother-only"
                            checked={formData.SERVICES_NEEDED === 'mother-only'}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="mother-only">Only Mother</label>
                        </div>

                        <div className="radio-option">
                          <input 
                            type="radio" 
                            id="newborn-only" 
                            name="SERVICES_NEEDED"
                            value="newborn-only"
                            checked={formData.SERVICES_NEEDED === 'newborn-only'}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="newborn-only">Only Newborn</label>
                        </div>

                        <div className="radio-option">
                          <input 
                            type="radio" 
                            id="both" 
                            name="SERVICES_NEEDED"
                            value="both"
                            checked={formData.SERVICES_NEEDED === 'both'}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="both">Both Mother and Newborn</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-full">
                <div className="field-group full-width">
                  <h4>Address</h4> 
                  <input
                    type="text"
                    name="ADDRESS"
                    placeholder="Enter your address"
                    value={formData.ADDRESS}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="row-full">
                <div className="field-group full-width">
                  <h4>Comments</h4> 
                  <textarea
                    name="COMMENTS"
                    placeholder="Enter your comments"
                    value={formData.COMMENTS}
                    onChange={handleInputChange}
                    rows="4"
                  />
                </div>
                </div>
                  <button className='submitBtn' type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.050549944567!2d78.49621197516656!3d17.457294483441853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI3JzI2LjMiTiA3OMKwMjknNTUuNiJF!5e0!3m2!1sen!2sin!4v1732970354764!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
