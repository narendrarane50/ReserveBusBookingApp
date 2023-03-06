# ReserveBusBookingApp

It is a MERN Stack Web Application which is used to book Bus Tickets from any location to any location at a given date. In this application you can choose the Bus of your choice, you can choose the seats of your choice from the available seats. It also shows the booked seats and the available seats data. You can also filter the seats according to the prices and select the seats from your estimated budget. After selecting the seats you just have to click on Proceed to Book and fill the user Details and click on Proceed to Pay. Your seats will be booked instantly and you will be redirected to the Tickets page.  


## Technologies that are used in this project.
  <ul>
    <li>React</li> 
    <li>Redux</li> 
    <li>React-Router-Dom</li> 
    <li>Tailwind-CSS</li> 
    <li>Moment</li> 
    <li>Mongoose</li> 
    <li>Express</li>  
    <li>MongoDB</li> 
    <li>Nodemon</li>  
    <li>Cors</li>   
  </ul>


## Features

- Shows which seats are already booked and which seats are available
- Book the Seats from anywhere to anywhere of your prefered choice
- Fetch all the bus Data stored in the MongoDB Atlas Database to the frontend and show the specific buses
- Saving the userDetails and ticket details into MongoDB Atlas Database


## Deployment

The app has been deployed on 
https://reserve-bus-booking.netlify.app/

and server on 
https://reserve-bus-booking-app.vercel.app/


## FAQ

#### How to book a ticket ?

First insert the From and To location from where to where you want to go. Then insert the date on which date you want to book the ticket. Then select the vacant seats and click on proceed to book. Then insert the user Details and click on Proceed to Pay, your tickets for those seats will be booked. 

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_DATABASE_URL`