# Case Transformer

This vsCode extenstion all you to tranform the selected text by your cursor to the preferred case by using keyboard shortcuts.

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
