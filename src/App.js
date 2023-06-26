
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import './App.css'
import Weather from "./compunent/weather/Weather";


function App() {

const queryClient = new QueryClient()

  return (
    <div className="bg">
      <QueryClientProvider client={queryClient}>
      <Weather></Weather>
      </QueryClientProvider>
    </div>
  );
}

export default App;
