# 🌄 My Creative Gallery

Welcome to **My Photo Gallery** — a responsive photo gallery website created to showcase beautiful images while demonstrating the practical use of **CSS Flexbox, CSS Grid, responsive design, and basic JavaScript**.

The project was built with a focus on **clean design, simple navigation, accessibility, responsiveness, and a beginner-friendly implementation of modern web development techniques**.

---

## 🌐 Live Demo

🚀 **View the live photo gallery:**

👉 https://benbash.github.io/myGallery/

---

## 🖥️ About the Project

**My Photo Gallery** is a responsive photo gallery website designed to display a collection of photographs in an attractive and organized layout.

The main purpose of this project is to demonstrate how **Flexbox and CSS Grid** can be used together to create responsive web layouts that work across different screen sizes.

The website includes:

* 🏠 **Home** — A welcoming hero section introducing the gallery
* 🖼️ **Photo Gallery** — A collection of photographs organized using CSS Grid
* 📖 **About** — Information about the project and the technologies used
* 📱 **Responsive Navigation** — A mobile-friendly navigation menu
* 🦶 **Footer** — Basic project information and copyright details

---

## 🧰 Technologies Used

* **HTML5** — Used to structure the website using semantic HTML elements
* **CSS3** — Used for styling, animations, layouts, and responsive design
* **CSS Flexbox** — Used for navigation, alignment, and hero section layout
* **CSS Grid** — Used to organize the responsive photo gallery
* **JavaScript** — Used to control the mobile navigation menu
* **Media Queries** — Used to adapt the website to different screen sizes
* **Git & GitHub** — Used for version control and project management
* **GitHub Pages** — Used for deployment and hosting

---

## ✨ Features

* ✅ Responsive design for desktop, tablet, and mobile devices
* ✅ CSS Flexbox for layout and alignment
* ✅ CSS Grid for the photo gallery
* ✅ Responsive image gallery
* ✅ Featured gallery image
* ✅ Mobile hamburger navigation
* ✅ Smooth scrolling between sections
* ✅ Image hover effects
* ✅ Responsive typography
* ✅ Semantic HTML structure
* ✅ Accessible image `alt` text
* ✅ Keyboard-friendly navigation controls
* ✅ Clean and beginner-friendly code structure
* ✅ Modern and user-friendly interface

---

## 📸 Photo Gallery

The gallery contains a collection of photographs covering different themes, including:

* 🏔️ Nature and landscapes
* 🌊 Travel and beaches
* 🌆 City life
* 🌿 Gardens and forests
* ☕ Lifestyle
* 🏙️ City lights
* 🛣️ Adventure
* 🌅 Evening scenes
* 🎨 Culture and street life

The images are organized using **CSS Grid**, allowing the layout to automatically adjust based on the available screen width.

---

## 📂 Project Structure

```text
responsive-photo-gallery/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   ├── photo6.jpg
│   ├── photo7.jpg
│   ├── photo8.jpg
│   ├── photo9.jpg
│   ├── photo10.jpg
│   └── photo11.jpg
│
└── README.md
```

---

## 🚀 Getting Started

To run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/benbash/myGallery
```

### 2. Navigate into the project folder

```bash
cd responsive-photo-gallery
```

### 3. Open the project

Open `index.html` directly in your browser, or use **Live Server** in Visual Studio Code for a better development experience.

---

## 📱 Responsive Design

The website was designed to provide a consistent and user-friendly experience across different screen sizes.

The layout adapts to:

* 💻 Desktop computers
* 💻 Laptops
* 📟 Tablets
* 📱 Mobile phones

CSS Grid uses responsive techniques such as `auto-fit` and `minmax()` to automatically adjust the number of gallery columns based on the available screen width.

Media queries are also used to make specific adjustments for tablet and mobile devices.

---

## 🎨 Flexbox Implementation

Flexbox was used in several areas of the website, including:

* Navigation bar alignment
* Navigation links
* Hero section alignment
* Horizontal and vertical positioning
* Mobile navigation layout

For example:

```css
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

This allows the navigation elements to remain properly aligned while the screen size changes.

---

## 🧱 CSS Grid Implementation

CSS Grid is the main layout system used for the photo gallery.

The gallery uses:

```css
.gallery-grid {
    display: grid;
    grid-template-columns:
        repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
}
```

This allows the browser to automatically determine how many columns can fit within the available space.

As the screen becomes smaller, the number of columns decreases, making the gallery responsive without requiring a completely different layout.

---

## 📸 Image Sources

The photographs used in this project were sourced from free stock photography platforms such as **Pexels** and **Unsplash**.

The images were selected for demonstration and educational purposes while building the responsive gallery.

When using external images in a real-world project, the appropriate image license and usage requirements should always be checked.

---

## 🎯 Purpose

The main goal of this project was to:

* Understand how CSS Flexbox works
* Learn how to create layouts using CSS Grid
* Practice responsive web design
* Understand how media queries work
* Build a mobile-friendly website
* Practice semantic HTML
* Improve CSS layout and styling skills
* Create a simple but professional web project

This project also demonstrates my ability to take basic web-development concepts and combine them into a functional responsive website.

---

## 📚 What I Learned

Through this project, I gained practical experience with:

* Creating responsive layouts
* Using Flexbox for alignment
* Using CSS Grid for complex layouts
* Creating responsive image galleries
* Using media queries
* Creating mobile navigation with JavaScript
* Writing semantic HTML
* Adding accessible `alt` text to images
* Organizing a web project into separate files
* Testing websites across different screen sizes
* Deploying a static website using GitHub Pages

---

## 📬 Contact

If you have any questions, feedback, or suggestions about this project, feel free to connect with me through my professional profiles.

You can also explore my other web development projects through my portfolio.

---

## ⭐ Acknowledgements

This project was created as part of my continuous learning and practical development journey and also part of the task I was assigned as an Intern at Codveda Technologies.

Special thanks to the free photography platforms that provide resources for developers and designers to practice building creative projects.

If you find the project interesting, feel free to ⭐ **star the repository** and explore the code.

---

## 📄 License

This project was created for **educational and portfolio purposes**.

The source code is available for learning and demonstration purposes. Images used in the project remain subject to the licenses and terms of their respective image providers.

