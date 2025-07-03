# GoDaddy Repositories Viewer

This is a small React + TypeScript application that fetches and displays public repositories from the [GoDaddy GitHub organization](https://github.com/godaddy). You can view a list of repositories and click to see details about each one.

---

## 🚀 Features

- 🔍 List of GoDaddy public repositories
- 📄 Detailed view for each repository:
  - Title, description
  - Main programming languages
  - Stars ⭐, forks 🍴, open issues 🐞
  - Link to the GitHub repo
- 💡 Skeleton loading UI for better UX
- 🧪 Component tests using **Vitest** and **React Testing Library**
- 💅 Styled with CSS Modules
- 🧭 Routing with `react-router-dom`

---

## 🧱 Tech Stack

- **React** with **TypeScript**
- **Vite** for fast development
- **Vitest** for unit testing
- **React Testing Library**
- **CSS Modules** for styling
- **React Router** 

---

## 📦 Installation

```bash
git clone https://github.com/callepablo/godaddy-repos-app.git
cd godaddy-repos-app
npm install
```

## 🧪 Run Tests

```bash
npm run test
```

## 🖥️ Run Locally

```bash
npm run dev
```

- Open http://localhost:5173 in your browser.


## 🎯 Design Decisions
🧩 CSS Modules provide scoped, maintainable styles.

⚡ Chose Vite for its speed and simplicity.

📦 Used the native fetch API to keep dependencies minimal.

🧪 Testing focuses on rendering logic and API integration via mocks.

🔁 Used MemoryRouter in tests to support components using <Link>.

## ⏳ Time Constraints
To keep the scope reasonable, the following were not implemented but could be added with more time:

Pagination or infinite scroll

Sorting or filtering repos

Responsive enhancements

User feedback on API errors

## 📎 License
This project was built for educational and interview purposes only.