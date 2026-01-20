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

Issue,Likely Cause,Solution
Clock is stuck,setInterval is missing or the function name is misspelled.,"Check that setInterval(updateTime, 1000) is at the bottom of your script."
Wrong Time,The zone string is incorrect.,"Use standard IANA names (e.g., America/New_York, not NYC)."
Blank Screen,JavaScript error before the loop.,Open Browser Console (F12) to check for syntax errors like missing commas.
CSS not loading,Incorrect file path.,"Ensure <link rel=""stylesheet"" href=""style.css""> matches your filename exactly."
