# אחי אתה על אנגלית

A macOS shortcut to transform text you meant to type in Hebrew but mistakenly typed in English (or vice versa) into the correct language.

![Screen Recording Demo](screen-recording-demo.gif)

## How to Apply Shortcut

### Step 1: In macOS's Automator
* `New Document` -> `Quick Action`.
* Drag an instance of a `Run JavaScript`.
* Paste the content of the attached `quick-action.js`.
* In *"Workflow receives current"* choose **text**.
* Check the *"Output replaces selected text"* checkbox
* Save via `Cmd + S` and name it, e.g. "eng-heb-transform".

### Step 2: In macOS's System Settings
* `Keyboard` -> `Keyboard Shortcuts` -> `Services`-> `Text`.
* Find your "eng-heb-transform" at the bottom.
* Double click it and **choose a keyboard shortcut that has Cmd + Shift**, e.g. `Cmd + Shift + 7`.

### Step 3: In macOS's System Settings
* `Privacy & Security` -> `Accessability`.
* Add the apps you'd like to use this shortcut in (e.g. Chrome, Outlook).

<br/>

If your keyboard mapping is different, you an change the `engToHeb` dictionary defined in `quick-action.js`.