# Case Transformer

This vsCode extenstion all you to tranform the selected text by your cursor to the preferred case by using keyboard shortcuts.

## The Reason I made This
Yeah, I got tired of changing the text word by word and one day my teacher when i am trying to edit a ms doc he pointed out there is the tool that ms word offers to change the case and i never knew and so it got struck in my mind so boom i made it here.
Camel Case and Snake Case needs a complex alogorithm i thought it will be small but man it is too big and i need more time.
So the current scope is small.

## Features

### Supported Cases
- **UPPER CASE** -> `HELLO WORLD`
- **lower case** -> `hello world`
- **Title Case** -> `Hello World`
- *(Will add camel case and snake case soon using complex algorithm to differentiate between a selected text by spitting them until all the spitted words make sense.)*

### How To Use
1. Selected any text in the editor.
2. Press the keyboard shortcut for the case you want.
3. The text is transformed to the end case.

### Keyboard Shortcuts

| Case | Shortcut |
|---|---|
|UPPER CASE | `CTRL+SHIFT+U`|
|lower case|`CTRL+SHIFT+L`|
|Title Case|`CTRL+SHIFT+T`|

### Title Case Separators
Title Case only works when there is a separator.
The separators can be any one of the following:
- Space -> `hello world` -> `Hello World`
- Underscore -> `hello_world`->`Hello World`
- Hyphen -> `hello-world` -> `Hello World`

## Known Issue
- Title Case requires a separator character (space, underscore, hyphen)
- No support for camelCase and snake_case as it requires a complex algorithm to match up words. Will add it in future.
