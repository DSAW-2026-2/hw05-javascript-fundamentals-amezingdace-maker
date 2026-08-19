# AI Log — HW05 JavaScript Fundamentals

## AI usage

### Prompt

I asked AI to help implement JavaScript interactivity for the CineHub website using vanilla JavaScript. The requested features were a real-time movie search, form validation with visible error messages, a dark/light mode toggle, and a Ctrl + K keyboard shortcut to focus the search bar.

### Generated result

The AI suggested using `querySelector` to select DOM elements and `addEventListener` for the interactions. It also suggested separating the validation logic into `validation.js` and importing it into `main.js`.

### What I did not understand immediately

At first, I did not completely understand how ES modules worked, especially this line:

```js
import { validateForm } from "./validation.js";