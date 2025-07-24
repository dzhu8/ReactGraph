import { createContext, useContext, useEffect, useState } from "react";
import * as RippleHook from "use-ripple-hook";

import { colorsUtils } from "./lib/color-util";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
     children: React.ReactNode;
     defaultTheme?: Theme;
     storageKey?: string;
};

type ThemeProviderState = {
     theme: Theme;
     setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
     theme: "system",
     setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// Default branding configuration
const DEFAULT_BRANDING = {
     websiteName: "Test App",
     logos: {
          fullLogoUrl: "@/assets/react-flow.jpeg",
          favIconUrl: "@/assets/react.png",
          logoIconUrl: "@/assets/react-flow.jpeg",
     },
     colors: {
          primary: {
               default: "#6366f1", // Indigo-500
               dark: "#4f46e5", // Indigo-600
               light: "#a5b4fc", // Indigo-300
          },
     },
};

const setFavicon = (url: string) => {
     let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
     if (!link) {
          link = document.createElement("link");
          link.rel = "shortcut icon";
          document.head.appendChild(link);
     }
     link.href = url;
};

export function ThemeProvider({
     children,
     defaultTheme = "system",
     storageKey = "ap-ui-theme",
     ...props
}: ThemeProviderProps) {
     const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

     useEffect(() => {
          const root = window.document.documentElement;
          const resolvedTheme = theme === "system" ? "light" : theme;

          root.classList.remove("light", "dark");
          document.title = DEFAULT_BRANDING.websiteName;

          // Set primary color CSS custom property
          document.documentElement.style.setProperty(
               "--primary",
               colorsUtils.hexToHslString(DEFAULT_BRANDING.colors.primary.default)
          );

          setFavicon(DEFAULT_BRANDING.logos.favIconUrl);

          switch (resolvedTheme) {
               case "light": {
                    document.documentElement.style.setProperty(
                         "--primary-100",
                         colorsUtils.hexToHslString(DEFAULT_BRANDING.colors.primary.light)
                    );
                    document.documentElement.style.setProperty(
                         "--primary-300",
                         colorsUtils.hexToHslString(DEFAULT_BRANDING.colors.primary.dark)
                    );
                    break;
               }
               case "dark": {
                    document.documentElement.style.setProperty(
                         "--primary-100",
                         colorsUtils.hexToHslString(DEFAULT_BRANDING.colors.primary.dark)
                    );
                    document.documentElement.style.setProperty(
                         "--primary-300",
                         colorsUtils.hexToHslString(DEFAULT_BRANDING.colors.primary.light)
                    );
                    break;
               }
               default:
                    break;
          }

          root.classList.add(resolvedTheme);
     }, [theme]); // Only depend on theme since branding is static

     const value = {
          theme,
          setTheme: (theme: Theme) => {
               localStorage.setItem(storageKey, theme);
               setTheme(theme);
          },
     };

     return (
          <ThemeProviderContext.Provider {...props} value={value}>
               {children}
          </ThemeProviderContext.Provider>
     );
}

export const useTheme = () => {
     const context = useContext(ThemeProviderContext);

     if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

     return context;
};

export const useApRipple = () => {
     const { theme } = useTheme();
     return RippleHook.default({
          color: theme === "dark" ? "rgba(233, 233, 233, 0.2)" : "rgba(155, 155, 155, 0.2)",
          cancelAutomatically: true,
     });
};
