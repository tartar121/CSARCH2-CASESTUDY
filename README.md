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
* **Central Website Compatibility Context:** This feature is to be built by launching a website with the use of Three.js and Javascript. The interactive model is built using blender where the audience can interact by looking into the internet cafe's interpreted architecture. The model is a near replica of the actual models provided by Smart and Storage Providers Inc. which consists of the storage van's interior and exterior alongside the interpreted setup. This model aims to provide context into the first-mover action in providing internet access to provinces and remote areas in the late 2000's.

Sample Images:

**Front**
![alt text](SPI-Smart-Communications-Gallery11.jpg)

**Back**
![alt text](SPI-Smart-Communications-Gallery9.jpg)

**Inside**
![alt text](SPI-Smart-Communications-Gallery8.jpg)

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
* [PhilStar: 'Broadbanding the Country Side'] (https://www.philstar.com/business/telecoms/2006/07/08/346240/smart-click-145broadbanding146-countryside?fbclid=IwY2xjawSfOLlleHRuA2FlbQIxMABicmlkETFMT2Z6c3V5TjhqTDNLRnR5c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtJRUukgaUhJPYIBIoHdc4-gt6I1jg4wDjodWU2OGsFGzjE6k8XaWxFvxSqj_aem_eTz5VuNknJzzfyG3-DEvGA)
* [Storage Providers Inc - Smart Communications Inc. Internet Cafe] (https://storageproviders.ph/smart-communications-inc/?fbclid=IwY2xjawSfOO1leHRuA2FlbQIxMABicmlkETFMT2Z6c3V5TjhqTDNLRnR5c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtJRUukgaUhJPYIBIoHdc4-gt6I1jg4wDjodWU2OGsFGzjE6k8XaWxFvxSqj_aem_eTz5VuNknJzzfyG3-DEvGA)

> **Note:** This repository serves as the initial proposal and development hub for Group 9's virtual museum exhibit page. All documentation, incremental plans, and component files will be managed here. The details outlined herein are subject to change prior to final submission.
