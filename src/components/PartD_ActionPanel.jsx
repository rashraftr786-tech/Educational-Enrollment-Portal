import React, { useState } from 'react';
import { Calendar, UserCheck, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const PartD_ActionPanel = () => {
  const [actions, setActions] = useState([
    {
      id: 1,
      childName: "Aadil Ahmad",
      issue: "Dropout (Financial reasons)",
      proposedAction: "Counseling & scholarship guidance",
      timeline: "2026-02-10",
      responsible: "Mr. Bashir (Teacher)",
      status: "Pending"
    }
  ]);

  const getStatusColor = (status) => {
    return status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-slate-900 p-6 text-white">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <UserCheck className="text-blue-400" /> Part D: Action Taken / Proposed
        </h2>
        <p className="text-slate-400 text-sm mt-1">Village Wagoora Intervention Tracking</p>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-wider border-b">
                <th className="py-4 px-2">Issue Identified</th>
                <th className="py-4 px-2">Proposed Action</th>
                <th className="py-4 px-2">Responsible</th>
                <th className="py-4 px-2">Timeline</th>
                <th className="py-4 px-2">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {actions.map((action) => (
                <tr key={action.id} className="border-b hover:bg-slate-50 transition">
                  <td className="py-4 px-2">
                    <p className="font-bold text-slate-800">{action.childName}</p>
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {action.issue}
                    </p>
                  </td>
                  <td className="py-4 px-2 text-slate-600">{action.proposedAction}</td>
                  <td className="py-4 px-2 font-medium text-slate-700">{action.responsible}</td>
                  <td className="py-4 px-2 text-slate-600">
                    <span className="flex items-center gap-1"><Clock size={14}/> {action.timeline}</span>
                  </td>
                  <td className="py-4 px-2">
                    <select 
                      className={`text-xs font-bold py-1 px-2 rounded-full border-none outline-none ${getStatusColor(action.status)}`}
                      value={action.status}
                      onChange={(e) => {/* Logic to update status */}}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Summary for HOI Signature */}
        <div className="mt-8 p-4 bg-blue-50 rounded-xl flex items-center justify-between border border-blue-100">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-blue-600" />
            <span className="text-sm text-blue-900 font-medium">
              Verified by HOI: <strong>Irshad Ahmad Wani</strong>
            </span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-blue-700">
            Generate Final PDF Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartD_ActionPanel;

