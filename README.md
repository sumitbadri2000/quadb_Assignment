![Screenshot (33)](https://github.com/sumitbadri2000/quadb_Assignment/assets/110050319/cde5efbf-b1d3-4b5c-b405-b682f95e1144)

# Signup Page

The Signup Component is a part of our application that allows new users to create accounts. It collects user details, such as their first name, last name, email address, and password. After successful signup, users will be able to log in to our application.

## Usage

The Signup component is used to allow new users to register for your application. Users provide their personal information, and upon successful registration, they gain access to app.

![Screenshot (34)](https://github.com/sumitbadri2000/quadb_Assignment/assets/110050319/557b2711-7c7f-4694-b74a-18f364e8fef7)

# Login Page

The Login Component is a crucial part of our application that allows registered users to sign in. Users provide their email address and password, and upon successful login, they gain access to our app's features.

## Usage

The Login component allows registered users to log in to your application by providing their email address and password. After successful authentication, they can access your app's features.

![Screenshot (35)](https://github.com/sumitbadri2000/quadb_Assignment/assets/110050319/00789384-2d68-4fba-9c23-35ca5e9b6473)

# Home Component

The Home component is a key part of our application that allows users to search for job listings based on a programming language. It uses the Adzuna job search API to fetch job data and display the results to the users.

Enter a programming language in the input field and click the "Search" button to find job listings related to that language.

## Job Listing Display

Job listings are displayed in a responsive grid layout.
Users can click on a job listing to view its details.
The component provides information such as job title, company, category, location, and contract details.

![Screenshot (36)](https://github.com/sumitbadri2000/quadb_Assignment/assets/110050319/db9d1a74-46cc-41fb-b475-d535c03c38f1)

# Job Detail page

The JobDetail component provides a clean and organized display of job details. It includes the job title, company name, category, location, contract time, contract type, and a detailed description. Users can easily access this information to make informed decisions about job opportunities. Additionally, a JobModal component is included to allow users to apply for the job directly from the job details page. This component enhances the user experience and helps streamline the job application process.

## Usage

To integrate the JobDetail component into your application, simply render it when a user clicks on a job listing's details. This component fetches job details from local storage and presents them in a visually appealing format.

![Screenshot (37)](https://github.com/sumitbadri2000/quadb_Assignment/assets/110050319/1f5b09b9-9a78-4949-a560-03cdc28707f6)

# Job Modal Page

The JobModal component is a critical part of our application, allowing users to apply for job positions effortlessly. Users can click the "Apply Now" button on the job details page to open the modal. Within the modal, they can enter their first name, email, attach a cover letter, and even upload a resume. Upon completing the application, users can click "Submit" to apply for the job. The modal's responsive design ensures a seamless user experience across various devices.

## Usage

To integrate the JobModal component into your application, simply render it within the job details page. Customize the form fields and submit functionality as needed for your project.

![Screenshot (38)](https://github.com/sumitbadri2000/quadb_Assignment/assets/110050319/3f522b7f-fc3d-4959-9628-b480db7ce506)

# Success Page

The Success component displays a checkmark icon to indicate a successful job application. It then presents key job details, including the job title, company name, category, location, contract time, contract type, and job description. Users are also presented with a message thanking them for their application and an option to return to the home page with a single click. The component's responsive design ensures a consistent user experience on various devices.

## Usage

To utilize the Success component, simply render it after a job application is successfully submitted, passing in the relevant job details.
