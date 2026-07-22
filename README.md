# Kumusta Mundo: Ang Kaarawan ng Lokal Networks sa Pilipinas
**CSARCH2 | 3rd Term AY 2025-2026 | Final Milestone Submission (July 2026)**  
*A Virtual Museum Exhibit & Interactive Architectural Simulation tracing the historic birth and 30-year evolution of Philippine Internet Connectivity.*

**Submitted by:**
- [Dabuit, Daniel Jedrick C.](https://github.com/danueli)
- [Go, John William D.](https://github.com/johnwilliam-go)
- [Liwanag, Ram Miguel C.](https://github.com/Rammy-errorlol)
- [Lobo, Shirley Marie A.](https://github.com/SAM-lvl1)
- [Uy, Tara Ysabel P.](https://github.com/tartar121)

**Links:**  
* **Live Deployment Link:** [https://tartar121.github.io/KumustaMundo/](https://tartar121.github.io/KumustaMundo/)  
* **GitHub Repository:** [https://github.com/tartar121/KumustaMundo](https://github.com/tartar121/KumustaMundo)

---

## Challenges

Our first challenge was converting a groupmate's vanilla HTML prototype into a proper React component inside Astro's architecture. The original file used `document.getElementById` and global variables, which do not work in React, so all state logic had to be rewritten using `useState` and `useEffect`. Even after the conversion, the simulation looked correct but was completely non-interactive. The fix was adding `client:load` to the component tag in the MDX file, since Astro renders React as static HTML by default and ships no JavaScript without a client directive.

Balancing the development schedule was another challenge. The team had to manage overlapping deliverables, machine projects, and exams across CSINTSY, CSMODEL, LBYARCH, and LBYTRN2 at the same time, which required careful coordination to keep progress moving.

Getting the layout right took more work than expected. The museum template's `global.css` uses a white background, padding, border, and box shadow on the `.article` element, which clashed with our vintage TV aesthetic. We had to override nearly every layout class through a scoped `<style>` block in the MDX file without touching `ExhibitLayout.astro` or `HomepageLayout.astro` since those are shared across all groups.

Mobile responsiveness required a lot of work. The two-column simulation grid was compressing the map and Sprint Network box at anything below full desktop width, and the PLDT node dot was too small to reliably tap on a phone. We raised the responsive breakpoint to 900px, made heights fluid with `clamp()`, and added `@media` overrides at 600px and 400px for minimum tap sizes. The SVG connection line also had to be recalculated on resize since it relies on `getBoundingClientRect` for its coordinates.

The speed comparison tab in `InternetHistory.jsx` had a small CSS scoping issue. The subtitle text was invisible because the `.article p` rule in our MDX style block had `color: #e8dbb5 !important`, producing light cream text on a light cream background. We fixed it by adding `.exhibit-chart-root p` as a more specific selector. Separately, the chart bars were not rendering because the `width` style was referencing a key name that did not match the data array.

The `.glb` 3D model for the Smart Internet Cafe had to be declared in `astro.config.mjs` via `assetsInclude: ['**/*.glb']` because Vite drops unrecognized extensions silently. We also wrapped `<model-viewer>` in a React component since web components need a browser environment to register, which Astro's SSR pass does not provide.

Background music worked on first load but would not resume after navigating away and returning, even with `sessionStorage` tracking prior interaction. Browsers appear to reset autoplay permissions on page navigation, so `audio.play()` on remount was being silently blocked. We switched to `mousemove` and `touchstart` listeners instead, which count as user gestures for autoplay purposes and let the audio resume naturally when the user returns to the page.

---

## Aha Moments & Things Learned

The biggest realization was how intentional Astro's model is. React components are server-rendered to HTML by default and ship with no JavaScript unless you opt in with a client directive. Once we understood this, a lot of bugs made sense: components that looked right but did nothing, state that reset unexpectedly, event listeners that never fired.

We also learned that CSS custom properties participate in the cascade. Defining `--text-secondary` inside `.sim-root` does not make it globally available, and components outside that selector tree get an empty string. Shared variables should always go on `:root`.

The `astro.config.mjs` `base` value also needs to exactly match the GitHub repository name, or every asset path returns a 404 on the deployed site even if everything works locally.

---

## Creative Development

The exhibit is built around the idea of encountering the 1994 Philippine internet connection through a recovered archive terminal. The vintage TV scanline overlay, IBM Plex Mono typography, warm sepia and brown palette, and archive terminal framing were chosen to make the historical content feel like something recovered from a server room rather than written for a textbook. The blinking cursor after headings reinforces the terminal metaphor without being too distracting.

The simulation puts the user in the position of the engineers working that night, selecting the PLDT Makati node, establishing the Sprint link, and watching the TCP/IP handshake print line by line before the "Philippines Online" banner appears. The pacing mirrors the actual sequence of events on March 29, 1994 at 1:15 AM.

The 3D Smart Internet Cafe model grounds the post-1994 story in a physical artifact. The mobile container van that Smart Communications deployed to bring internet access to remote provinces represents the democratization phase that followed, shifting the exhibit from "this is when it happened" to "this is what it looked like for ordinary Filipinos."

Background audio deepens immersion and is kept subtle, with a floating mute button so users stay in control.

---

## Disclosure on the Use of AI/LLM

In compliance with academic integrity guidelines, Large Language Models (LLMs) were used during development for technical troubleshooting, code refactoring, and documentation organization:

**Anthropic Claude:** Assisted with debugging, troubleshooting, styling cleanup, React/Astro integration, and 3D model display logic, including migrating model rendering from Three.js to Google's `<model-viewer>`.

**Google Gemini:** Assisted with background audio setup and prototype-to-React conversion guidance.

*All AI-generated outputs were reviewed, tested, and refined by the project members to ensure technical accuracy, consistency with the project's requirements, and originality of the final implementation. The project's design, development decisions, and overall implementation remain the original work of the group.*

---

## Local Setup

```bash
git clone https://github.com/tartar121/KumustaMundo.git
cd KumustaMundo
npm install
npm run dev
```

---

# Mid-Milestone Development Log (July 7, 2026)
## What We Built
- Converted the HTML prototype into a React component (`InternetSimulation.jsx`) embedded in an Astro/MDX page
- Implemented a full dark theme that overrides the museum template styling
- Made the simulation mobile-responsive with fluid `clamp()` sizing
- Added `client:load` directive so the React interactivity actually runs in Astro
- Added the Initial Implementation of the interactive model 
- Built `SmartCafeViewer.jsx` — a React component wrapping Google's `<model-viewer>` web component to display the `.glb` 3D model

## Aha Moments
- Astro renders React as static HTML by default so without `client:load`, the simulation looks fine but nothing is clickable
- The museum template's `.article` white box was fighting our dark theme; hiding the TOC/header and zeroing out the article padding fixed the layout clash
- `clamp()` for sizing is cleaner than multiple media query breakpoints
- `.glb` files are not recognized by Vite by default — had to explicitly declare them as an asset type in `astro.config.mjs` via `assetsInclude: ['**/*.glb']`
- `<model-viewer>` (Google's web component) is more practical than raw Three.js for embedding a single inspectable 3D model
- Building a 3D model from scratch is genuinely difficult and time-consuming 

## Challenges
- Getting the simulation to break out of the article container width without breaking the text content layout around it
- The SVG connection line coordinates use `getBoundingClientRect` which depends on the actual rendered size of the canvas — required careful responsive sizing
- Shifting the 3D model from a standalone HTML file to Astro required switching from a script-tag approach to `<model-viewer>` as a React-wrapped web component
- The `astro.config.mjs` had an `Astro.glob()` call in `HomepageLayout.astro` that isn't valid in Astro 6 — fixed with a custom Vite plugin (`fixAstroGlob`) that rewrites it to `import.meta.glob()` at build time

## References Used
- Ayson Chronicles — primary account of the night Benjie Tan connected the Philippines to the Internet
- The Urban Roamer — broader narrative of Philippine internet history (20 Years Online)
- PhilStar — Broadbanding the Countryside (ISP expansion context)
- Storage Providers Inc — Smart Communications Internet Cafe documentation

## Next Steps (for Final Submission)
- Refine overall visual theme — a groupmate is drafting design proposals for a more cohesive look (possibly retro 1990s/CRT aesthetic to match the historic subject matter or a summery vibe)
- Improve mobile layout further based on testing
- Expand and polish both interactive elements
- Integrate the Smart Café viewer into the main exhibit page
---

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

* **Component Name:** *(Smart) Internet Cafe*
* **Central Website Compatibility Context:** This feature is built using Three.js and JavaScript and embedded within the Astro-based exhibit as an interactive React component. The experience utilizes a 3D model created in Blender, allowing visitors to freely explore a virtual reconstruction of a Smart Internet Café deployment unit. The model is based on publicly documented Smart Communications and Storage Providers Inc. mobile Internet café initiatives and includes both the exterior and interior layouts of the storage van alongside an interpreted networking setup.

Sample Images:

**Front**
![alt text](SPI-Smart-Communications-Gallery11.jpg)

**Back**
![alt text](SPI-Smart-Communications-Gallery9.jpg)

**Inside**

![alt text](SPI-Smart-Communications-Gallery8.jpg)

* All assets are rendered client-side, eliminating the need for external APIs or backend services and ensuring compatibility with the central virtual museum website. The component is designed to support desktop and mobile devices while maintaining smooth performance through optimized 3D assets and responsive controls.

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
* **Desktop Layout Configuration**: The structure of the exhibit uses a side-by-side layout with the text content on the left and a sticky interactive simulation on the right. This guides the user through the Philippine Internet connection timeline in a continuous flow.

* **Tablet Layout Behavior**: The desktop layout configuration will be used for the landscape orientation of the tablet, while the mobile layout will be utilized for the portrait orientation of the tablet.

* **Mobile Layout Structure**: The elements of the exhibit will follow a single column layout which is perfectly designed for smartphones. The interactive simulation is positioned as a sticky element within the layout, remaining visible alongside the scrolling content that guides the user throughout the exhibit.

* **Responsive Navigation Design**: For desktop layout, a sticky navigation bar will be implemented to provide quick access to major sections of the exhibit. As for the mobile layout, a collapsible menu is used to save space for the other elements of the exhibit.

* **Media and Interactive Component Scaling**: The webpage will have a responsive layout where it adapts smoothly to different screen sizes. This ensures consistent readability, proportional scaling, and usability across all screen sizes.

* **Accessibility Considerations**: During the development of the exhibit, the sizes of text and clickable elements (if any), will be adjusted until it's comfortably readable and touch-friendly for the user. Lastly, the spacing of each element shall be adjusted until all content is visually balanced, ensuring an intuitive user experience across all devices.
---
## Style Guide Snapshot – Proposed Virtual Exhibit Design Layout

![alt text](image1.png)
![alt text](image2.png)
![alt text](image3.png)
![alt text](image4.png)
![alt text](image5.png)

Interactive 3D Model: https://app.spline.design/file/8426f53a-b09e-41ed-9bab-772b7301aba4

Figma Representation: https://www.figma.com/make/oOeB9LGiYgIPHvvayizKVZ/Interactive-Internet-History-Simulation?t=XEQHxV9rSlF7AfFR-0

**Disclaimer**: The visualizations provided is AI generated using the Figma AI Website Generator for the website and Meshy AI 3D generator for the (Smart) Internet Cafe. This representation will only be used for the proposal stage of the project

---
## References
* [The Urban Roamer: Internet in the Philippines - 20 Years Online](https://www.theurbanroamer.com/internet-in-the-philippines-20-years-online/)
* [The Ayson Chronicles: The Night Benjie Tan Hooked up the Philippines to the Internet](https://jimayson.wordpress.com/2011/08/13/the-night-benjie-hooked-up-the-philippines-to-the-internet/)
* [PhilStar: 'Broadbanding the Country Side'](https://www.philstar.com/business/telecoms/2006/07/08/346240/smart-click-145broadbanding146-countryside?fbclid=IwY2xjawSfOLlleHRuA2FlbQIxMABicmlkETFMT2Z6c3V5TjhqTDNLRnR5c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtJRUukgaUhJPYIBIoHdc4-gt6I1jg4wDjodWU2OGsFGzjE6k8XaWxFvxSqj_aem_eTz5VuNknJzzfyG3-DEvGA)
* [Storage Providers Inc - Smart Communications Inc. Internet Cafe](https://storageproviders.ph/smart-communications-inc/?fbclid=IwY2xjawSfOO1leHRuA2FlbQIxMABicmlkETFMT2Z6c3V5TjhqTDNLRnR5c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtJRUukgaUhJPYIBIoHdc4-gt6I1jg4wDjodWU2OGsFGzjE6k8XaWxFvxSqj_aem_eTz5VuNknJzzfyG3-DEvGA)

> **Note:** This repository serves as the initial proposal and development hub for Group 9's virtual museum exhibit page. All documentation, incremental plans, and component files will be managed here. The details outlined herein are subject to change prior to final submission.
