<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">S2IMPACTTRIVIAREACTTSREFACTOR</h1>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/boobaGreen/S2ImpactTriviaReactTSRefactor?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/boobaGreen/S2ImpactTriviaReactTSRefactor?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/boobaGreen/S2ImpactTriviaReactTSRefactor?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/boobaGreen/S2ImpactTriviaReactTSRefactor?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running S2ImpactTriviaReactTSRefactor](#-running-S2ImpactTriviaReactTSRefactor)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)

---

## 📍 Overview

<code>► this project is related to the start2Impact blockchain master specifically for the React-Typescript course. I will therefore use typescript and react mainly to create an app based on multiple-answer quizzes, the request is: You will create a web app in React to carry out a quiz dedicated to the topic of food and its impact on the environment and on people.</code>

---

## 📦 Features

<code>► the app will open with the request to enter a username if not already present on local host. At that point we will start with the first set of multiple answer questions, there are 3 levels with 10 questions for each level. if you answer at least 6 out of 10 questions well you move on to the next level. once you have reached the third level and passed it, you will start again from the first level. At the end of each level you will receive a confirmation message whether you have passed the level or not, if so you will be able to share the experience on social media - at the moment Twitter(X) is managed -
For each correct or incorrect answer there will be a graphic pop up to provide feedback. -</code>

---

## 📂 Repository Structure

```sh
└── S2ImpactTriviaReactTSRefactor/
    ├── README.md
    ├── encryptAnswers.js
    ├── favicon.ico
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── favicon.ico
    │   └── font
    │       ├── ScriptSheep.ttf
    │       ├── ScriptofSheep.eot
    │       ├── ScriptofSheep.ttf
    │       ├── ScriptofSheep.woff
    │       └── ScriptofSheep.woff2
    ├── src
    │   ├── App.tsx
    │   ├── EndGame.tsx
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── Layout.tsx
    │   ├── Logo.tsx
    │   ├── Modal.tsx
    │   ├── NoSuccess.tsx
    │   ├── Quiz.tsx
    │   ├── QuizQuestion.tsx
    │   ├── ScorePopup.tsx
    │   ├── Success.tsx
    │   ├── UserInput.tsx
    │   ├── index.css
    │   ├── lib
    │   │   ├── hooks
    │   │   │   ├── useDecryptedAnswers.ts
    │   │   │   ├── useGame.ts
    │   │   │   └── useQuiz.ts
    │   │   └── types
    │   │       └── types.tsx
    │   ├── main.tsx
    │   ├── quiz
    │   │   ├── level1
    │   │   │   ├── originalAnsewer.json
    │   │   │   ├── quiz.ts
    │   │   │   └── solutionEncrypted.json
    │   │   ├── level2
    │   │   │   ├── originalAnsewer.json
    │   │   │   ├── quiz.ts
    │   │   │   └── solutionEncrypted.json
    │   │   └── level3
    │   │       ├── originalAnsewer.json
    │   │       ├── quiz.ts
    │   │       └── solutionEncrypted.json
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                                             | Summary                                     |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [tsconfig.json](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/tsconfig.json)           | <code>► TS config files </code>             |
| [index.html](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/index.html)                 | <code>► HTML main file </code>              |
| [postcss.config.js](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/postcss.config.js)   | <code>► postcss config </code>              |
| [encryptAnswers.js](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/encryptAnswers.js)   | <code>► utility for encrypted answer</code> |
| [vite.config.ts](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/vite.config.ts)         | <code>► vite config file</code>             |
| [package.json](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/package.json)             | <code>► package json </code>                |
| [tsconfig.node.json](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/tsconfig.node.json) | <code>► config file </code>                 |
| [tailwind.config.js](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/tailwind.config.js) | <code>► tailwind config </code>             |
| [package-lock.json](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/package-lock.json)   | <code>► lock </code>                        |

</details>

<details closed><summary>src</summary>

| File                                                                                                             | Summary                               |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [EndGame.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/EndGame.tsx)           | <code>► Ennd-game page</code>         |
| [ScorePopup.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/ScorePopup.tsx)     | <code>► Score pop-up component</code> |
| [Header.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/Header.tsx)             | <code>► Header component</code>       |
| [Footer.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/Footer.tsx)             | <code>► Footer component</code>       |
| [Success.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/Success.tsx)           | <code>► Succes component</code>       |
| [Logo.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/Logo.tsx)                 | <code>► logo component</code>         |
| [Modal.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/Modal.tsx)               | <code>► Modal component</code>        |
| [main.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/main.tsx)                 | <code>► main</code>                   |
| [vite-env.d.ts](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/vite-env.d.ts)       | <code>► </code>                       |
| [UserInput.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/UserInput.tsx)       | <code>► UserInput component</code>    |
| [Layout.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/Layout.tsx)             | <code>► Main layout component</code>  |
| [NoSuccess.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/NoSuccess.tsx)       | <code>► Nosucces component</code>     |
| [App.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/App.tsx)                   | <code>► App component</code>          |
| [Quiz.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/Quiz.tsx)                 | <code>► Quiz component</code>         |
| [index.css](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/index.css)               | <code>► main style css file</code>    |
| [QuizQuestion.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/QuizQuestion.tsx) | <code>► QuizQuestion component</code> |

</details>

<details closed><summary>src.quiz.level1</summary>

| File                                                                                                                                     | Summary                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [solutionEncrypted.json](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/quiz/level1/solutionEncrypted.json) | <code>► level 1 solution encrypted</code> |
| [quiz.ts](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/quiz/level1/quiz.ts)                               | <code>► level 1 quiz</code>               |
| [originalAnsewer.json](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/quiz/level1/originalAnsewer.json)     | <code>► no encrypted answer </code>       |

</details>

<details closed><summary>src.quiz.level3</summary>

| File                                                                                                                                     | Summary                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [solutionEncrypted.json](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/quiz/level3/solutionEncrypted.json) | <code>► level 2 solution encrypted</code> |
| [quiz.ts](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/quiz/level3/quiz.ts)                               | <code>► level 2 quiz</code>               |
| [originalAnsewer.json](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/quiz/level3/originalAnsewer.json)     | <code>► no encrypted answer </code>       |

</details>

<details closed><summary>src.quiz.level2</summary>

| File                                                                                                                                     | Summary                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [solutionEncrypted.json](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/quiz/level2/solutionEncrypted.json) | <code>► level 3 solution encrypted</code> |
| [quiz.ts](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/quiz/level2/quiz.ts)                               | <code>► level 3 quiz</code>               |
| [originalAnsewer.json](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/quiz/level2/originalAnsewer.json)     | <code>► no encrypted answer </code>       |

</details>

<details closed><summary>src.lib.types</summary>

| File                                                                                                         | Summary                                                 |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| [types.tsx](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/lib/types/types.tsx) | <code>► GmameStatus and TUser types declarations</code> |

</details>

<details closed><summary>src.lib.hooks</summary>

| File                                                                                                                                   | Summary                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [useGame.ts](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/lib/hooks/useGame.ts)                         | <code>► custom hook useGame/code>              |
| [useQuiz.ts](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/lib/hooks/useQuiz.ts)                         | <code>► custom hook useQuiz</code>             |
| [useDecryptedAnswers.ts](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/master/src/lib/hooks/useDecryptedAnswers.ts) | <code>► custom hook useDecryptedAnswers</code> |

</details>

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the S2ImpactTriviaReactTSRefactor repository:

```sh
git clone https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor
```

2. Change to the project directory:

```sh
cd S2ImpactTriviaReactTSRefactor
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running S2ImpactTriviaReactTSRefactor

Use the following command to run S2ImpactTriviaReactTSRefactor:

```sh
npm run build && node dist/main.js
```

or in develpoment mode :

```sh
npm run dev
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor/issues)**: Submit bugs found or log feature requests for S2impacttriviareacttsrefactor.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/boobaGreen/S2ImpactTriviaReactTSRefactor
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [MIT](https://choosealicense.com/licenses/mit/) License.

---
