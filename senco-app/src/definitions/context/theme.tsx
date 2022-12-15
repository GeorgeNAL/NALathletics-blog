import React, { createContext, useState } from "react";

// Default color mode is deepBlue
const defaultColorScheme = "deepBlue";

type ThemeColorContextType = {
  colorScheme: string;
  setColorScheme: (value: string) => void;
};

export const ThemeColorContext = createContext<ThemeColorContextType>({
  colorScheme: defaultColorScheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setColorScheme: () => {},
});

export const ThemeColorProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }): JSX.Element => {
  const [colorScheme, setColorScheme] = useState(defaultColorScheme);

  return (
    <ThemeColorContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ThemeColorContext.Provider>
  );
};
