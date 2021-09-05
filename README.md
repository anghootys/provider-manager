# Provider Manager
[![View Project Package On NPM](https://img.shields.io/badge/npm-package-cc3534)](https://www.npmjs.com/package/provider-manager)


A tool for managing node js module providers such as [QueueProvider](https://github.com/anghootys/queue-provider).

It is not completed yet. Many providers will be created as soon as possible, but with that, I will continue this project and add more features to it. On the other hand, I invite you to help me in this goal and send your suggestions to me, either through github or via email.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install
for installation, you can use this command:

```sh
$ npm install provider-manager
```

## Usage

Just import this module to your application project in one of the following ways :

```js
// if using webpack
import {ProviderManager, ProviderManagerOptions} from "provider-manager";

// if using pure nodejs
var {ProviderManager, ProviderManagerOptions} = require("provider-manager");
```

Then you should create an instance of ``ProviderManager`` class :

```js
var providerManager = new ProviderManager({
    config: new ProviderManagerOptions(options)
})
```

the ``options`` property that passed to the ``ProviderManagerOptions`` class constructor is an object of configurations that shown below :

```js
var options = {
    // 'providers' is a list of providers that you want to load
    // in your application project.
    providers: {
        provider_a: ProviderAClass,
        provider_b: ProviderBClass,
        ...
    },
    ignoreErrors: true // no error is displayed when it is true
}
```

That's it :)

## Maintainers
[@anghootys](https://github.com/anghootys)

## Contributing

Feel free to improve it! [Open an issue](https://github.com/anghootys/provider-manager/issues/new) or submit PRs.

## License
ISC © Sajjad Anghooty