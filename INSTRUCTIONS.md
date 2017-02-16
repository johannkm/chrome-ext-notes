# Chrome Notes Extension
A Terrapin Hackers hacktorial from Johann Miller and Omkar Konaraddi.

### Summary
We'll build a basic Chrome extension that lets you write notes for individual webpages.

### Requirements
* [Google Chrome](https://www.google.com/chrome/browser/desktop/)
* A text editor (we recommend [Atom](https://atom.io/))
* Basic HTML and JavaScript background

# Instructions

### 1. Create a new directory
Create a folder named `chrome-ext-notes`. This is where we will keep all the files for the extension.

### 2. Set up the manifest
Inside `chrome-ext-notes`, create a file named `manifest.json` with the following contents:
```json
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
Create a file named `popup.html` with the following contents.
```html
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

##### Tip:
Any edits to your Html or JavaScript will automatically update in your extension.

### 5. Set up a JavaScript file
Create a file named `popup.js` with the following content:
```javascript
alert('Your javascript loaded');
```
Now, add the script to the head of `popup.html`.
```html
<head>
    <title>Notes App</title>
    <script type="text/javascript" src="popup.js"></script> <!--link to javascript-->
</head>
```
When you click the extension's button in Chrome, you should get a notification saying 'Your javascript loaded'.

##### Why?
JavaScript will let us add more functionality to the extension. Google does not allow inline JavaScript inside the html popup, so we need to create a new file.

### 6. Add save and clear buttons
We want to be able to save or delete any notes we take with the extension. We will add these 2 buttons to the body of `popup.html`.
```html
<body>
    <h3>Notes</h3>
    <textarea></textarea>
    <button id="saveButton">Save</button>
    <button id="clearButton">Clear</button>
</body>
```

We will use JavaScript to respond to button clicks. Remove the alert statement from `popup.js` and add the following:
```javascript
document.addEventListener('DOMContentLoaded', function() { //wait for all of the html to load

    document.getElementById('saveButton') //get the save button
        .addEventListener('click', function(){ //run this function on a click
            alert("todo: save");
        });
    document.getElementById('clearButton') //get the clear button
        .addEventListener('click', function(){ //run this function on a click
            alert("todo: clear");
        });

});
```
Test out the buttons in Chrome. You should get a notification when you click either button.

### 7. Save the notes with chrome.storage
We will save the notes locally using Chrome's storage API in JavaScript.

First we need to get the text that the user typed. Add an id to the textarea in `popup.html`:
```html
<textarea id="noteText"></textarea>
```
Now we can access the textarea in `popup.js`. Inside the 'DOMContentLoaded' function, above the button code, add:
```javascript
let textarea = document.getElementById('noteText');
```
We can now use `textarea.value` to get and set the text in the textarea.

##### Note:
The ES6 JavaScript keyword `let` acts like `var`, but the variable is only accessible within the code block instead of globally.

To save the text, we add this function to `popup.js`:
```javascript
function saveNotes(text){ //write note to local storage
    chrome.storage.local.set({ notes: text });
}
```
Chrome storage acts as a map with key-value pairs. In this case, we set 'notes' as the key and text as the value.

To retrieve the text we stored, add this function:
```javascript
function getNotes(){ //retrieve from local storage
    chrome.storage.local.get(function(data){
        if(data.notes){ //if the value exists
            return data.notes;
        }
        return '';
    });
}
```
Now we use these functions in the 'DOMContentLoaded' function. Under the `let textarea` line, add:
```javascript
textarea.value = getNotes();
```

And inside the click function for the save button, change `alert('todo: save')` to:
```javascript
saveNotes( textarea.value );
```

Your `popup.js` should now look like this:

```javascript
document.addEventListener('DOMContentLoaded', function() { //wait for all of the html to load
    let textarea = document.getElementById('noteText');
    textarea.value = getNotes(); //initialize with saved value
    document.getElementById('saveButton') //get the save button
        .addEventListener('click', function(){ //run this function on a click
            saveNotes( textarea.value );
        });
    document.getElementById('clearButton') //get the clear button
        .addEventListener('click', function(){ //run this function on a click
            alert("todo: clear");
        });
});
function saveNotes(text){ //write note to local storage
    chrome.storage.local.set({ notes: text });
}
function getNotes(){ //retrieve from local storage
    chrome.storage.local.get(function(data){
        if(data.notes){ //if the value exists
            return data.notes;
        }
        return '';
    });
}
```
Now we need to edit `manifest.json` to get permission to access storage.
```json
{
    "manifest_version": 2,
    "name": "Web Notes",
    "description": "Save notes for a webpage.",
    "version": "1.0",
    "browser_action": {
        "default_popup": "popup.html"
    },
    "permissions": [
        "storage"
    ]
}
```
Now if you click save, any notes you write should stay in the extension each time you open it.
