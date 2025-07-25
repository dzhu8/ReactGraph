import { cn } from "./utils";
import ImageWithFallback from "./components/ui/image-with-fallback";
import { flowUtilConsts } from "./components/ui/utils/consts";

import gmailLogo from "@/assets/gmail.png";
import slackLogo from "@/assets/slack.png";
import sheetsLogo from "@/assets/google-sheets.png";
import openaiLogo from "@/assets/openai.png";
import discordLogo from "@/assets/discord.png";
import trelloLogo from "@/assets/trello.png";
import javascriptLogo from "@/assets/javascript.png";
import mathLogo from "@/assets/math.png";
import pythonLogo from "@/assets/python.png";
import typescriptLogo from "@/assets/typescript.png";

export const mockNodes = [
     {
          id: "gmail-node",
          name: "Gmail",
          logo: gmailLogo,
          action: "Send Email",
          description: "Send an email through Gmail",
     },
     {
          id: "slack-node",
          name: "Slack",
          logo: slackLogo,
          action: "Post Message",
          description: "Post a message to a Slack channel",
     },
     {
          id: "sheets-node",
          name: "Google Sheets",
          logo: sheetsLogo,
          action: "Add Row",
          description: "Add a new row to a Google Sheets document",
     },
     {
          id: "openai-node",
          name: "OpenAI",
          logo: openaiLogo,
          action: "Chat Completion",
          description: "Generate AI responses using OpenAI's API",
     },
     {
          id: "discord-node",
          name: "Discord",
          logo: discordLogo,
          action: "Send Message",
          description: "Send a message to a Discord channel",
     },
     {
          id: "trello-node",
          name: "Trello",
          logo: trelloLogo,
          action: "Create Card",
          description: "Create a new card in a Trello board",
     },
     {
          id: "javascript-node",
          name: "JavaScript",
          logo: javascriptLogo,
          action: "Execute Code",
          description: "Run custom JavaScript code",
     },
     {
          id: "math-node",
          name: "Math",
          logo: mathLogo,
          action: "Calculate",
          description: "Perform mathematical calculations",
     },
     {
          id: "python-node",
          name: "Python",
          logo: pythonLogo,
          action: "Run Script",
          description: "Execute Python code or scripts",
     },
     {
          id: "typescript-node",
          name: "TypeScript",
          logo: typescriptLogo,
          action: "Compile Code",
          description: "Compile and execute TypeScript code",
     },
];

export interface MockNodeData {
     id: string;
     name: string;
     logo: string;
     action: string;
     description: string;
}

// Mock node component (nonfunctional, for display)
export const MockStepNode = ({ data, selected = false, onClick }: { data: MockNodeData; selected?: boolean; onClick: () => void }) => {
     return (
          <div
               onClick={onClick}
               style={{
                    height: `${flowUtilConsts.MOCK_STEP_NODE_HEIGHT}px`,
                    width: `${flowUtilConsts.MOCK_STEP_NODE_WIDTH}px`,
                    maxWidth: `${flowUtilConsts.MOCK_STEP_NODE_WIDTH}px`,
               }}
               className={cn(
                    "transition-all border-box rounded-xs border border-solid border-border relative hover:border-primary/70 group cursor-pointer bg-card shadow-step-container",
                    {
                         "border-primary/70": selected,
                    }
               )}
          >
               {/* Selection overlay - matches production exactly */}
               <div
                    className={cn("absolute left-0 top-0 pointer-events-none rounded-xs w-full h-full", {
                         "border-t-[2px] border-primary/70 border-solid": selected,
                    })}
               />

               <div className="px-3 h-full w-full overflow-hidden">
                    <div className="flex items-center justify-center h-full w-full gap-3">
                         {/* Logo */}
                         <div className="flex items-center justify-center h-full">
                              <ImageWithFallback src={data.logo} alt={data.name} className="w-12 h-12" />
                         </div>

                         {/* Content */}
                         <div className="grow flex flex-col items-start justify-center min-w-0 w-full">
                              <div className="flex items-center justify-between min-w-0 w-full">
                                   <div className="text-sm truncate grow shrink">1. {data.action}</div>
                              </div>
                              <div className="flex justify-between w-full items-center">
                                   <div className="text-xs truncate text-muted-foreground text-ellipsis overflow-hidden whitespace-nowrap w-full">
                                        {data.name}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
