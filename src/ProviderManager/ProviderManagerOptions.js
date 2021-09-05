const {OPTIONS_NOT_VALID, PROVIDERS_LIST_MISSING} = require("./Util/Constants/Errors");

class ProviderManagerOptions {
    constructor(options) {

        // if options list is empty of not valid should throw an error
        if (!options) {
            throw new Error(OPTIONS_NOT_VALID);
        }

        if (!options.providers) {
            if (!options.ignoreErrors)
                throw new Error(PROVIDERS_LIST_MISSING);

            return false;
        }

        // list of providers should be registered here
        this.providers = options.providers || {};
        this.ignoreErrors = !!options.ignoreErrors;

    }
}

module.exports = ProviderManagerOptions;