import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, ClipboardList, BarChart3, Settings, MapPin } from 'lucide-react';

// Importing the files we created earlier
import HOIDashboard from './pages/HOIDashboard';
import PartA_Household from './components/PartA_Household';
import PartB_CWSN from './components/PartB_CWSN';
import Analytics from './pages/Analytics';
import PartD_ActionPanel from './components/PartD_ActionPanel';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50">
        
        {/* Persistent Side Navigation for HOI/Teacher */}
        <nav className="w-64 bg-slate-900 text-white p-6 hidden md:block">
          <div className="flex items-center gap-2 mb-10 text-blue-400">
            <MapPin size={24} />
            <span className="font-black text-xl tracking-tighter">W-VER 2026</span>
          </div>
          
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center gap-3 text-slate-300 hover:text-white transition">
                <LayoutDashboard size={20} /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/survey" className="flex items-center gap-3 text-slate-300 hover:text-white transition">
                <ClipboardList size={20} /> Field Survey (Part A)
              </Link>
            </li>
            <li>
              <Link to="/actions" className="flex items-center gap-3 text-slate-300 hover:text-white transition">
                <Settings size={20} /> Interventions (Part D)
              </Link>
            </li>
            <li>
              <Link to="/reports" className="flex items-center gap-3 text-slate-300 hover:text-white transition">
                <BarChart3 size={20} /> Village Profile (Part C)
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<HOIDashboard />} />
            <Route path="/survey" element={<PartA_Household />} />
            <Route path="/cwsn/:childName" element={<PartB_CWSN />} />
            <Route path="/actions" element={<PartD_ActionPanel />} />
            <Route path="/reports" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

