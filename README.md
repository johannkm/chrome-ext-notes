# Chrome Notes Extension
A Terrapin Hackers hacktorial from Johann Miller and Omkar Konaraddi.

### Summary
We'll build a basic Chrome extension that lets you write notes for individual webpages.

### Requirements
* Download [Chrome](https://www.google.com/chrome/browser/desktop/)
* Download a text editor (we recommend [Atom](https://atom.io/))
* Basic HTML, CSS, and JavaScript background

## Instructions

### 1. Create a new directory
Create a folder named `chrome-ext-notes`. This is where we will keep all the files for the extension.

### 2. Set up the manifest
Inside `chrome-ext-notes`, create a file called `manifest.json` with the following contents:
```language-json
    {
      "manifest_version": 2,
      "name": "Web Notes",
      "description": "Save notes for a webpage.",
      "version": "1.0",
      "browser_action": {
        "default_popup": "popup.html"
      }
    }
```
##### Why?
Each chrome extension needs a `manifest.json` file to provide important information for chrome to compile the chrome extension package properly.

### 3. Set up the HTML
Create a file called `popup.html` with the following contents.
```language-html
    <!doctype html>
    <html>
      <head>
        <title>Notes App</title>
      </head>
      <body>
        <h3>Notes</h3>
        <textarea></textarea>
      </body>
    </html>
```
##### Why?
A chrome extension should have a `popup.html` file for the popup to appear when the chrome extension's icon is clicked.

### 4. Load the extension in Chrome
Go to [chrome://extensions](chrome://extensions) in a new tab. Click the "Load unpacked extension..." button. In the file selector, select the `chrome-ext-notes` folder.
A new button should appear in Chrome to the right of the url bar. If you click it, your `popup.html` should appear.

You now have the basis of a Chrome extension. Follow our instructions [here](#) to continue the notes project.
