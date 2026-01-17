import React, { useState } from 'react';
import { Accessibility, ClipboardCheck, HelpCircle } from 'lucide-react';

const PartB_CWSN = ({ childName }) => {
  const [cwsnData, setCwsnData] = useState({
    disabilityType: '',
    hasCertificate: 'No',
    supportRequired: '',
    remarks: ''
  });

  const disabilityCategories = [
    "Visual Impairment", "Hearing Impairment", "Locomotor Disability", 
    "Mental Retardation", "Learning Disability", "Multiple Disabilities", "Other"
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-xl border-l-8 border-purple-600 my-4">
      <div className="flex items-center gap-3 mb-6 text-purple-900">
        <Accessibility size={28} className="bg-purple-100 p-1 rounded" />
        <div>
          <h2 className="font-bold text-lg uppercase">Part B: CWSN Profile</h2>
          <p className="text-sm text-gray-500 font-medium">Child: <span className="text-purple-700">{childName || "Selected Child"}</span></p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Disability Type */}
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Type of Disability</label>
          <select 
            className="w-full p-3 bg-purple-50 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            value={cwsnData.disabilityType}
            onChange={(e) => setCwsnData({...cwsnData, disabilityType: e.target.value})}
          >
            <option value="">Select Category</option>
            {disabilityCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        {/* Certificate Toggle */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
          <span className="text-sm font-semibold text-gray-700">Disability Certificate Available?</span>
          <div className="flex gap-2">
            {['Yes', 'No'].map(opt => (
              <button
                key={opt}
                onClick={() => setCwsnData({...cwsnData, hasCertificate: opt})}
                className={`px-4 py-1 rounded-md text-sm font-bold transition ${
                  cwsnData.hasCertificate === opt 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-400 border'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Support Required */}
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Support/Equipment Required</label>
          <textarea 
            placeholder="e.g., Wheelchair, Hearing Aid, Braille books, Home-based education..."
            className="w-full p-3 border border-gray-200 rounded-lg h-24 focus:ring-2 focus:ring-purple-400 outline-none"
            onChange={(e) => setCwsnData({...cwsnData, supportRequired: e.target.value})}
          />
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1">HOI Remarks</label>
          <input 
            type="text"
            className="w-full p-2 border-b-2 border-gray-200 focus:border-purple-600 outline-none"
            placeholder="Notes on child's current learning status"
            onChange={(e) => setCwsnData({...cwsnData, remarks: e.target.value})}
          />
        </div>
      </div>

      <button className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-purple-700 text-white rounded-lg font-bold hover:bg-purple-800 shadow-md">
        <ClipboardCheck size={18} /> Update CWSN Registry
      </button>
    </div>
  );
};

export default PartB_CWSN;

