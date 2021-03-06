import {
  _3do,
  Amiga,
  Android,
  Atari,
  Ios,
  Linux,
  Mac,
  NeoGeo,
  Nintendo,
  Pc,
  Playstation,
  Sega,
  Web,
  Xbox,
} from "../components/shared/svg_functions/PlatformSVGs";

import {
  GamesSVG,
  GenresSVG,
  StoresSVG,
  DevelopersSVG,
  PublishersSVG,
  TagsSVG,
} from "../components/shared/svg_functions/CategoriesSVGs";

import { RiSettings3Fill } from "react-icons/ri";

export const ApplicationData = [
  {
    title: "Settings",
    icon: <RiSettings3Fill />,
    link: "/settings",
    dropdown: false,
  },
];

export const BrowseData = [
  {
    title: "All Games",
    icon: <GamesSVG />,
    link: "/",
    dropdown: false,
  },
  {
    title: "Genres",
    icon: <GenresSVG />,
    link: "/genres",
    dropdown: false,
  },
  {
    title: "Tags",
    icon: <TagsSVG />,
    link: "/tags",
    dropdown: false,
  },
  {
    title: "Developers",
    icon: <DevelopersSVG />,
    link: "/developers",
    dropdown: false,
  },
  {
    title: "Publishers",
    icon: <PublishersSVG />,
    link: "/publishers",
    dropdown: false,
  },
  {
    title: "Game Stores",
    icon: <StoresSVG />,
    link: "/stores",
    dropdown: false,
  },
];

export const PlatformData = [
  { title: "PC", icon: <Pc />, link: "/platforms/4", dropdown: false },
  {
    title: "PlayStation",
    icon: <Playstation />,
    dropdown: true,
    items: [
      { name: "PlayStation 5", link: "/platforms/187" },
      { name: "PlayStation 4", link: "/platforms/18" },
      { name: "PlayStation 3", link: "/platforms/16" },
      { name: "PlayStation 2", link: "/platforms/15" },
      { name: "PlayStation", link: "/platforms/27" },
      { name: "PS Vita", link: "/platforms/19" },
      { name: "PSP", link: "/platforms/17" },
    ],
  },
  {
    title: "Nintendo",
    icon: <Nintendo />,
    dropdown: true,
    items: [
      { name: "Nintendo Switch", link: "/platforms/7" },
      { name: "Nintendo 3DS", link: "/platforms/8" },
      { name: "Nintendo DS", link: "/platforms/9" },
      { name: "Nintendo DSi", link: "/platforms/13" },
      { name: "Wii U", link: "/platforms/10" },
      { name: "Wii", link: "/platforms/11" },
      { name: "GameCube", link: "/platforms/105" },
      { name: "Nintendo 64", link: "/platforms/83" },
      { name: "Game Boy Advance", link: "/platforms/24" },
      { name: "Game Boy Color", link: "/platforms/43" },
      { name: "Game Boy", link: "/platforms/26" },
      { name: "SNES", link: "/platforms/79" },
      { name: "NES", link: "/platforms/49" },
    ],
  },
  {
    title: "Xbox",
    icon: <Xbox />,
    dropdown: true,
    items: [
      { name: "Xbox One", link: "/platforms/1" },
      { name: "Xbox Series S/X", link: "/platforms/186" },
      { name: "Xbox 360", link: "/platforms/14" },
      { name: "Xbox", link: "/platforms/80" },
    ],
  },
  {
    title: "Apple Mac",
    icon: <Mac />,
    dropdown: true,
    items: [
      { name: "macOS", link: "/platforms/5" },
      { name: "Classic Macintosh", link: "/platforms/55" },
      { name: "Apple II", link: "/platforms/41" },
    ],
  },
  {
    title: "Linux",
    icon: <Linux />,
    link: "/platforms/6",
    dropdown: false,
  },
  { title: "iOS", icon: <Ios />, link: "/platforms/3", dropdown: false },
  {
    title: "Android",
    icon: <Android />,
    link: "/platforms/21",
    dropdown: false,
  },
  {
    title: "Amiga",
    icon: <Amiga />,
    link: "/platforms/166",
    dropdown: false,
  },
  {
    title: "Sega",
    icon: <Sega />,
    link: "/platforms",
    dropdown: true,
    items: [
      { name: "Genesis", link: "/platforms/167" },
      { name: "Sega Saturn", link: "/platforms/107" },
      { name: "Sega CD", link: "/platforms/119" },
      { name: "Sega 32X", link: "/platforms/117" },
      { name: "Sega Master System", link: "/platforms/74" },
      { name: "Dreamcast", link: "/platforms/106" },
      { name: "Game Gear", link: "/platforms/77" },
    ],
  },
  {
    title: "Atari",
    icon: <Atari />,
    dropdown: true,
    items: [
      { name: "Atari 7800", link: "/platforms/28" },
      { name: "Atari 5200", link: "/platforms/31" },
      { name: "Atari 2600", link: "/platforms/23" },
      { name: "Atari Flashback", link: "/platforms/22" },
      { name: "Atari 8-bit", link: "/platforms/25" },
      { name: "Atari ST", link: "/platforms/34" },
      { name: "Atari Lynx", link: "/platforms/46" },
      { name: "Atari XEGS", link: "/platforms/50" },
      { name: "Jaguar", link: "/platforms/112" },
    ],
  },
  {
    title: "Neo Geo",
    icon: <NeoGeo />,
    link: "/platforms/12",
    dropdown: false,
  },
  {
    title: "3DO",
    icon: <_3do />,
    link: "/platforms/111",
    dropdown: false,
  },
  { title: "Web", icon: <Web />, link: "/platforms/171", dropdown: false },
];
