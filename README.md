# SDA Guide (React)

An interactive single-page web application based on the *Tech Leader's Guide to Streamlining SDLC with Software Development Analytics*. It presents every section of the guide with scroll navigation, a comparison table, feature cards and a **live dashboard demo** (DORA metrics and sprint overview) built with chart components.

> **Attribution:** based on the Keypup guide *Streamlining SDLC with Software Development Analytics - Tech Leader's Guide* (2023). The content is summarized in my own words; all rights to the original guide belong to Keypup (keypup.io). Dashboard numbers are made-up sample data. The code is my own.

## Tech Stack
| Tool | Purpose |
|---|---|
| React 18 | UI components and state |
| Vite 5 | dev server and production build |
| Recharts | area, bar and pie charts in the dashboards |
| Framer Motion | scroll-reveal and entrance animations |
| Lucide React | icons |
| Nginx (alpine) | serves the built app inside Docker |
| Docker (multi-stage) and Docker Compose | build and run |
| GitHub Actions | builds the image and smoke-tests it on every push |

## Why Docker matters here
The app needs Node.js and about 250 npm packages to build, but only static files to run. The **multi-stage Dockerfile** builds the app in a Node image (`npm install` and `npm run build`) and copies only the result into a small Nginx image. Anyone can run the project with one command, without installing Node.

## Project Structure
```
src/
  main.jsx                 # entry point
  App.jsx                  # page layout
  data/content.js          # all text and sample data
  components/              # Navbar, Hero, Block, Reveal, Dashboard
  styles.css               # styling
index.html                 # page shell (title, meta, favicon)
vite.config.js             # Vite config
Dockerfile                 # multi-stage build (node -> nginx)
nginx.conf                 # web server config (port 80, gzip, caching)
docker-compose.yml         # one-command run
Makefile                   # build / run / stop
.github/workflows/         # CI: docker build + smoke test
docs/                      # technical note + screenshots
```

## Run with Docker (standard web port 80)
```bash
docker build -t sda-guide .
docker run -d --name sda-guide -p 80:80 sda-guide
```
Open http://localhost

Or: `docker compose up -d --build`  /  `make build && make run`

If port 80 is busy, use `-p 8080:80` and open http://localhost:8080

## Run without Docker (development)
Requires Node.js 20+.
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Stop and clean up
```bash
docker stop sda-guide && docker rm sda-guide
# or: docker compose down   /   make stop
```

## Configuration
| Setting | Value | Description |
|---|---|---|
| Host port | 80 | Change with `-p 8080:80` |
| Container port | 80 | Nginx (see `nginx.conf`) |

## How to test
1. Open http://localhost: the tab title is "Streamlining SDLC with Software Development Analytics".
2. Scroll or use the menu: the active section is highlighted.
3. In **Key features**, switch between *DORA metrics* and *Sprint overview* and hover over the charts.
4. Resize the window (or open on a phone): the menu becomes a hamburger button.
5. Health check: `docker ps` shows the container as `healthy` after a few seconds.

## License
MIT for the code. The guide's original text and brand belong to Keypup.
