
// Please refer to the following documentation: https://jestjs.io/docs/configuration.

import { Config } from "jest";

/**  
  * Jest configuration object. 
*/

const configuration: Config = {
    transform: { "^.+\\.ts?$": "ts-jest" },
    testRegex: ".*\\.(test|spec)?\\.(ts)$",
    moduleFileExtensions: [ "ts" ],
    roots: [ "source" ]
}

export default configuration;
