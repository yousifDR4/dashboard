import { useState } from "react";
import Router from "./Router";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import store from "./store/store";
import {
  useQueries,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Router queryClient={queryClient}></Router>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
