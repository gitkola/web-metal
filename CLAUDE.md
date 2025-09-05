# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Flutter web application called "tonmet" - a metal calculator that allows users to calculate weight, length, cost, and other parameters of metal profiles, sheets, pipes, etc. Users can also send orders through the application.

## Architecture

This repository contains a **compiled Flutter web application** (build output), not source code. The structure includes:

- `index.html` - Main HTML entry point
- `main.dart.js` - Compiled Dart/Flutter code (3MB+ minified)
- `flutter_service_worker.js` - Service worker for PWA functionality
- `assets/` - Flutter assets including images, fonts, and asset manifests
- `canvaskit/` - Flutter's CanvasKit rendering engine
- `manifest.json` - PWA manifest for mobile app-like experience

## Development Notes

**Important**: This appears to be a production build directory, not a development environment. There are no source files, build scripts, or development dependencies present.

For development work, you would typically need:
- The original Flutter source code (`.dart` files)
- `pubspec.yaml` for dependencies
- Flutter development environment

## Application Details

- App Name: tonmet
- Version: 2.12.2
- Build Number: 17
- Type: Progressive Web App (PWA)
- Rendering: Flutter Web with CanvasKit

The application includes calculators for various metal profiles including angles, beams, channels, tubes, sheets, and specialized profiles like PVL, rails, and fittings.

## GitHub Pages Deployment

This Flutter web app is configured for GitHub Pages deployment at `/web-metal/` subdirectory:

- **Base href**: Set to `/web-metal/` in both `index.html` and `404.html`
- **404.html**: Required for Flutter web client-side routing on GitHub Pages
- **Asset paths**: All relative paths (icons, manifest, JS files) resolve correctly with the base href

### Deployment URL
- Live site: `https://gitkola.github.io/web-metal/`
- Local development: `http://localhost:3000` (requires different base href: `/`)