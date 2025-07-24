import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

export default defineConfig(({ command, mode }) => {
     // Define valid entry folders (add as more get added)
     const validEntryFolders = ["Iconographic", "Simplistic", "Ergonomic"];

     // Get the entry folder from environment variable, default to 'Iconographic'
     const requestedFolder = process.env.ENTRY_FOLDER || "Iconographic";

     // Validate the entry folder
     if (!validEntryFolders.includes(requestedFolder)) {
          console.error(`Invalid ENTRY_FOLDER: "${requestedFolder}"`);
          console.error(`Valid options are: ${validEntryFolders.join(", ")}`);
          process.exit(1);
     }

     // Check if the folder actually exists
     const entryFolderPath = path.resolve(__dirname, "src", requestedFolder);
     if (!fs.existsSync(entryFolderPath)) {
          console.error(`Entry folder does not exist: ${entryFolderPath}`);
          console.error(`Make sure the folder exists in the src directory`);
          process.exit(1);
     }

     // Check if index.html exists in the entry folder
     const indexHtmlPath = path.join(entryFolderPath, "index.html");
     if (!fs.existsSync(indexHtmlPath)) {
          console.warn(`Warning: index.html not found in ${requestedFolder}/`);
          console.warn(`   Expected: ${indexHtmlPath}`);
     }

     console.log(`Starting Vite with entry folder: ${requestedFolder}`);

     return {
          plugins: [react()],
          // Set root to the correct entry folder path
          root: path.resolve(__dirname, "src", requestedFolder),
          resolve: {
               alias: {
                    // Alias points back to the src directory from the entry folder
                    "@": path.resolve(__dirname, "src"),
               },
          },
          server: {
               port: 4200,
               host: "0.0.0.0",
          },
          build: {
               outDir: path.resolve(__dirname, "dist"),
               emptyOutDir: true,
          },
     };
});
