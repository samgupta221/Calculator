# Calculator

A responsive, keyboard-friendly, and modern **Calculator Web Application** built using **HTML5, CSS3, and JavaScript (ES6)**. It supports basic arithmetic operations through both on-screen buttons and keyboard input.

## Features

- Addition, subtraction, multiplication, and division
- Decimal number support
- Keyboard input support
- `Enter` / `=` to calculate
- `Escape` to clear the calculator
- `Backspace` to delete the last digit
- `AC` button to reset the calculator
- Prevents multiple decimal points
- Responsive design for smaller screens
- Modern and minimal user interface
- Hover and button interaction effects

The calculator's JavaScript handles number input, operations, calculation, clearing, deletion, keyboard events, and display updates. script script

## Tech Stack

- **HTML5** – Structure and semantic markup
- **CSS3** – Styling, CSS Grid, responsive design, variables, and animations
- **JavaScript (ES6)** – DOM manipulation, calculations, and event handling Readme

## Supported Operations

| Operation | Button | Keyboard |
|---|---|---|
| Addition | `+` | `+` |
| Subtraction | `−` | `-` |
| Multiplication | `×` | `*` |
| Division | `÷` | `/` |
| Decimal | `.` | `.` |
| Calculate | `=` | `Enter` / `=` |
| Clear | `AC` | `Escape` |
| Delete | `DEL` | `Backspace` |

The HTML interface includes dedicated number, operator, clear, delete, decimal, and equals buttons. index index

## Project Structure

```text
Calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project

Navigate to the project folder:

```bash
cd Calculator
```

### 3. Run the application

Simply open:

```text
index.html
```

in any modern web browser.

No backend or package installation is required.

## UI Design

The calculator uses a centered layout with a gradient page background, dark display area, grid-based buttons, and responsive sizing. style style

The interface also includes different visual styling for operators and the equals button, along with hover and active effects. style

## Keyboard Controls

You can operate the calculator without using the mouse:

```text
0 - 9       → Numbers
+           → Addition
-           → Subtraction
*           → Multiplication
/           → Division
.           → Decimal
Enter / =   → Calculate
Escape      → Clear
Backspace   → Delete
```

## Core Logic

The calculator maintains four main states:

```javascript
currentOperand
previousOperand
operation
resetScreen
```

These variables control the current value, previous value, selected operation, and whether the display should reset for the next number. script

## Responsive Design

The calculator adapts to smaller screens using a CSS media query. On screens narrower than 350px, the calculator expands to the available width. style

## Future Improvements

- Calculation history
- Percentage operation
- Positive/negative toggle
- Scientific calculator mode
- Dark/light theme switch
- Memory functions
- Improved error handling for division by zero
- Deploy the project using GitHub Pages or Netlify
