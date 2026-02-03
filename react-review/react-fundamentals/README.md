Guide of learning

# installing nextjs

pnpm create next-app@latest my-app --yes
cd my-app
pnpm dev

# React basic

react hooks
lifecycle method
virtual /react dom
jsx

# install testing jest

jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-node @types/jest -D

pnpm create jest@latest

<!-- update jest config ts -->

const createJestConfig = nextJest({
dir: "./",
});

export default createJestConfig(config);

# install tailwind merge and create utils

clsx + tailwindmerge for overwrite classes
