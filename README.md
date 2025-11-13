# 🦠 Virus Lab Clicker

An engaging, educational clicker game that teaches students about viruses and the immune system through interactive gameplay!

## 📋 Overview

**Virus Lab Clicker** is a web-based incremental game designed for 8th graders and above. Players collect virus samples by clicking and earn upgrades themed around immune system components and medical research. The game combines fun, addictive clicker mechanics with educational content about biology and virology.

## 🎮 How to Play

### Basic Mechanics

1. **Click the Virus** 🦠
   - Click the large virus in the center of the screen to collect virus samples
   - Each click generates virus samples based on your current click power
   - Watch for animated DNA particles burst from the virus!

2. **Earn Resources**
   - Accumulate virus samples as your currency
   - Use samples to purchase upgrades and equipment

3. **Purchase Upgrades**
   - **Click Power Upgrades**: Increase viruses gained per click
     - Microscope (100 samples)
     - Petri Dish (500 samples)
     - Centrifuge (2,500 samples)
     - Electron Microscope (10,000 samples)
   
   - **Production Upgrades**: Unlock automatic virus generation
     - White Blood Cell (0.1/sec)
     - Antibody (0.5/sec)
     - T-Cell (2/sec)
     - Vaccine Lab (10/sec)
     - Research Lab (50/sec)
     - Hospital (200/sec)

4. **Generate Resources Passively**
   - Production upgrades generate virus samples automatically
   - Each upgrade level increases your production rate
   - Upgrade costs increase by 15% with each purchase

### Game Progression

- Start by clicking the virus manually
- Purchase click power upgrades to increase earnings per click
- Unlock production upgrades to generate samples while AFK
- Scale up your immune system with labs and research facilities
- Reach higher and higher virus sample counts!

## 🛠️ Features

✨ **Interactive Gameplay**
- Smooth animations and visual feedback
- Floating virus with pulsing animation
- DNA particle burst effects on each click
- Real-time statistics display

🎓 **Educational Theme**
- Learn about immune system components
- Understand virus biology concepts
- Discover medical research facilities
- Themed around fighting viruses

📱 **Responsive Design**
- Beautiful gradient background
- Works on desktop and tablets
- Clean, modern UI with glassmorphism effects
- Custom scrollable upgrade panels

⚡ **Progressive Gameplay**
- Exponential growth and scaling
- Multiple upgrade trees to pursue
- Cost scaling system (15% per purchase)
- Passive income generation

## 💻 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Getting Started

1. **Clone or download the project**
   ```bash
   cd virus-clicker-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   - Open your browser to `http://localhost:5173` (or the URL shown in terminal)

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
virus-clicker-game/
├── src/
│   ├── App.jsx              # Main game component
│   ├── App.css              # Global styles and animations
│   ├── main.jsx             # React entry point
│   └── components/
│       ├── Virus.jsx        # Clickable virus component
│       ├── Stats.jsx        # Statistics display
│       └── Upgrades.jsx     # Upgrade shop/listing
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🔧 Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations and transitions
- **JavaScript ES6+** - Core game logic

## 🎨 Game Design

### Visual Elements

- **Gradient Background**: Purple to violet gradient for visual appeal
- **Glassmorphism UI**: Frosted glass effect cards
- **Animations**: Smooth transitions and keyframe animations
- **Color Coding**:
  - 🟢 Green: Affordable upgrades
  - 🟡 Yellow: Resource values
  - 🟣 Purple: Virus and primary theme color

### Game Balance

- Early game: Quick progression with manual clicking
- Mid game: Transition to passive income
- Late game: Exponential growth with compound upgrades
- Cost scaling: 15% increase per purchase creates natural progression gates

## 📊 Game Statistics

The stats panel displays:
- **🦠 Virus Samples**: Your total accumulated resources
- **⚡ Per Second**: Current passive income rate
- **👆 Click Power**: Viruses earned per manual click

## 🎓 Educational Value

This game introduces:
- **White Blood Cells**: Real immune system defenders
- **Antibodies**: Proteins that fight infections
- **T-Cells**: Important immune system components
- **Vaccines**: Prevention through immunity
- **Research Labs**: Where viruses are studied safely
- **Hospitals**: Medical infrastructure

## 🚀 Future Enhancement Ideas

- Save/load game progress
- Achievement system
- Prestige/rebirth mechanics
- Multiplayer leaderboard
- More immune system components
- Virus mutation mechanics
- Mini-games for bonus resources
- Sound effects and music
- Dark/light theme toggle
- Difficulty settings

## 📝 Notes

- Game state is stored in React state (refresh loses progress)
- Consider adding localStorage for persistence
- Mobile optimization can be improved with touch events
- Performance is smooth on most modern browsers

## 🤝 Contributing

Feel free to suggest improvements or submit pull requests!

## 📄 License

This project is open source and available for educational use.

---

**Made with ❤️ for curious minds learning about viruses and immunity!**

**Have fun clicking and growing your immune system empire! 🦠💪**
