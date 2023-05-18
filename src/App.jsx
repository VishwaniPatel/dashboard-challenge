import React from "react";
import AppShellUI from "./components/AppShell";
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import GlobalStyles from "./components/GlobalStyles";
const App = () => {
  const theme = useMantineTheme();

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["ctrl+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: "Inter, sans-serif",
          colors: {
            darktheme: [
              "#101321",
              "#3d7697",
              "#3d7697",
              "#68ce6c",
              "#4fcbc2",
              "#4fcbc2",
              "#4198e0",
              "#f7a651",
              "#9ca3ac",
              "#ffffff",
            ],
          },
        }}
      >
        <GlobalStyles />
        <AppShellUI />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
