# Astrologer Website

This is a Next.js-based website designed to provide astrology-related services, built with [ShadCN UI](https://github.com/shadcn/ui), [Tailwind CSS](https://tailwindcss.com/), and [Next.js](https://nextjs.org/). It leverages TypeScript for type safety and organizes data efficiently for a smooth, responsive experience.

## Getting Started

To get the project up and running locally, follow these steps:

### 1. Clone the repository

#### run the following commands : 
```bash
git clone https://github.com/Yogeshlodhi/divinetalk_assignment.git
cd divinetalk-assignment
npm install
npm run dev
```

#### Once the server starts, open http://localhost:3000 in your browser to view the website.



### 2. Editing the application
You can start editing the project by modifying the files in the src/ directory. The site will auto-update as you edit the files.

### 3. UI Libraries

ShadCN UI
For this project, I used ShadCN UI as the main UI component library. ShadCN UI provides a rich set of highly customizable, accessible, and modern components built specifically for React applications. I chose ShadCN UI for its flexibility, seamless integration with Tailwind CSS, and the ability to create beautiful, consistent UI components quickly.

Tailwind CSS
I used Tailwind CSS for custom styling and utility classes. Tailwind’s utility-first approach gives us flexibility and allows for rapid customization of designs without needing to write custom CSS. It works perfectly with ShadCN UI, making it easier to build visually appealing layouts.

### 4. Features & Functionality
Responsive Design: The website is fully responsive, optimized for a great user experience across different screen sizes, including mobile devices, tablets, and desktops.

Dynamic Data Handling: The project is organized with clean, type-safe TypeScript definitions to ensure data consistency and reduce runtime errors.

ShadCN UI Components: We used ShadCN UI components such as buttons, inputs and cards for building the interactive elements of the site.

Tailwind CSS Utility Classes: Tailwind CSS’s utility-first approach was employed to handle layout, spacing, typography, and other visual elements.

TypeScript for Type Safety: Type definitions were established throughout the project to ensure type safety, helping prevent errors and making the codebase more maintainable.

Data Organization: Data related to astrology was organized efficiently in separate modules, making it easy to manage and fetch from external APIs.

### 5. Challenges Faced
Integrating Astrology Data: Integrating astrology data from external APIs was tricky due to varying data structures and ensuring proper formatting. However, we used TypeScript to define clear interfaces, making integration smoother.

Responsive Layouts: Ensuring that the layout remained consistent across various screen sizes was a challenge. We utilized Tailwind's responsive utilities to implement a flexible, mobile-first design.

### 6. Website 
The website is finally live on [Divinetalk-Astrology](http://localhost:3000/astrologers)