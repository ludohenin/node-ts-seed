# node-ts-seed

Simple seed for your NodeJS projects made with typescript.

## Getting starting

```bash
git clone https://github.com/ludohenin/node-ts-seed.git {my-project-folder}
cd {my-project-folder}
rm -rf .git
git init
npm install
npm run typings -- -install
npm run tsc -- -w

# Enjoy!
```

__Files to update:__
```
- package.json (name, author, repository ...)
- typings.json (name)
```

## Features

- vscode build-in build task setup (`build-watch` & `build.single`)
- vscode debug configured
- unit testing libraries (`mocha` & `chai`) that compiles on-the-fly, thanks to `ts-node`

## Running test

```bash
# optional pass a reporter or any other mocha options.
npm test -- --reporter list
```

## Resources

- [What's new in TypeScript](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript)
- [VSCode updates](http://code.visualstudio.com/Updates)
- [Debugging with VSCode](http://code.visualstudio.com/docs/editor/debugging)
- [Typescript official documentation](https://www.typescriptlang.org/docs/tutorial.html)
- [typings doc](https://github.com/typings/typings/tree/master/docs)
- [@Basarat](https://twitter.com/basarat) - [Typescript Deep Dive ebook](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html)
- [All JS libraries should be authored in TypeScript](http://staltz.com/all-js-libraries-should-be-authored-in-typescript.html)
