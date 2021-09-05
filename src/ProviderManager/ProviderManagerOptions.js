class ProviderManagerOptions {
    constructor(options) {

        // list of providers should be registered here
        this._providers = options.providers;
    }
}

module.exports = ProviderManagerOptions;