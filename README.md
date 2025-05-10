# Scholarship Winners

## Description

This project is a web application built using **Nuxt 3**. The app leverages **Vue.js**, **Tailwind CSS** and **PrimeVue** for a modern and responsive UI.

## Tech Stack and Challenges

### Tech Stack
- **Frontend:** Nuxt 3 (Vue 3 + TypeScript)
- **Styling:** Tailwind CSS
- **component library:** PrimeVue

### Challenges Faced
- **Pagination & Filtering:** Implementing a dynamic pagination system.
- **SEO Optimization:** Adding proper meta tags and structured data for better search engine visibility.
- **CORS:** got issue with CORs from scholarship API

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (>=16.x)
- **Yarn** or **npm**
- **CORS** extention in chrome to allow CORs

### Installation

```sh
# Clone the repository
git clone https://github.com/Bachana123/Scholarship-Winners.git
cd scholarship-winners

# Install dependencies
yarn  # or npm install
```

### Environment Variables
Create a `.env` file and add your Contentful credentials:

```sh
NUXT_BASE_URL=base api url ( without / at the end)
```

### Start the Development Server

```sh
yarn dev  # or npm run dev
```

## Deployment

```sh
yarn build  # or npm run build
yarn generate  # Generate static files (if using SSG)
```

---
Feel free to contribute or report issues via [GitHub Issues](https://github.com/Bachana123/Scholarship-Winners/issues). 🚀
