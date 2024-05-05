module.exports = { 
      preset: 'jest-preset-angular', 
      setupFilesAfterEnv: ['<rootDir>/src/test.ts'], 
      globalSetup: 'jest-preset-angular/global-setup', 
      testMatch: ['**/+(*.)+(spec).+(ts)'], 
      collectCoverage: true, 
      coverageReporters: ["html"], 
      collectCoverageFrom: ["./src/app/**"] 
    }; 
    