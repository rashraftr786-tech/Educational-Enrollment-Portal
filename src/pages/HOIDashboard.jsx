import React, { useState, useEffect } from 'react';
import { Bell, Users, GraduationCap, AlertTriangle, FileText } from 'lucide-react';
import SummaryCard from '../components/SummaryCard'; // Reusable UI component

const HOIDashboard = () => {
  // State for Part C Automated Summary
  const [stats, setStats] = useState({
    totalHouseholds: 0,
    totalChildren: 0,
    enrolledGovt: 0,
    enrolledPvt: 0,
    ooscCount: 0,
    cwsnCount: 0,
    pendingActions: 0
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">HOI Command Center</h1>
          <p className="text-gray-600">Village Wagoora | Tehsil Wagoora | District Baramulla</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell className="text-red-600 w-8 h-8 animate-pulse" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5">
              {stats.ooscCount}
            </span>
          </div>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
            Verify & Sign Register
          </button>
        </div>
      </div>

      {/* Part C: Automated Village Profile Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard title="Total Households" value={stats.totalHouseholds} icon={<Users />} color="blue" />
        <SummaryCard title="School-Age (6-18)" value={stats.totalChildren} icon={<GraduationCap />} color="green" />
        <SummaryCard title="OOSC (The Bell)" value={stats.ooscCount} icon={<AlertTriangle />} color="red" />
        <SummaryCard title="CWSN Identified" value={stats.cwsnCount} icon={<FileText />} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Urgent Interventions (Part D Link) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
          <h2 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
            <AlertTriangle size={20} /> Urgent: Out-of-School Children
          </h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-400 text-sm">
                <th className="pb-2">Child Name</th>
                <th className="pb-2">Parent/Ward</th>
                <th className="pb-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* This would map from your database */}
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 font-medium">Aadil Ahmad</td>
                <td className="py-3">Ward No. 3</td>
                <td className="py-3">
                  <button className="text-blue-600 text-sm hover:underline">Assign Follow-up</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Enrollment Distribution Chart Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-blue-900 mb-4">Enrollment Type (Village-wide)</h2>
          <div className="h-48 bg-gray-100 rounded flex items-center justify-center border-dashed border-2 border-gray-200">
             [Automated Pie Chart: Govt vs Private vs Darul Uloom]
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOIDashboard;

