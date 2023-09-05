# 🐧 Penguin Tracker API & Monitor Interface by Audi 🎛️
<img width="1440" alt="Screenshot 2023-09-02 at 00 30 31" src="https://github.com/RevoU-FSSE-2/week-11-audiprevio/assets/126348614/b5e727e4-2736-4006-bf72-8121d22a5278">

### Inspired by my time designing and working with engineers for Forest Tracking and Mapping Softwares, I decided to honor it by creating a Penguin Conservation Simulation API & Interface

Get ready for a crisp and exciting journey! This project is no ordinary one; it's a Node.js API designed specifically for managing satellite tracking data of our feathered friends in the snow, the penguins. And that's not all; we also take care of their admin users. 

For visual enthusiasts, don't feel left out! We have a nifty Monitor Interface for your eyes to feast on the magnificent visualization of tracking data.

## 🚀 How to Board The Rocket?

Want to be part of this amazing flight to the penguin world? Buckle up and ensure Node.js and npm are installed in your spaceship (a.k.a, your machine)!

### Steps for Launch:

Zero confusion, three steps to heaven!

1. Call the clone army! 👾 Use `git clone this repo's URL`
	
2. Time to navigate! Find your project folder with `cd ProjectName` 🗂️
	
3. Ready your tools! Get all dependencies with `npm install` 🔨
	
4. Ignite the engines! Fire up the server with `npm start` 🚀

## 📚 API Encyclopedia

Our API is more than just endpoints; it's a sophisticated narrative tailored with the precision of OpenAPI v3.0 specification. You can converse with our API at: `http://penguintrackerapi.fly.dev`.

Here are some phrases it understands:

| Method | Path  | Function | Intricacies |
| ------ | ----- | ------- | ----------- |
| POST   | /admin/createadmin   | New Admin | Secret club access! Makes a new admin but only Superadmins can whisper this. |
| GET | /admin/getadmin    | Admin Info | Breaks the enigma! Yields a list of who's who in the admin world. |
| DELETE | /admin/softdeleteadmin  | Vanishing Act | Admin user goes poof! But worry not, it's only a soft delete. |
| PUT | /admin/updateadminpassword   | New Keys | Renovate your locks! Changes the admin password. |
Open the YAML file unearths the detailed infos on the how-tos about our API.

## 🌍 Monitor Interface with Leaflet.js
<img width="1440" alt="Screenshot 2023-09-02 at 00 30 31" src="https://github.com/RevoU-FSSE-2/week-11-audiprevio/assets/126348614/b5e727e4-2736-4006-bf72-8121d22a5278">

Picture this, an orb of glass showcasing the majestic trajectory of penguins on a spherical slide! Too good to be true? Open the `index.html` file in a web browser and check out the Monitor Interface for yourself.

This fancy interface is brought to life using Leaflet.js, a widely known JavaScript library for mobile-friendly interactive maps.

To view the interface, open up the `index.html` file in a web browser


## 🔬 Testing

Do you like puzzles, riddles, and ensuring things work as they should? We bet you love testing! Our unit tests powered by Jest & Mocking test the mettle of controllers to the core. For a joyful ride of breaking and making, peek into the `penguinController.test.js` and fire `npm run test`.

### We currently stand at 75% coverage, with 9 out of 12 endpoints being successfully tested!

## 🐧 Superadmin Access

Need to test and snoop around with a Superadmin's eye? We've got you covered.

{ "username": "SuperAdminArctic3000", "password": "superadminarctic3000000" }
JWT_SECRET=yandhi2024


### License: The Shield of Honour 🛡️

This odyssey of a project is licensed under the MIT License.

### Special Thanks to: Kak Dion from RevoU for all the support and guidance!

