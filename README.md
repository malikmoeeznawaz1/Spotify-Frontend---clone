# 🎵 Spotify Clone

A fully functional Spotify clone built with React, featuring music streaming, playlist management, and a modern user interface that closely mimics the original Spotify experience.

## ✨ Features

- **🎶 Music Streaming**: Play, pause, skip tracks with real-time audio controls
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **🎨 Modern UI**: Dark theme with sleek Spotify-inspired design
- **🎵 Music Player**: Full-featured player with seek bar and time display
- **📚 Album/Playlist Views**: Browse albums and playlists with detailed views
- **🔍 Navigation**: Smooth routing between different sections
- **🎧 Audio Context**: Centralized state management for music playback
- **📋 Track Lists**: Display songs with artwork, titles, and duration
- **⏯️ Player Controls**: Play, pause, previous, next, shuffle, and loop functionality

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.14
- **Routing**: React Router DOM 7.9.3
- **State Management**: React Context API
- **Audio Handling**: HTML5 Audio API

## 🏗️ Project Structure

```
spotify-clone/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/           # Images, icons, and audio files
│   │   ├── *.png        # UI icons (play, pause, next, etc.)
│   │   ├── *.jpg        # Album artwork
│   │   ├── *.mp3        # Sample audio files
│   │   └── assets.js    # Asset exports and data
│   ├── components/       # React components
│   │   ├── AlbumItem.jsx     # Album card component
│   │   ├── Display.jsx       # Main display container
│   │   ├── DisplayAlbum.jsx  # Album detail view
│   │   ├── DisplayHome.jsx   # Home page view
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Player.jsx        # Music player controls
│   │   ├── Sidebar.jsx       # Left sidebar navigation
│   │   └── SongItem.jsx      # Song card component
│   ├── context/
│   │   └── PlayerContext.jsx # Global music player state
│   ├── App.jsx          # Main app component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/malikmoeeznawaz1/Spotify-Frontend---clone.git
   cd spotify-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Key Components

### PlayerContext
- Manages global music playback state
- Handles play, pause, next, previous functionality
- Controls seek bar and time tracking
- Provides audio reference management

### Music Player
- Real-time audio controls
- Seek bar with click-to-seek functionality
- Time display (current/total)
- Volume and additional controls

### Navigation
- Sidebar with library and playlist options
- Top navigation with back/forward buttons
- Responsive design for mobile devices

### Album/Song Display
- Grid layouts for albums and songs
- Hover effects and interactive elements
- Dynamic background colors for albums
- Detailed album views with track listings

## 🎨 Design Features

- **Dark Theme**: Professional dark UI matching Spotify's aesthetic
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and transitions
- **Modern Typography**: Clean, readable font choices
- **Consistent Spacing**: Well-organized layout with proper margins/padding

## 📱 Responsive Design

- **Desktop**: Full sidebar and three-column layout
- **Tablet**: Adjusted spacing and component sizing
- **Mobile**: Collapsed sidebar, optimized touch targets

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎵 Audio Files

The project includes sample audio files for demonstration:
- `song1.mp3`, `song2.mp3`, `song3.mp3`
- Multiple album artwork images
- Various UI icons and controls

## 🌟 Future Enhancements

- [ ] User authentication and profiles
- [ ] Real Spotify API integration
- [ ] Playlist creation and management
- [ ] Search functionality
- [ ] Favorites and library management
- [ ] Social features (sharing, following)
- [ ] Better mobile experience
- [ ] Offline playback support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).


## 🙏 Acknowledgments

- Inspired by Spotify's original design
- Built as a learning project to demonstrate React skills
- Uses sample audio and images for educational purposes

---

⭐ If you found this project helpful, please give it a star!
