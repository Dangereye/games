# Games

Embark on an immersive gaming journey with access to an extensive database featuring over 500,000 games across 50 platforms, including mobile. This vast collection is sourced from the RAWG API, providing comprehensive details such as videos, screenshots, descriptions, genres, ESRB ratings, Metacritic scores, and more. Begin your exploration today and uncover your next gaming obsession!

## Design

The Games platform is a modified rendition of rawg.io, our data provider. It features an added light or dark theme, simplified navigation, and reduced clutter for an enhanced user experience. The content is organized into compartments, providing more breathing space, improving navigation, and enhancing the overall aesthetic appeal.

## Features

- Responsive layout & images
- Infinite scroll data loading or pagination
- Mobile navigation - able to be toggled to save space on smaller screens
- Modal - to view screenshots or trailers
- Light or dark theme
- Bespoke SVG icons
- Search
- Browse: all games, genres, tags, developers, publishers, game stores
- Platforms: PC, Playstation, Nintendo, Xbox, Apple Mac, Linux, ISO, Android, Amiga, Sega, Atari, Neo Geo, 3DO, Web

### Game card

- Game image
- Platform SVG icons
- Metacritic score
- Name
- Release date

### Game/id

- Background image
- Title
- Release date
- Platform SVG icons
- Trailer
- Description
- Developers
- Publishers
- Website link
- ESRB rating
- Stats: metacritic score, avg playtime, games in series, # of additions, achievements
- Platforms
- Genres
- Tags
- Where to buy
- Additions
- Series
- Achievements
- Screenshots

### All games

- Title
- Results count
- Sort: relevance, name, release date, top rated
- Filters: release date
- List of all games

### Genres, tags, developers, publishers, game stores

- Title
- Results count
- List of all games

#### card

- Image
- Name
- Popular games

### Platforms

- Title
- Results count
- Sort: relevance, name, release date, top rated
- Filters: release date, genres

## Technologies

- HTML5
- Sass / Scss
- JavaScript ES6+
- React
- Next
- Server side rendering (SSR)

## APIs

- [RAWG](https://rawg.io/apidocs)
- Local storage
- Intersection observer

## Third party

- React icons

## Design tools

- Adobe Photoshop
- Adobe Illustrator
