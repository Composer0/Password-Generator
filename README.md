# Password-Generator

https://www.orionpalmer.com/projects/PasswordGenerator/index.html

The "Password Generator" script is a JavaScript application that allows users to create randomized passwords based on their preferences for character types and password length. This documentation outlines the script's components, functions, and their roles in generating secure passwords.

### Script Components

1. **HTML Elements**
   - `uppercaseEl`, `lowercaseEl`, `numbersEl`, `symbolsEl`: Checkbox elements representing character types for the password.
   - `resultEl`: Element to display the generated password.
   - `lengthEl`: Input element for specifying the desired password length.
   - `generateEl`: Button element to trigger password generation.
   - `clipboardEl`: Button element to copy the generated password to the clipboard.

2. **Random Function Mapping**
   - `randomFunc`: An object mapping character types to their respective random generator functions. This facilitates the dynamic selection of functions based on user preferences.

### Event Listeners

1. **Clipboard Copy Event Listener**
   - `clipboardEl.addEventListener('click', () => {...})`: Listens for the click event on the clipboard button. Copies the generated password to the clipboard and provides a confirmation alert.

2. **Password Generation Event Listener**
   - `generateEl.addEventListener('click', () => {...})`: Listens for the click event on the generate button. Extracts user preferences for character types and password length, then generates and displays the password using the `generatePassword` function.

### `generatePassword` Function

This function generates a password based on user preferences. It considers the selected character types, password length, and ensures each type is included based on the preferences.

### Random Generator Functions

Four functions are responsible for generating random characters for different character types:

1. `getRandomLower()`: Generates a random lowercase character.
2. `getRandomUpper()`: Generates a random uppercase character.
3. `getRandomNumber()`: Generates a random numerical digit.
4. `getRandomSymbol()`: Generates a random symbol character from a predefined set.

These functions return individual characters that are then assembled to create the final password.

### Conclusion

The "Password Generator" script provides a convenient way for users to generate secure passwords with various character types and lengths. It dynamically adapts to user preferences and uses a combination of random functions to ensure a diverse mix of characters. Developers can customize and integrate this script into their applications to enhance password security for their users.
