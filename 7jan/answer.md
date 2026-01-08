# Understanding Project Management in NodeJS

## a. Package Managers

### What is a Package Manager?

A package manager is a tool that helps us install, update, and manage libraries or packages in a project.  
Instead of downloading code manually, the package manager does it for us.

---
### Why do we need package managers in backend development?
In backend projects, we use many external libraries like:
- express
- mongoose
- bcrypt
- jsonwebtoken

A package manager:
- Downloads these libraries
- Keeps versions correct
- Handles dependencies automatically

Without it, managing everything manually would be messy and error-prone.

---

### Problems faced if package managers are not used

If we don’t use a package manager:
- We have to download libraries manually
- Version conflicts can happen
- Hard to update libraries
- Difficult to share project with others
- More chances of bugs and errors

In short, development becomes slow and unorganized.

---

## b. NPM (Node Package Manager)

### What is NPM?

NPM stands for Node Package Manager.  
It is the default package manager that comes with Node.js.

It is used to:
- Install packages
- Manage dependencies
- Run scripts

---

### Why is NPM important for Node.js applications?

NPM is important because:
- Node projects depend heavily on external packages
- It makes project setup fast
- It keeps everything structured

Without NPM, building Node apps would be very difficult.

---

### How NPM helps in managing dependencies

When we run:

NPM will:
- Download express
- Put it in node_modules
- Add it to package.json
- Track version in package-lock.json

So all dependencies are managed in one place.

---

## c. Backend Project Initialization

### What is the command used to initialize a backend (Node.js) project?

The command is:

---

### Explain what `npm init` and `npm init -y` do

#### npm init

- Asks questions (project name, version, description, etc.)
- Creates package.json file based on your answers

#### npm init -y

- Skips questions
- Creates package.json with default values
- Faster way to start a project

Both commands are used to set up a new Node.js project.

---

## d. Files and Folders Created After Project Initialization

### package.json

This is the main file of the project.

It contains:
- Project name
- Version
- Scripts
- Dependencies

Why it is important:
- Tells Node and NPM about your project
- Needed to install dependencies

---

### node_modules

This folder contains all installed packages.

Why it is important:
- All libraries live here
- Without this, app will not run

Important note:
We do NOT push node_modules to GitHub.

Reason:
- Very large in size
- Can be recreated using `npm install`

---

### package-lock.json

This file locks the exact versions of installed packages.

Why it is important:
- Ensures same versions for everyone
- Avoids “it works on my machine” problems
- Makes project stable

---

## Which files/folders should NOT be pushed to GitHub and why

### node_modules

Reason:
- Very heavy
- Can be regenerated
- Makes repo slow and messy

Sometimes also:
- .env file (contains secrets)

---

## Which files must be committed and why

### package.json

- Needed to know project setup
- Needed to install dependencies

### package-lock.json

- Keeps versions consistent
- Important for stability

### All source code files

- Actual project logic
- Required for project to work

---
