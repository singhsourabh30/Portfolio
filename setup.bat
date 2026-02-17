@echo off
REM Portfolio Setup Script for Windows
REM This script installs Node.js and project dependencies

echo.
echo ========================================
echo SAURABH SINGH PORTFOLIO - SETUP SCRIPT
echo ========================================
echo.

REM Check if Node.js is installed
echo Checking for Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Node.js is not installed.
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Download the LTS (Long Term Support) version.
    echo.
    echo After installation, please run this script again.
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js found:
node --version
echo.

REM Check if npm is installed
echo Checking for npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] npm is not installed.
    echo Please ensure Node.js is properly installed.
    echo.
    pause
    exit /b 1
)

echo [OK] npm found:
npm --version
echo.

REM Install dependencies
echo Installing project dependencies...
echo This may take a few minutes...
echo.
cd /d "%~dp0"
call npm install

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to install dependencies.
    echo Please check your internet connection and try again.
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo INSTALLATION COMPLETE!
echo ========================================
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo The portfolio will be available at:
echo   http://localhost:3000
echo.
echo To build for production, run:
echo   npm run build
echo   npm start
echo.
pause
