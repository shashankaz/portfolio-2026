"use client";

import { ThemeProvider } from "next-themes";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
};
