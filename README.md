# 🛡️ Game Classes Builder 🏹

## Description

This project is a solution to the "Escrevendo as classes de um Jogo" challenge proposed by the DIO.me course. The objective is to create a generic `Hero` class representing a character in an adventure game, with properties like name, age, and type (e.g., warrior, mage, monk, ninja). Additionally, the class must have an `attack` method that displays a message based on the hero's type, showing what attack they used.

## Challenge Requirements

The `Hero` class must meet the following requirements:

- **Properties**:
  - `name` (string): The hero's name.
  - `age` (number): The hero's age.
  - `type` (string): The hero's type (e.g., "warrior", "mage", "monk", "ninja").
  
- **Methods**:
  - `attack()` (method): Displays the message:
    - `"The {type} attacked using {attack}"`
    - Where `{type}` is the hero's type (e.g., "warrior", "mage", etc.).
    - `{attack}` will depend on the hero's type:
      - **mage** → `"used magic"`
      - **warrior** → `"used a sword"`
      - **monk** → `"used martial arts"`
      - **ninja** → `"used a shuriken"`

## Expected Output

The output should be in the following format, based on the hero’s type:

- `"The {type} attacked using {attack}"`

For example:
- **Warrior**: `"The warrior attacked using a sword"`
- **Mage**: `"The mage attacked using magic"`
- **Monk**: `"The monk attacked using martial arts"`
- **Ninja**: `"The ninja attacked using a shuriken"`

## Tools and Concepts Used

- Classes
- Objects
- Methods
- String Manipulation
- Conditional Logic

## How to Run the Project

### Install Node.js
Make sure Node.js is installed on your computer. If not, download it from the official website:

- [Node.js Official Site](https://nodejs.org/)

### Clone this repository:
```bash
git clone https://github.com/annielymariah/gameClassesBuilderDIO.git
```

### Navigate to the project directory:
```bash
cd heroAdventureGame
```

### Run the script:
After cloning the repository, execute the project with:

```bash
node main.js
```

### Interact with the program:
The script will create a hero and call the `attack()` method, displaying the attack message based on the hero's type.