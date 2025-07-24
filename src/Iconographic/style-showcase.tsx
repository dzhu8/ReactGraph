import { useState } from "react";
import { PieceIcon } from "./components/piece-icon";

import gmailLogo from "@/assets/gmail.png";
import slackLogo from "@/assets/slack.png";
import sheetsLogo from "@/assets/google-sheets.png";
import openaiLogo from "@/assets/openai.png";
import discordLogo from "@/assets/discord.png";
import trelloLogo from "@/assets/trello.png";

const mockNodes = [
     { name: "Gmail", logo: gmailLogo },
     { name: "Slack", logo: slackLogo },
     { name: "Google Sheets", logo: sheetsLogo },
     { name: "OpenAI", logo: openaiLogo },
     { name: "Discord", logo: discordLogo },
     { name: "Trello", logo: trelloLogo },
];

const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;


