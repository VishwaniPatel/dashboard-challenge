import { AppShell, Navbar, Header } from "@mantine/core";
import { Sidebar } from "./Sidebar";
import { HeaderUI } from "./Header";
import Dashboard from "./Dashboard";

function AppShellUI() {
  return (
    <AppShell
      navbar={
        // <Navbar width={{ base: 80 }} height={100} p="xs">
        <Sidebar p="xs" />
        // </Navbar>
      }
      header={
        // <Header height={60} p="xs">
        <HeaderUI height={60} p="xs" />
        //   {/* Header content */}
        // </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Dashboard />
    </AppShell>
  );
}
export default AppShellUI;
