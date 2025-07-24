/** @type {import('tailwindcss').Config} */
export default {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
          container: {
               center: true,
               padding: "2rem",
               screens: {
                    "2xl": "1400px",
               },
          },
          extend: {
               colors: {
                    "light-blue": "var(--light-blue)",
                    warning: {
                         DEFAULT: "var(--warning)",
                         100: "var(--warning-100)",
                         300: "var(--warning-300)",
                    },
                    border: {
                         DEFAULT: "var(--border)",
                    },
                    input: "var(--input)",
                    ring: "var(--ring)",
                    background: "var(--background)",
                    foreground: "var(--foreground)",
                    primary: {
                         DEFAULT: "var(--primary)",
                         foreground: "var(--primary-foreground)",
                         100: "var(--primary-100)",
                         300: "var(--primary-300)",
                    },
                    success: {
                         DEFAULT: "var(--success)",
                         100: "var(--success-100)",
                         300: "var(--success-300)",
                    },
                    secondary: {
                         DEFAULT: "var(--secondary)",
                         foreground: "var(--secondary-foreground)",
                    },
                    destructive: {
                         DEFAULT: "var(--destructive)",
                         100: "var(--destructive-100)",
                         300: "var(--destructive-300)",
                    },
                    muted: {
                         DEFAULT: "var(--muted)",
                         foreground: "var(--muted-foreground)",
                    },
                    accent: {
                         DEFAULT: "var(--accent)",
                         foreground: "var(--accent-foreground)",
                    },
                    card: {
                         DEFAULT: "var(--card)",
                         foreground: "var(--card-foreground)",
                    },
               },
               borderRadius: {
                    lg: "var(--radius)",
                    md: "calc(var(--radius) - 2px)",
                    sm: "calc(var(--radius) - 4px)",
                    xs: "calc(var(--radius) - 8px)",
                    xss: "calc(var(--radius) - 10px)",
               },
               fontFamily: {
                    inter: ["Inter", "sans-serif"],
               },
               fontSize: {
                    xss: "0.65rem",
                    "3xl": "1.75rem",
                    "4xl": "2rem",
               },
               keyframes: {
                    "accordion-down": {
                         from: { height: "0" },
                         to: { height: "var(--radix-accordion-content-height)" },
                    },
                    "accordion-up": {
                         from: { height: "var(--radix-accordion-content-height)" },
                         to: { height: "0" },
                    },
                    fade: {
                         "0%": { opacity: "0" },
                         "100%": { opacity: "1" },
                    },
               },
               animation: {
                    "accordion-down": "accordion-down 0.2s ease-out",
                    "accordion-up": "accordion-up 0.2s ease-out",
                    fade: "fade 0.2s ease-out",
               },
               boxShadow: {
                    "step-container":
                         "0px 4px 12px oklch(from var(--border) l c h / 0.15), 0px 1px 3px oklch(from var(--border) l c h / 0.5)",
                    "add-button": "var(--add-button-shadow)",
               },
          },
     },
};
