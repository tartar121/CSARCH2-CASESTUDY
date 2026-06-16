# CSARCH2 Virtual Exhibit Case Study Proposal
### 3rd Term AY 2025-2026
---
**S05 Group 9**

**GitHub Repository Link:** [https://github.com/tartar121/CSARCH2-CASESTUDY](https://github.com/tartar121/CSARCH2-CASESTUDY)

### Members
| Name | GitHub |
| :--- | :--- |
| Dabuit, Daniel Jedrick C. | [@danueli](https://github.com/danueli) |
| Go, John William D. | [@johnwilliam-go](https://github.com/johnwilliam-go) |
| Liwanag, Ram Miguel C. | [@Rammy-errorlol](https://github.com/Rammy-errorlol) |
| Lobo, Shirley Marie A. | [@SAM-lvl1](https://github.com/SAM-lvl1) |
| Uy, Tara Ysabel P. | [@tartar121](https://github.com/tartar121) |
---
### Project Overview
* **Category:** Historical Computing
* **Topic Theme:** Computing in the Philippines - Local Tech History
* **Project Title:** *Kumusta Mundo: Ang Kaarawan ng Lokal Networks sa Pilipinas*

### Historical Context & Exhibit Discussion:
Instead of just repeating the usual Western-centric history of the internet like ARPANET or the World Wide Web, our exhibit focuses on a major milestone right here in the Philippines: **March 29, 1994, at 1:15 AM**.

At this exact time, local tech pioneers successfully linked a Cisco 7000 router from a PLDT facility in Makati to a 64 kbps Sprint link in the US, which officially marked the birth of the Philippine internet. Our project will look into the actual hardware challenges faced by the multi-institutional Philnet project, how local computer networks moved away from isolated Bulletin Board Systems (BBS), and how these early infrastructure decisions shaped the country's digital setup today.

### Tech Stack Plan
To ensure seamless integration into the central museum website platform, our development stack adheres strictly to the required core versions:
* **Environment Execution:** Node.js 26 (Major version requirement)
* **Framework Architecture:** Astro 6 (Forked from the provided template repository)
* **Content Engine:** MDX (Markdown Extended) for embedding structured interactive elements into documentation pages
* **Interactive State Engine:** React (`.jsx` / `.tsx` functional components) paired with TypeScript to safely handle state variables, console input logs, and audio cues
* **Styling Engine:** Tailwind CSS for fast utility rendering and responsive viewport fluid design

#### Proposed Interactive Element (Detailed Compatibility Specification)
* **Component Name:** *Think what to add here*
* **Central Website Compatibility Context:** This feature is built entirely as [explanation]

### Step-by-Step User Flow & Functionality Plan:
#### 1. Initial State — The Offline Philippines
Users are introduced to a visual representation of the Philippines' early computer network environment before 1994. The interface displays isolated local networks and Bulletin Board Systems (BBS) that operated independently without a direct connection to the global Internet. A short historical introduction provides context on the limitations of digital communication during this period.

#### 2. Selecting the Connection Route
Users interact with a network map by selecting the PLDT facility in Makati and the Sprint network endpoint in the United States. The simulation highlights the international connection route that would eventually link the Philippines to the global Internet.

#### 3. Establishing the Link
Users initiate the historical connection by pressing the **"Connect to the World"** button. An animated data packet travels through the Cisco 7000 router and across the 64 kbps Sprint connection. Audio cues and visual feedback simulate the process of a successful network initialization.

#### 4. The Historic Moment — March 29, 1994, 1:15 AM
Once the connection is successfully established, the interface transitions into a commemorative scene marking the Philippines' first official connection to the Internet. A timeline marker appears to emphasize the historical significance of March 29, 1994, at 1:15 AM.

#### 5. Exploring the Impact
Users can explore interactive timeline cards that showcase the developments following the birth of the Philippine Internet, including:
* The emergence and growth of Internet Service Providers (ISPs)
* The expansion of national Internet infrastructure
* The rise of online communities and digital communication
* The transition to modern broadband and mobile Internet technologies

#### 6. Replay & Compare
Users may restart the simulation to experience the historic connection process again. An optional comparison feature allows users to compare the original 64 kbps connection with modern Internet speeds, illustrating the technological progress of the Philippines' digital infrastructure.

---
## Mobile-Responsive Layout Plan
* **Desktop Layout Configuration:** Describe how content and interactive elements will be arranged on larger screens (e.g., side-by-side columns, fixed widgets, split panels).
* **Tablet Layout Behavior:** Explain how the exhibit should adapt to medium-sized screens, including any resizing, repositioning, or stacking of components.
* **Mobile Layout Structure:** Describe how content will be reorganized on smartphones (e.g., single-column layout, order of sections, placement of interactive elements).
* **Responsive Navigation Design:** Explain how users will navigate the exhibit on smaller devices (e.g., collapsible menu, sticky navigation, simplified controls).
* **Media and Interactive Component Scaling:** Describe how images, diagrams, animations, and simulations should resize or adjust to maintain usability across different screen sizes.
* **Accessibility Considerations:** Specify any mobile accessibility features to prioritize, such as readable text sizes, touch-friendly buttons, sufficient spacing, and screen-reader compatibility.
---
## Tentative Style Guide Snapshot – Proposed Virtual Exhibit Design Layout
* **Visual Motif:** idea 
* **Color Palette Scheme:**
  * **Primary Background Canvas:** Color
  * **Core Typography:** Color
* **Typography Hierarchy:**
  * **Section Headings:** a font
  * **Body Narrative Text:** different font from heading
 * (put snapshot/picture of design)
---
## References
* [The Urban Roamer: Internet in the Philippines - 20 Years Online](https://www.theurbanroamer.com/internet-in-the-philippines-20-years-online/)
* [The Ayson Chronicles: The Night Benjie Tan Hooked up the Philippines to the Internet](https://jimayson.wordpress.com/2011/08/13/the-night-benjie-hooked-up-the-philippines-to-the-internet/)

> **Note:** This repository serves as the initial proposal and development hub for Group 9's virtual museum exhibit page. All documentation, incremental plans, and component files will be managed here. The details outlined herein are subject to change prior to final submission.
