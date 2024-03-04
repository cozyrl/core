
// Please refer to the following documentation: https://jestjs.io/docs/configuration.

import { Config } from "jest";

/**  
  * Jest configuration object. 
*/

const reporters = [ "default", "jest-junit" ];

const configuration: Config = {
    transform: { "^.+\\.ts?$": "ts-jest" },
    testRegex: ".*\\.(test|spec)?\\.(ts)$",
    moduleFileExtensions: [ "ts", "js" ],
    roots: [ "source" ],
    coverageDirectory: "coverage-reports",
    reporters
}

export default configuration;
