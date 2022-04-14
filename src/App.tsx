import React from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormPage, Home, ThankYou } from "./pages";
import { Navbar } from "./components/index";
import { themeStore } from "./libs/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { NotificationsProvider } from "@mantine/notifications";

const App = () => {
  const { isDark } = themeStore();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={{ colorScheme: isDark ? "dark" : "light" }}
        withGlobalStyles
      >
        <NotificationsProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </BrowserRouter>
        </NotificationsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
