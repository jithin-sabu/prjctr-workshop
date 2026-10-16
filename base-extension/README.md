# My New Tab (the base)

A calm, custom Chrome new tab page with a greeting, live clock, quick links, and a "✨ Your idea goes here" placeholder for your own features.

It was built by opening an empty folder in an AI tool and sending the prompt in the [main README](../README.md#path-b-start-from-the-base).

## How to install

1. Download this repo (green **Code** button → **Download ZIP**), unzip it, and move this `base-extension` folder somewhere easy to find
2. Open Chrome and go to `chrome://extensions`
3. Turn on **Developer mode** (toggle in the top-right)
4. Click **Load unpacked** and select this `base-extension` folder
5. Open a new tab. Your custom page should appear

## Customise your name

Open `newtab.js` and change this line near the top:

```js
const YOUR_NAME = "Your Name";
```

Replace `"Your Name"` with your name, save the file, then on `chrome://extensions` click the refresh icon on **My New Tab**.

Or open this folder in your AI tool and ask it to do it for you. Then head back to the [main README](../README.md#6-add-your-own-features) to start adding features.

## Files

| File | What it does |
|------|----------------|
| `manifest.json` | Tells Chrome this is an extension and to override the new tab |
| `newtab.html` | Page structure |
| `newtab.css` | Look and layout |
| `newtab.js` | Greeting, clock, and quick links |
| `icons/` | Extension icons + site favicons for quick links |
