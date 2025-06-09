
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
        <div className="min-h-screen bg-gray-900 text-white">
          <Toaster />
          <Sonner />
          <ChooseSkip />
        </div>
      </TooltipProvider>
    </Provider>
  );
}

export default App;
