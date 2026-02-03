# CI/CD ESLint Integration Guide

A comprehensive guide for setting up ESLint in various CI/CD pipelines to ensure code quality checks.

## GitHub Actions

```yaml
# .github/workflows/lint.yml
name: Lint Code

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  eslint:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint
```

## GitLab CI

```yaml
# .gitlab-ci.yml
image: node:18

stages:
  - lint

cache:
  paths:
    - node_modules/

lint:
  stage: lint
  script:
    - npm ci
    - npm run lint
  only:
    - merge_requests
    - main
    - develop
```

## Bitbucket Pipelines

```yaml
# bitbucket-pipelines.yml
image: node:18

pipelines:
  default:
    - step:
        name: Lint Code
        caches:
          - node
        script:
          - npm ci
          - npm run lint

  pull-requests:
    "**":
      - step:
          name: Lint Code
          caches:
            - node
          script:
            - npm ci
            - npm run lint
```

## Jenkins

```groovy
// Jenkinsfile
pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
    }

    post {
        failure {
            echo 'Linting failed!'
        }
        success {
            echo 'Linting passed!'
        }
    }
}
```

## CircleCI

```yaml
# .circleci/config.yml
version: 2.1

jobs:
  lint:
    docker:
      - image: cimg/node:18.0
    steps:
      - checkout
      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "package-lock.json" }}
            - v1-dependencies-
      - run:
          name: Install dependencies
          command: npm ci
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package-lock.json" }}
      - run:
          name: Run ESLint
          command: npm run lint

workflows:
  version: 2
  lint-workflow:
    jobs:
      - lint
```

## Package.json Script

Add this to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
  },
  "devDependencies": {
    "eslint": "^8.0.0"
  }
}
```

## ESLint Configuration

Create `.eslintrc.js` in your project root:

```javascript
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
    "no-unused-vars": "error",
  },
};
```

## Usage Instructions

1. Choose the CI/CD configuration that matches your platform
2. Copy the configuration file to your project
3. Ensure your `package.json` has the `lint` script defined
4. Add ESLint configuration to your project
5. Commit and push to trigger the pipeline

## Notes

- All configurations assume you have `npm run lint` defined in `package.json`
- Adjust Node.js version as needed for your project
- The pipeline will fail if ESLint finds any errors
- Use `npm run lint:fix` locally to auto-fix issues before committing
