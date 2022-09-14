import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"

import { QueryClient, QueryClientProvider } from "react-query"
// import { ReactQueryDevtools } from "react-query/devtools";

const App = React.lazy(() => import("components/App"))

import "styles/globals.css"
import Loading from "components/Loading"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Suspense
      fallback={
        <div className="grid h-screen place-items-center text-slate-700">
          <Loading />
        </div>
      }
    >
      <App />
    </Suspense>
    {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
  </QueryClientProvider>
)
