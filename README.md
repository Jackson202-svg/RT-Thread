# 🌍 World Clock - Time Zone Project

A simple, responsive World Clock built with **HTML, CSS, and Vanilla JavaScript**. This project demonstrates how to handle international time zones using the JavaScript `Intl` API.

## 🚀 Features
- Real-time clock updates every second.
- Support for multiple global time zones.
- Responsive CSS Grid layout.
- No external libraries (No Moment.js or Day.js).

## 🛠️ Technologies Used
- **HTML5**: Semantic structure.
- **CSS3**: Flexbox/Grid for layout.
- **JavaScript**: `Date()` object and `toLocaleString()` for time calculations.

## 📖 How it Works
The core logic relies on the `toLocaleString` method, which allows us to pass a specific `timeZone` string (IANA time zone database).

```javascript
date.toLocaleString("en-US", { timeZone: "America/New_York" });
