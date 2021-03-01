# 👋🏻 Introduction

This project is for favorite medium coding test with simple roledex. This project has only FE side application and use next tech stack.

| Name                 | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| Language             | [Typescript](https://www.typescriptlang.org/)                     |
| UI                   | [React](https://reactjs.org/)                                     |
| CSS pre-processors   | [emotionjs(styled-emotion)](https://emotion.sh/docs/introduction) |
| Storage              | localStorage                                                      |
| For Handling State   | Context API(React)                                                |
| linting & formatting | es-lint, prettier                                                 |
| package-manage       | yarn                                                              |

# 💎 Overall Description

### Requirements
This project is just for coding test, but recently I learn about SRS(Software Requirements Specification). So I'm going to use that form with `README.md` (**Customized Simple SRS**). And our requirements is that:

1. Main page is contact list (lists of all contacts, lists of favorite contacts)
2. Can create contact with specified validation
3. Can update exist contact
4. Can favorite on/off with contact (should disappear contact when unfavorite)
5. persistent is required (so, we're going to use `localStorage` API)

### Directory Structure

Our main project directory is `src` and below is project directory structure:

| Directory   | Description                                          |
| ----------- | ---------------------------------------------------- |
| `component` | directory for simple ui(no logic, only visual ui)    |
| `container` | directory for container(has action and data)         |
| `assets`    | assets directory like global style, or design system |
| `lib`       | some api or custom hooks                             |

This project doesn't have `pages` directory because it is simple page application with no routing.
It only works with `state` change (like `shouldCreateContact`, `shouldEditContact`) because of its simple requirements.

### Naming Conention

Our naming convention is that:

- use **CamelCase** with React's `component` or `container` function, class, folder name
- use **kebab-case** with other directory feature

# 🛠 System Feature

This project need only CRUD(Create, Read, Update, Delete) logic with user contact.  
<img width="1062" alt="스크린샷 2021-03-01 오후 4 51 22" src="https://user-images.githubusercontent.com/34877121/109467368-6d34b100-7aae-11eb-9c06-e7340fcbfcbe.png">

# 📃 Non-Functional Requirements

We have some **non-functional requirements** with this project:

1. Commit convention like `angular.js` conventions

   | tag               | description             |
   | ----------------- | ----------------------- |
   | feat(section)     | new feature description |
   | fix(section)      | fix description         |
   | refactor(section) | refactoring description |
   | docs(section)     | document description    |
   | chore(section)    | chore job description   |

2. Contact UI data validation

   | data  | requirements |
   | ----- | ------------ |
   | name  | is required  |
   | email | is required  |
   | phone | optional     |

3. Mobile friendly

   - It is not required, but need to be mobile friendly because

4. Well readable `README.md`
   - So, this project run with simple SRS(Software Requirements Specification) in `README.md`. I need to make it easy to read.

# 🖋 Other Requirements

1. Due to 02.28.2021 (Send public git hub repository link)
