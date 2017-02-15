# Naughty Notes
A Terrapin Hackers hacktorial from Johann Miller and Omkar Konaraddi

### Requirements
Download [Chrome](https://www.google.com/chrome/browser/desktop/)
<br/> Download a text editor (we recommend [Atom](https://atom.io/))
<br/> Basic HTML, CSS, and JavaScript background

## 1. Set up the manifest
Create a file called "manifest.json".

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

#### Why the manifest?
Each chrome extension needs a manifest file to provide important information for chrome to compile the chrome extension package properly.

## 2.
