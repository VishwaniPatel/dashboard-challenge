import React from "react";
import AppShellUI from "./components/AppShell";
import { MantineProvider } from "@mantine/core";
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <MantineProvider>
      <GlobalStyles />
      <AppShellUI />
    </MantineProvider>
  );
};

export default App;
