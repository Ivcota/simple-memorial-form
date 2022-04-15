import React from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CheckIn, FormPage, Home, ThankYou } from "./pages";
import { Navbar } from "./components/index";
import { themeStore } from "./libs/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { NotificationsProvider } from "@mantine/notifications";
import { createClient, Provider } from "urql";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { isDark } = themeStore();
  const queryClient = new QueryClient();

  const graphqlClient = createClient({
    url: "https://attendant-app-backend.herokuapp.com/api/graphql",
  });

  return (
    <>
      <Provider value={graphqlClient}>
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
                  <Route path="/badges/check-in" element={<CheckIn />} />
                </Routes>
              </BrowserRouter>
            </NotificationsProvider>
          </MantineProvider>
        </QueryClientProvider>
      </Provider>
      <Toaster />
    </>
  );
};

export default App;
