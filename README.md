# Next.js Links Not Working in Production

This repository demonstrates a common issue in Next.js where links function correctly in development but fail in production.  The problem stems from improper configuration of the `next/link` component within the application's routing structure.

## Bug Description

The `MyComponent` in `bug.js` uses Next.js's `Link` component to create links to `/` and `/about`. While these links work fine during development, they fail to navigate properly when deployed to a production environment.

## Solution

The solution, found in `bugSolution.js`, ensures proper configuration for the Next.js router.  This is done by making sure the `pages` directory and routing structure are correctly set up.