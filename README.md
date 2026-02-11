# Liga MX Squad Viewer

A dynamic web application built with **Node.js** that connects to a sports API to display Mexican Primera Division teams and their current player squads.

## Tech Stack
* **Backend:** Node.js & Express
* **Frontend:** EJS (Embedded JavaScript) & CSS3
* **HTTP Client:** Axios for API requests

## Features
* **Team Gallery:** Browse all 18 Liga MX teams with their official badges and stadium info.
* **Dynamic Routing:** Access specific team squads through unique ID-based routes.
* **Responsive Design:** Clean card-based interface for both teams and players.

## Important Note on Data
This project uses a **free tier API** from *TheSportsDB*. Please be aware of the following:
1. **Missing Images:** Some players may not have an action photo available in the free database.
2. **Incomplete Squads:** Squad lists are maintained by the community and might not reflect the very latest transfers.
3. **Fallback System:** I implemented a custom "image fallback" logic using JavaScript's `onerror` event to ensure the app always displays a professional placeholder icon instead of a broken image link.

## 📸 Project Preview

### Main Dashboard (Teams)
The home page displays all Mexican Primera Division clubs with high-quality badges and stadium details.
![Main Dashboard]<img width="1261" height="688" alt="Screenshot 2026-02-11 at 1 45 53 a m" src="https://github.com/user-attachments/assets/d79a2216-113e-44b3-96f0-af490eef2bfc" />


### Squad View (Players)
By clicking on any team, you access the full squad roster. I implemented a silhouette fallback for players without an official photo to maintain a consistent UI.
![Squad View] <img width="1256" height="687" alt="Screenshot 2026-02-11 at 1 46 00 a m" src="https://github.com/user-attachments/assets/a3abed48-1a3f-44fa-9d7e-0c09c2d1db2d" />


## 
How to Run
1. Clone this repository.
2. Run `npm install` to download dependencies.
3. Start the server with `npm run devStart`.
4. Open `http://localhost:3000` in your browser.
