import React from 'react';
import './HomePage.css';

function HomePage() {

  
  return (
    <div className="activity-form-container  homepagecontainer m-5 mx-auto">
      <div className="home-page">
        <h1 className='heading mb-5 text-center' >About Better U</h1>
        <div className='para-container'>
          <ul className='bullet-points'>
            <p className='para'>
              Our mobile app helps you better yourself. With Better U, you can easily plan, monitor, and review your exercise regimen while receiving reminders and notifications to keep you on track.
            </p>
            <p className='para'>
              Better U also allows you to consult with doctors as needed, with your data kept private and isolated from other doctors. We believe that communication between doctors and patients is critical to the success of any healthcare journey, which is why our app includes a two-way interaction system that functions like a chat.
            </p>
            <p className='para'>
              We also enable doctors to "push" personalized content to users, providing notifications of new information and updates. Better U even suggests suitable doctors for users based on their needs.
            </p>
            <p className='para'>
              At Better U, we believe that healthcare should be accessible, flexible, and personalized. Our app is designed to help patients and doctors navigate the healthcare journey more easily, efficiently, and effectively.
            </p>
          </ul>
          <p className='para highlight'>
            Thank you for choosing Better U, and we look forward to helping you achieve your health goals!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
