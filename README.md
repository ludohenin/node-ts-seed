# node-ts-seed

Seed for your NodeJS applications made with TypeScript and leveraging Visual Studio Code debugging tools.

## Getting starting

```bash
git clone git@github.com:ludohenin/node-ts-seed.git {my-project-folder}
cd {my-project-folder}
rm -rf .git
git init
npm install
npm run typings -- -install

npm test -- -w

# Enjoy!
```

_Note that this project doesn't rely on any global dependencies._

## Files to update

- `package.json` (name, author, repository ...)
- `typings.json` (name)
- `Readme.md`

## npm scripts available

- `build`: compiles the app into `dist` folder
- `lint`: runs tslint for `src` and `tests` folders
- `test`: runs mocha test without any comilation needed (uses `ts-node`)
- `tsc`: proxy to the locally installed `typescript` package
- `typings`: proxy to the locally installed `typings` package

## tsconfig Files

The seed comes with two tsconfig files to enable greater dev experience in Visual Studio Code by enabling debuggig from source while running `mocha` tests:

- `tsconfig.json`: default configuration file used by IDE for type checking, Intellisense and development build (opt-in)
- `tsconfig.src.json`: configuration file used to compile the app for distribution

## Visula Studio Code Features

- vscode build-in build tasks setup (`build` & `build.dist`)
  - `build`: development build, sets `--watch` for continuous incremental compilation.
    This tasks builds `src` and `tests` folder to `dev` which is used by vscode debugging tools.
  - `build.dist` to compile the `src` folder only to `dist` folder.
- vscode debug configured (`launch`)
  - `launch.json` is set to run `mocha` test while debugging

## Running test

```bash
# optional pass a reporter or any other mocha options.
npm test -- --reporter list
```

## Note about tests fixtures

Because asset files won't be copied to the compilation output directory, when using the debugging tools, their path must be absolute.

```ts
const FIXTURE_BASE_DIR = path.join(process.cwd(), 'tests', 'fixtures');
const myFixtureFile = path.join(FIXTURE_BASE_DIR, 'fixture.yaml');
```

## Resources

- [What's new in TypeScript](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript)
- [VSCode updates](http://code.visualstudio.com/Updates)
- [Debugging with VSCode](http://code.visualstudio.com/docs/editor/debugging)
- [Typescript official documentation](https://www.typescriptlang.org/docs/tutorial.html)
- [typings doc](https://github.com/typings/typings/tree/master/docs)
- [@Basarat](https://twitter.com/basarat) - [Typescript Deep Dive ebook](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html)
- [All JS libraries should be authored in TypeScript](http://staltz.com/all-js-libraries-should-be-authored-in-typescript.html)

## License

MIT
