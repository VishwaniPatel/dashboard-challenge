import { AppShell, Container } from "@mantine/core";
import { Sidebar } from "./Sidebar";
import { HeaderUI } from "./Header";
import Dashboard from "./Dashboard";

function AppShellUI(theme) {
  return (
    <AppShell
      layout="alt"
      navbar={<Sidebar />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.darktheme[0]
              : theme.colors.darktheme[9],
        },
      })}
    >
      <HeaderUI />
      <Dashboard />
    </AppShell>
  );
}
export default AppShellUI;
