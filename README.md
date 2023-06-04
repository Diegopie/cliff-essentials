# Cliff Essentials

<!-- ![App hero image](./client/public/assets/img/readme/app.png) -->

## Description

I started working at a hotel who has an after hours sundries shop for late night snacks. Fairly standard practice but a paper and pen system is used to list the customer's order then use a calculator to add up their entire order 😲! My boss told me they had an old employee make a web app but he quit and the prices became outdated. I found the build file and reverse engineered their original app. I was able to learn a lot from their code but I have become an anti-Bootstrap snob 💁‍♀️ so I started my app from scratch using Tailwind and TypeScript

<!-- [Live Link 😁](https://diegopie.herokuapp.com/) -->

<!-- [Adobe XD Wireframe and Prototype](https://xd.adobe.com/view/7f0c8103-9ba6-49dd-8bca-2eaeeb93bbf6-2a5f/) -->

&NewLine;
&NewLine;

## Table of Contents

- [Cliff Essentials](#cliff-essentials)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Development](#development)
    - [Technology Overview](#technology-overview)
    - [Dependencies/Packages](#dependenciespackages)
      - [Dev Dependencies](#dev-dependencies)
    - [Client](#client)
    - [Bugs](#bugs)
    - [Future Development](#future-development)
    - [Resources](#resources)
    - [Contact](#contact)
    - [License](#license)

## Development

- [Technology Overview](#technology-overview)
- [Dependencies/Packages](#dependenciespackages)
- [Client](#client)

### Technology Overview

&NewLine;
&NewLine;

```sh
Frontend – React, CSS3, Tailwind 
Backend – Future Development
```

&NewLine;
&NewLine;

### Dependencies/Packages

&NewLine;
&NewLine;

| | | |
| ------ | ------ | ------ |
| [uuid](https://www.npmjs.com/package/uuid)  | [accounting](https://www.npmjs.com/package/accounting)  | [react-select](https://www.npmjs.com/package/react-select)  |

&NewLine;
&NewLine;

#### Dev Dependencies

&NewLine;
&NewLine;

| |
| ------ |
| [eslint](https://www.npmjs.com/package/eslint) |

&NewLine;
&NewLine;

> [Back To Development](#development) || [Back To Table of Contents](#table-of-contents)

### Client

This app is rendered using React. My main goal was to make it much easier to take a customer's order and give them a total. I then wanted to simplify the process to charge the appropriate account.

> [Back To Client](#client) || [Back To Development](#development)

### Bugs

I used the newer crypto JS API for giving mapped JSX content a unique key, but some machines at work have updates blocked by IT for the browser. So some computers are able to use it and some are not. I just fell back on the classic UUID NPM Package

### Future Development

The core issue with the previous developer's app was that new staff could not update the prices. This is very easily fixed with a simple database integration. My boss said they may finally get a Square setup for the shop so I'm holding off development of this feature for now

### Resources

<!-- Adobe Icons: [freepik.com](https://www.freepik.com) -->

### Contact

If you have any feedback our questions, please reach me by [email](diegopie@outlook.com), [GitHub](https://github.com/Diegopie), or [LinkedIn](https://www.linkedin.com/in/diego-hernandez-7327381b2/)!

### License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed
