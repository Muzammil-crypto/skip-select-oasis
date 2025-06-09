
import { Provider } from 'react-redux';
import { store } from './store';
import ChooseSkip from './screens/ChooseSkip';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <Provider store={store}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="App">
          <ChooseSkip />
        </div>
      </TooltipProvider>
    </Provider>
  );
}

export default App;
