import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProyectoPage from "@/pages/ProyectoPage";
import HistoriaPage from "@/pages/HistoriaPage";
import DesarrolladorPage from "@/pages/DesarrolladorPage";
import GaleriaPage from "@/pages/GaleriaPage";
import ContactoPage from "@/pages/ContactoPage";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/sections/Footer";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/proyecto" component={ProyectoPage} />
      <Route path="/historia" component={HistoriaPage} />
      <Route path="/desarrollador" component={DesarrolladorPage} />
      <Route path="/galeria" component={GaleriaPage} />
      <Route path="/contacto" component={ContactoPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Navbar />
          <Router />
          <Footer />
          <WhatsAppButton />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
