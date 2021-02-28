# Introduction

This project is for favorite medium coding test with simple roledex. This project has only FE side application and use next tech stack.

| Name                 | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| Language             | [Typescript](https://www.typescriptlang.org/)                     |
| UI                   | [React](https://reactjs.org/)                                     |
| CSS pre-processors   | [emotionjs(styled-emotion)](https://emotion.sh/docs/introduction) |
| Storage              | localStorage                                                      |
| For Handling State   | Context API(React)                                                |
| linting & formatting | es-lint, prettier                                                 |

# Overall Description

This project is just for coding test, but recently I learn about SRS(Software Requirements Specification). So I'm going to use that form with `README.md` (**Customized Simple SRS**). And our requirements is that:

1. Main page is contact list(lists of all contacts, lists of favorite contacts)
2. Can create contact with specified validation
3. Can update exist contact
4. Can favorite on/off with contact(should disappear contact when unfavorite)
5. persistent is required(So, we're going to use `localStorage` API)

# System Feature

This project need only CRUD(Create, Read, Update, Delete) logic with user contact.

# Non-Functional Requirements

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

# Other Requirements

1. Due to 02.28.2021 (Send public git hub repository link)
