# Graph Plotter

A full-stack web application that accepts X and Y axis data and plots interactive graphs. Built with NestJS, MongoDB, and Chart.js.

## Tech Stack

- **Backend:** NestJS (Node.js + TypeScript)
- **Database:** MongoDB + Mongoose
- **Frontend:** HTML + CSS + JavaScript + Chart.js
- **Tools:** Postman, MongoDB Compass, Git

## Features

- Plot line, bar, and scatter charts from custom data
- Save charts to MongoDB via REST API
- Load and delete saved charts
- 3 built-in sample datasets
- Full CRUD API tested via Postman

## Project Structure

```
src/
├── charts/
│   ├── dto/
│   │   ├── create-chart.dto.ts
│   │   └── update-chart.dto.ts
│   ├── chart.schema.ts
│   ├── charts.controller.ts
│   ├── charts.module.ts
│   └── charts.service.ts
├── app.module.ts
└── main.ts
public/
└── index.html
```

## Getting Started

### Prerequisites
- Node.js v20+
- MongoDB running locally on port 27017
- npm

### Installation

```bash
npm install
```

### Run

```bash
npm run start:dev
```

App runs at `http://localhost:3000`

## API Routes

| Method | Route | Description |
|---|---|---|
| POST | /api/charts | Create a new chart |
| GET | /api/charts | Get all charts |
| GET | /api/charts/:id | Get one chart |
| PATCH | /api/charts/:id | Update a chart |
| DELETE | /api/charts/:id | Delete a chart |

## Sample Request

```json
{
  "title": "Monthly Sales",
  "xLabel": "Month",
  "yLabel": "Revenue",
  "xData": [1, 2, 3, 4, 5, 6],
  "yData": [42, 55, 38, 70, 65, 80],
  "chartType": "bar"
}
```

## Author

Varun Suresh — [GitHub](https://github.com/Varun-2311)
