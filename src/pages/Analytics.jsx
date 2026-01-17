import React from 'react';
import { BarChart, PieChart, Pie, Cell, ResponsiveContainer, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Printer, Download } from 'lucide-react';

const Analytics = ({ data }) => {
  // Mock data reflecting Village Wagoora stats
  const enrollmentData = [
    { name: 'Govt. School', value: 120, fill: '#1e40af' },
    { name: 'Private School', value: 85, fill: '#1d4ed8' },
    { name: 'Darul Uloom', value: 15, fill: '#3b82f6' },
    { name: 'Out of School', value: 12, fill: '#ef4444' },
  ];

  const ageData = [
    { age: '3-6 (Pre-Primary)', count: 45 },
    { age: '6-11 (Primary)', count: 90 },
    { age: '11-14 (Upper Pri)', count: 75 },
    { age: '14-18 (Secondary)', count: 60 },
  ];

  return (
    <div className="bg-white p-8 min-h-screen">
      {/* Printable Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-900 uppercase">Part C: Village Education Profile</h1>
          <p className="text-lg font-semibold text-slate-700">Wagoora Cluster | Academic Session 2026</p>
        </div>
        <div className="flex gap-2 no-print">
          <button onClick={() => window.print()} className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg">
            <Printer size={18} /> Print Official Register
          </button>
        </div>
      </div>

      {/* Numerical Summary Table */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="p-4 border shadow-sm rounded">
          <p className="text-xs text-slate-500 font-bold uppercase">Total Population (0-18)</p>
          <p className="text-2xl font-black text-blue-900">282</p>
        </div>
        <div className="p-4 border shadow-sm rounded border-red-200 bg-red-50">
          <p className="text-xs text-red-500 font-bold uppercase">OOSC Identified</p>
          <p className="text-2xl font-black text-red-700">12</p>
        </div>
        {/* Additional stats... */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Visual 1: Enrollment Split */}
        <div className="h-80 border p-4 rounded-xl shadow-inner bg-slate-50">
          <h3 className="text-center font-bold text-slate-700 mb-4">Enrollment by Institution Type</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={enrollmentData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {enrollmentData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Visual 2: Age Breakdown */}
        <div className="h-80 border p-4 rounded-xl shadow-inner bg-slate-50">
          <h3 className="text-center font-bold text-slate-700 mb-4">Age-wise Child Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageData}>
              <XAxis dataKey="age" fontSize={12} />
              <YAxis />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="count" fill="#1e40af" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* HOI Certification Footer */}
      <div className="mt-20 flex justify-between pt-12">
        <div className="text-center w-48 border-t border-black pt-2 font-bold uppercase text-xs">
          Teacher Signature
        </div>
        <div className="text-center w-64 border-t border-black pt-2 font-bold uppercase text-xs">
          Head of Institution (HOI) <br/> Village Wagoora
        </div>
        <div className="text-center w-48 border-t border-black pt-2 font-bold uppercase text-xs">
          Verified By (ZEO)
        </div>
      </div>
    </div>
  );
};

export default Analytics;

