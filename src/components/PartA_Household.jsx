import React, { useState } from 'react';
import { Save, UserPlus, Home, AlertCircle } from 'lucide-react';

const PartA_Household = () => {
  const [household, setHousehold] = useState({
    headName: '',
    familyId: '',
    wardNo: '',
    students: []
  });

  const [currentChild, setCurrentChild] = useState({
    name: '', gender: '', dob: '', status: '', schoolName: '', schoolType: ''
  });

  const addChild = () => {
    setHousehold({ ...household, students: [...household.students, currentChild] });
    setCurrentChild({ name: '', gender: '', dob: '', status: '', schoolName: '', schoolType: '' });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-4 shadow-lg rounded-t-xl border-t-4 border-blue-800">
      <div className="flex items-center gap-2 mb-4 text-blue-900">
        <Home size={24} />
        <h2 className="font-bold text-xl uppercase tracking-tight">Household Entry (Part A)</h2>
      </div>

      {/* Family Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Head of Family</label>
          <input 
            type="text" 
            className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none p-1 bg-transparent"
            value={household.headName}
            onChange={(e) => setHousehold({...household, headName: e.target.value})}
          />
        </div>
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Family ID / Aadhar No.</label>
          <input 
            type="text" 
            className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none p-1 bg-transparent"
            value={household.familyId}
            onChange={(e) => setHousehold({...household, familyId: e.target.value})}
          />
        </div>
      </div>

      {/* Child Entry Section */}
      <div className="border-l-4 border-orange-400 pl-4 mb-6">
        <h3 className="text-sm font-bold text-orange-700 mb-4 uppercase">Add Child Information</h3>
        <div className="space-y-4">
          <input placeholder="Child's Name" className="w-full p-2 border rounded" 
            value={currentChild.name} onChange={(e) => setCurrentChild({...currentChild, name: e.target.value})} />
          
          <div className="grid grid-cols-2 gap-2">
            <select className="p-2 border rounded" onChange={(e) => setCurrentChild({...currentChild, gender: e.target.value})}>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input type="date" className="p-2 border rounded" 
              onChange={(e) => setCurrentChild({...currentChild, dob: e.target.value})} />
          </div>

          <select className="w-full p-2 border rounded bg-yellow-50 font-semibold"
            onChange={(e) => setCurrentChild({...currentChild, status: e.target.value})}>
            <option value="">Present Status</option>
            <option value="Enrolled">Enrolled</option>
            <option value="Dropout">Dropout</option>
            <option value="OOSC">Out-of-School (OOSC)</option>
          </select>

          {/* Conditional Input: If status is Enrolled */}
          {currentChild.status === 'Enrolled' && (
            <input placeholder="Name of School" className="w-full p-2 border rounded animate-fade-in" 
              onChange={(e) => setCurrentChild({...currentChild, schoolName: e.target.value})} />
          )}
        </div>

        <button 
          onClick={addChild}
          className="mt-4 flex items-center justify-center gap-2 w-full py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition"
        >
          <UserPlus size={18} /> Add Child to Family
        </button>
      </div>

      {/* List of Added Children */}
      {household.students.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <h4 className="text-xs font-bold text-gray-400 mb-2 uppercase">Children Added:</h4>
          {household.students.map((child, index) => (
            <div key={index} className="flex justify-between items-center p-2 bg-blue-50 rounded mb-2 border-l-4 border-blue-500">
              <span>{child.name} ({child.gender})</span>
              <span className={`text-xs px-2 py-1 rounded font-bold ${child.status === 'Enrolled' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                {child.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Final Submission */}
      <button className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-blue-900 text-white rounded-xl font-bold shadow-lg hover:bg-blue-800">
        <Save size={20} /> Finalize Household Survey
      </button>
    </div>
  );
};

export default PartA_Household;
      
