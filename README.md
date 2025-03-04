# Match Scheduler App

## Problem Statement
The Match Scheduler App is designed to allow users to manage and track the status of various sports matches. Users can add new upcoming matches with relevant details such as the teams, league, venue, and timer. Once the timer for an upcoming match reaches zero, the match will be marked as "Live" and displayed under live matches. This helps users keep track of both upcoming and live matches in real-time.

## Features
- **Add New Match**: Users can add new upcoming matches, including details like teams, league, venue, and a timer.
- **Live Match Update**: Matches are automatically moved to "Live" once the timer reaches zero. A notification is shown when the match becomes live.
- **Local Storage**: Matches are stored in the browser's local storage to persist the data across sessions.
- **Responsive Design**: The app is designed to be mobile-friendly and will adjust based on screen size.

## Technologies Used
- **React**: Used for building the user interface with state management via hooks (`useState`, `useEffect`).
- **CSS**: Used for styling the modal and match cards to create a responsive and modern design.

## Setup Instructions

1. **Clone the Repository:**
   Clone the repository to your local machine using Git:
   ```bash
   git clone https://github.com/your-username/match-scheduler-app.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd match-scheduler-app
   ```

3. **Install Dependencies:**
   Install the necessary dependencies using npm or yarn:
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   Run the development server to launch the app in your browser:
   ```bash
   npm start
   ```

   The app will be accessible at `http://localhost:3000/` in your browser.

## How It Works

1. **Add a Match**: Click on the "Add Match" button, and a modal will open where you can enter the teams, league, venue, and a countdown timer.
   
2. **Match Timer**: The countdown timer for each upcoming match will decrement every second. Once the timer hits zero, the match will automatically transition to a "Live Match" and show a notification.
   
3. **Match Categories**:
   - **Upcoming Matches**: These matches are displayed with the remaining time until they go live.
   - **Live Matches**: Matches that have started (timer reaches zero) are shown under "Live Matches."

4. **Local Storage**: Matches are stored in the browser's local storage, so even if you refresh the page, your matches will persist.

## Future Improvements
- **Timer Customization**: Allow users to specify different timer intervals or automatic start times.
- **Match Results**: Add the ability to input results for matches once they have finished.
- **User Authentication**: Allow users to create accounts and save their match schedules securely.

## Contributing
Feel free to fork this repository, create a branch, and submit pull requests with improvements or bug fixes.
