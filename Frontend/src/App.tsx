import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []); // useMemo is a hook that memorizes the value of the themeSettings object
  return (
    // and only re-creates the theme object when the themeSettings object changes Mekin Jemal
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* The ThemeProvider component is a wrapper component that provides the theme to all the components in the app */}
          <CssBaseline />
          {/* his is a component that applies the base styles for
            the app including the background color and font size and family to
            the root element of the app Mekin Jemal */}
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<div>Admin dashboeard</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
