# React ResourceView Gantt Demo

A sample React application demonstrating a Syncfusion Gantt chart in **Resource View** with editable tasks and resource allocation.

## Overview

This repository contains a React demo that renders a Gantt chart in resource view using Syncfusion. The app highlights task scheduling, resource grouping, overallocation display, and drag-and-drop row management.

## Features

- Resource View with grouped resources
- Add, edit, delete tasks and taskbar editing
- Row drag-and-drop to reorder tasks
- Show/hide overallocation indicator
- Multi-taskbar visualization for assigned resources
- Custom tooltip template with start/end dates and task image
- Columns for task name, work, progress, resource group, start date, and duration
- Highlight weekends and use defined project start/end dates

## Installation

```bash
npm install
```

## Run locally

```bash
npm start
```

Open the app at `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deployment

```bash
npm run deploy
```

## Dependencies

- React `^16.11.0`
- `@syncfusion/ej2-react-gantt` `18.2.48`
- `react-scripts` `3.2.0`

## Notes

- `src/App.js` configures the Gantt component, toolbar actions, and resource/task fields.
- `src/data.js` provides `resourcesData` and `resourceCollection` used by the chart.
- The tooltip template references images from `public/images/`.
