# Naughty Notes
A Terrapin Hackers hacktorial from Johann Miller and Omkar Konaraddi

### Requirements
Download [Chrome](https://www.google.com/chrome/browser/desktop/)
<br/> Download a text editor (we recommend [Atom](https://atom.io/))
<br/> Basic HTML, CSS, and JavaScript background

## 1. Set up the manifest
Create a file called `manifest.json` with the following contents.
```language-json
    {
      "manifest_version": 2,

      "name": "Web Notes",
      "description": "Save notes for a webpage.",
      "version": "1.0",

      "browser_action": {
        "default_icon": "icon.png",
        "default_popup": "popup.html"
      },
      "permissions": [
        "activeTab",
        "storage"
      ]
    }
```
#### Why?
Each chrome extension needs a `manifest.json` file to provide important information for chrome to compile the chrome extension package properly.

## 2. Set up the HTML
Create a file called `popup.html` with the following contents.
```language-html
    <!doctype html>

    <html>
      <head>
        <title>Notes App</title>
        <script src="js/popup.js"></script>
        <script src="js/jquery-3.1.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <link href="css/main.css" rel="stylesheet" media="screen">
      </head>
      <body>
        <div class="container">
          <h3>Notes</h3>
          <textarea autofocus placeholder="Type notes" id="text" cols=35 rows=8></textarea>
          <button type="button" class="btn btn-danger" id="clear">Clear all</button>
          <button type="button" class="btn btn-primary" id="show">Show all</button>
          <div id="urlList"></div>
        </div>
      </body>
    </html>
```
#### Why?
A chrome extension should have a `popup.html` file for the popup to appear when the chrome extension's icon is clicked.
