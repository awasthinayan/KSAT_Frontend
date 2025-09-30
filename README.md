# Farm Connect - Farmer Registration App

Farm Connect is a React Native application that allows farmers to register, manage their profiles, and join a network connecting them with buyers, wholesalers, and other stakeholders in the agricultural ecosystem.

This project demonstrates a user-friendly registration flow with proper form validation, secure password handling, and a responsive layout optimized for mobile devices.

---

## Features

- **Farmer Registration Form**  
  - Full Name, Contact Number, Password  
  - Location / City, Land Size, Farming Experience  
  - Preferred Crop Type, Certifications  
  - Aadhaar Number

- **Form Validation**  
  - Required fields check  
  - Phone number & Aadhaar format validation  
  - Password length check  
  - Numeric validation for land size and experience

- **Password Visibility Toggle**  
  - Users can show/hide password while typing

- **Keyboard Handling & ScrollView**  
  - Inputs scroll correctly above mobile keyboard  
  - Smooth UX for small screens

- **Offline Fallback**  
  - In case of network errors, form data is still usable locally

- **Navigation**  
  - Seamless navigation to **Farmer Dashboard** or **Login Screen**

---

## Screenshots

![Farmer Registration Screen](path-to-screenshot1.png)  
![Keyboard Handling](path-to-screenshot2.png)  

*(Replace `path-to-screenshot.png` with your actual screenshots in your repo)*

---

## Tech Stack

- **Frontend:** React Native, Expo  
- **State Management:** React `useState` & `useCallback`  
- **UI:** LinearGradient, ScrollView, KeyboardAvoidingView  
- **Networking:** Fetch API for backend registration  
- **Backend:** Node.js/Express (API endpoint `http://localhost:3000/api/auth/farmer/register`)  

---

## Installation

1. **Clone the repository**  

```bash
git clone https://github.com/yourusername/farm-connect.git
cd farm-connect
