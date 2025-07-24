import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/theme-provider";
import { TooltipProvider } from "./components/ui/tooltip";
import "./style.css";

import StyleShowcase from "./style-showcase";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
     <StrictMode>
          <ThemeProvider storageKey="vite-ui-theme">
               <TooltipProvider>
                    <StyleShowcase />
               </TooltipProvider>
          </ThemeProvider>
     </StrictMode>
);
