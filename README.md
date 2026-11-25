# Modern Skin

A small, self-contained skincare questionnaire based on the ModernSkincare App spreadsheet.

## Open it

Open `index.html` in a current browser. There are no dependencies, accounts, or server setup steps. The answers are used in the page to create a routine guide and are not stored or sent anywhere. Use **Save or print my guide** to save a copy from the browser's print dialog.

The results include product ideas from the spreadsheet, matched to the selected concern and budget band. Product prices and availability are not checked live. The recommendations are general skincare education, not diagnosis or medical advice.

Page appearance is in `styles.css`; edit that file to change colors, spacing, typography, and responsive layout. Questionnaire behavior and recommendation logic are in `app.js`.

## Amazon affiliate links

Add the correct product URLs to each product's `urls` array in `app.js`, in the same order as its `names` array: under $50, $50–$100, then $100+. Use your Amazon Associates Special Links, such as an `amazon.com` URL with your `tag` parameter or an `amzn.to` short link. The app makes secure Amazon links clickable, including `link.amazon` and `amzn.to` short links, labels short links and tagged URLs as paid links, and displays Amazon's associate disclosure when an affiliate link is among the recommendations.

Brand images live in `assets/`: `logo.png` is the header wordmark, `favicon.png` is the browser icon and hero mark, and `palette.png` is the color reference. Palette colors are set as variables at the top of `styles.css`.
