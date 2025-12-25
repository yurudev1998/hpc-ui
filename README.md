This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Development
npx create-next-app@14.2.35 ./

npx shadcn init // When Shadcn initializes, it adds custom colors to your tailwind.config.ts. Shadcn projects typically use Lucide React for icons

1. ThemeProvider(ref: https://ui.shadcn.com/docs/dark-mode/next):

Shadcn is designed to work with a library called next-themes. This is the professional way to do it because it prevents "flashing" (where the screen is white for a split second before turning dark) and allows users to toggle it manually if they want.

1-1.Install the package:

```Bash
npm install next-themes
```

1-2.Create a Provider: Create a file at components/theme-provider.tsx:

1-3. Wrap your Layout: In app/layout.tsx, wrap your children with the provider and set defaultTheme="dark":

1-4. ThemeToggle: 

```bash
npx shadcn add button
npx shadcn add dropdown-menu
```

1-4.Note on "Hydration Mismatch"
You might see a warning in the console about "Hydration failed." This happens because the server doesn't know what the user's theme preference is yet. To fix this, ensure your <html> tag in layout.tsx has the suppressHydrationWarning attribute:

```bash
<html lang="en" suppressHydrationWarning>
```

## VSCode Extension
HSL Color Preview