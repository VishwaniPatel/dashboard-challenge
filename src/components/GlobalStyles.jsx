import { Global } from "@mantine/core";
/**
 * @returns Global styles for the application
 */
function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        "html,body": {
          height: "100%",
        },
        "html,body": {
          overflowX: "hidden",
        },
      })}
    />
  );
}

export default GlobalStyles;
