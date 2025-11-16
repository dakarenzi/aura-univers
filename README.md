# Aura Universe: A Miss Universe Portfolio

[cloudflarebutton]

Aura Universe is a visually stunning, minimalist, and modern portfolio website designed for a Miss Universe contestant. The application is built with a mobile-first approach, ensuring a flawless experience on all devices. It features five key pages: a captivating Home page with a hero section, an elegant About page for biography and achievements, a beautiful grid-based Gallery for photos, a dedicated Videos page, and a functional Contact page. The design philosophy is 'less is more', emphasizing clean layouts, generous white space, a sophisticated and limited color palette, and elegant typography to create a feeling of luxury and grace.

## Key Features

-   **Elegant & Minimalist Design:** A clean, sophisticated aesthetic focusing on content and visual appeal.
-   **Five Fully-Realized Pages:** Includes Home, About, Gallery, Videos, and Contact pages.
-   **Mobile-First & Responsive:** Flawless viewing experience across all devices, from mobile phones to desktops.
-   **Sophisticated Tech Stack:** Built with modern tools for a high-performance, maintainable application.
-   **Smooth User Experience:** Seamless navigation and subtle animations enhance user interaction.
-   **Ready for Deployment:** Easily deployable to the Cloudflare global network.

## Technology Stack

-   **Framework:** [React](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [Bun](https://bun.sh/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/aura-universe-portfolio.git
    cd aura-universe-portfolio
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

### Running the Development Server

To start the local development server, run the following command:

```sh
bun dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

-   `src/`: Contains all the frontend React application code.
    -   `components/`: Shared and UI components.
    -   `pages/`: Page components corresponding to different routes.
    -   `lib/`: Utility functions.
    -   `hooks/`: Custom React hooks.
    -   `main.tsx`: The main entry point for the React application.
-   `worker/`: Contains the Cloudflare Worker server-side code.
-   `public/`: Static assets that are served directly.

## Deployment

This project is configured for easy deployment to Cloudflare Pages.

1.  **Login to Cloudflare:**
    If you haven't already, log in to your Cloudflare account using the Wrangler CLI:
    ```sh
    bunx wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script to build and deploy your application:
    ```sh
    bun deploy
    ```

Alternatively, you can deploy directly from your GitHub repository with a single click.

[cloudflarebutton]

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.