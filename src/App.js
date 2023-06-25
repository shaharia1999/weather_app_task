import Home from "./compunent/Home/Home";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import './App.css'


function App() {

const queryClient = new QueryClient()

  return (
    <div className="bg">
      <QueryClientProvider client={queryClient}>
      <Home></Home>
      </QueryClientProvider>
    </div>
  );
}

export default App;
