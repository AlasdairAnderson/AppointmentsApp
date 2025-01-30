![image](https://github.com/user-attachments/assets/cfd9fdf9-98dd-45d6-b9a2-743cfc176063)

# Contacts & Appointments Management App

## Project Overview
This React application manages contacts and appointments through two primary pages:
- **Contacts Page**: Allows users to add and view saved contacts.
- **Appointments Page**: Enables users to schedule and view appointments.

The project is built using functional React components and utilizes hooks for state management. It was developed using the initial codebase provided by Codecademy.

View deployed site here <link>https://appointmentmanagementapp.netlify.app</link>

---

## Learning Objectives
This project reinforces key React development skills, including:
- Managing component state using hooks
- Passing and handling props effectively
- Implementing form validation and handling user input
- Rendering conditional UI elements
- Reusing components efficiently
- Iterating over arrays to dynamically generate UI elements

---

## Prerequisites
To fully engage with this project, prior knowledge of the following React concepts is recommended:
- JSX
- Functional and stateful React components
- Component communication through props
- Using React Hooks (`useState`, `useEffect`)
- Best practices for structuring React applications
- Styling in React
- Controlled form components

---

## Project Implementation
### 1. `App.js`
This serves as the root component, handling routing between pages using **React Router**. It maintains and updates the contact and appointment data while passing relevant props to child components.

**Key Responsibilities:**
- Store contacts and appointments as state variables.
- Provide functions to add new contacts and appointments.
- Pass data and callback functions to `ContactsPage` and `AppointmentsPage`.

### 2. `ContactsPage.js`
Located in `/src/containers/contactsPage`, this component manages adding and displaying contacts.

**Key Responsibilities:**
- Accept contact data and the add-contact function as props.
- Maintain state for name, phone, and email input fields.
- Identify and prevent duplicate contact entries.
- Clear input fields upon successful submission.
- Render:
  - `ContactForm` for user input.
  - `TileList` to display contacts.

### 3. `ContactForm.js`
Located in `/src/components/contactForm`, this stateless component renders a form for entering contact details.

**Key Responsibilities:**
- Display controlled input fields for name, phone, and email.
- Implement form validation, including a phone number pattern.
- Handle form submission.

### 4. `TileList.js`
Located in `/src/components/tileList`, this stateless component dynamically renders a list of `Tile` components.

**Key Responsibilities:**
- Accept an array of objects as a prop.
- Generate `Tile` components, passing `name` and `description` props.
- Serve as a reusable component for contacts and appointments.

### 5. `Tile.js`
Located in `/src/components/tile`, this stateless component displays details from an object.

**Key Responsibilities:**
- Accept `name` and `description` props.
- Render:
  - A `<p>` element for `name` (CSS class: `tile-title`).
  - A `<p>` element for each value in `description` (CSS class: `tile`).
- Be reusable for both contacts and appointments.

### 6. `AppointmentsPage.js`
Located in `/src/containers/appointmentsPage`, this component manages appointment scheduling and display.

**Key Responsibilities:**
- Accept appointments, contacts, and the add-appointment function as props.
- Track state for appointment name, contact, date, and time.
- Handle appointment submission and form reset.
- Render:
  - `AppointmentForm` for scheduling appointments.
  - `TileList` to display scheduled appointments.

### 7. `AppointmentForm.js`
Located in `/src/components/appointmentForm`, this stateless component renders a form to collect appointment details.

**Key Responsibilities:**
- Display controlled input fields for appointment details.
- Include a `ContactPicker` dropdown for selecting a contact.
- Use `getTodayString()` to restrict past date selection.
- Handle form submission.

### 8. `ContactPicker.js`
Located in `/src/components/contactPicker`, this stateless component provides a dropdown list of contacts.

**Key Responsibilities:**
- Accept contacts, an `onChange` function, `value`, and `name` as props.
- Render a `<select>` dropdown with:
  - A default option labeled “No Contact Selected” (`value=""`).
  - Additional options generated dynamically from the contacts array.

---

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the app in a web browser at `http://localhost:3000`.

---

## Contribution Guidelines
Contributions are welcome! Feel free to submit issues or open pull requests to improve the project.

---

## License
This project is licensed under the MIT License.
