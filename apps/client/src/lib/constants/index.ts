import { Home } from "lucide-react";

export const greetings = [
  "What's Kickin 🤠",
  "Howdy Doody 🙃",
  "Greetings Earthling 👽",
  "What's Crackalackin",
  "How's it Hanging ",
  "Hey there, Space Cowboy 🤠",
  "Ahoy, Matey",
  "What in tarnation",
  "Bonjour",
  "Hellloooooooo",
  "Hey",
  "Hi",
  "What's Poppin",
  "Look who's here! It's",
  "Sup",
  "What's Poppin",
  "Yo Yo Yo ",
] as const;

export const sidebarOptions = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
];
export const statusOptions = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Transfer, not arrived",
    value: "transferredN",
  },
  {
    label: "Transfer, arrived",
    value: "transferredA",
  },
];

export const studentStatusOptions = [
  {
    label: "Available",
    value: "true",
  },
  {
    label: "Not Available",
    value: "false",
  },
];
