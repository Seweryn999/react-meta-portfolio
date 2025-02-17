# Portfolio Web Page

This project is a single-page portfolio website built using React, Chakra UI, FontAwesome, Formik, and Yup. It showcases a personal landing page with links to projects, social media, and a "Contact Me" form. The site is designed to be both functional and visually polished, utilizing modern web development practices.

You can view the live project here: [Portfolio Web Page](https://seweryn999.github.io/react-meta-portfolio/)

---

## Features

### 1. Header
- **Social Media Links:** External links to GitHub, LinkedIn, and email are displayed as icons in the header.
- **Navigation Links:** Internal links navigate to the "Projects" and "Contact Me" sections of the page with smooth scrolling behavior.
- **Scroll-Dependent Animation:** The header is animated to slide up when scrolling down and slide down when scrolling up.

### 2. Landing Section
- Includes an avatar, greeting, and a brief description.
- Designed using Chakra UI to maintain a clean, professional look.

### 3. Projects Section
- Displays a grid of project cards with images, descriptions, and navigation arrows.
- Uses Chakra UI components like `HStack`, `VStack`, and `Image` for a structured layout.

### 4. Contact Me Section
- A form that includes fields for:
  - Name
  - Email
  - Inquiry Type (dropdown)
  - Message
- **Form Validation:** Uses Formik and Yup for validation rules:
  - Name, email, and message are required.
  - Email must be valid.
  - Message must have at least 25 characters.
- **Error Handling:** Displays error messages when fields are invalid or empty.
- **Form Submission:**
  - Shows a loading indicator when submitting.
  - Displays an alert with a success or error message after submission.
  - Resets the form on successful submission.
- **API Response Simulation:** Simulates a 50/50 success/error response for demonstration purposes.

---

## Libraries Used

### 1. Chakra UI
- A modern component library for building user interfaces.
- Used for layout, styling, buttons, and form components.

### 2. FontAwesome
- Provides icons for social media links and navigation.

### 3. Formik
- Simplifies form state management and validation.

### 4. Yup
- Provides schema-based validation for form fields.

---

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
