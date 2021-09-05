const {STRING} = require("./Util/Constants/Types");
const {IDENTIFIER_IS_NOT_STRING, PROVIDER_NOT_REGISTERED} = require("./Util/Constants/Errors");

class ProviderManager {
    constructor(options) {

        this.config = options.config;

        this.providers = this.config.providers;
        this.ignoreErrors = this.config.ignoreErrors;

    }

    provide(providerIdentifier) {
        if (typeof providerIdentifier !== STRING) {
            if (!this.ignoreErrors)
                throw new Error(IDENTIFIER_IS_NOT_STRING);

            return false;
        }

        if (this.providers[providerIdentifier])
            return this.providers[providerIdentifier];


        if (!this.ignoreErrors)
            throw new Error(PROVIDER_NOT_REGISTERED);

        return false;
    }
}

module.exports = ProviderManager;