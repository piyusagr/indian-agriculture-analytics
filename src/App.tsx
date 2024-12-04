// src/App.tsx
import { useState, useEffect } from 'react';
import DataTable from './components/DataTable';
import { processCropData } from './utils/dataProcessing';
import ManufacRaw from './assets/Manufac.json';
import { CropData } from './utils/types';
import './App.css'; // import your CSS file

type Table1Row = {
  year: string;
  maxCrop: string;
  minCrop: string;
};

type Table2Row = {
  crop: string;
  avgYield: string;
  avgArea: string;
};

const App = () => {
  const [table1, setTable1] = useState<Table1Row[]>([]);
  const [table2, setTable2] = useState<Table2Row[]>([]);

  // Clean and validate JSON data
  const Manufac: CropData[] = ManufacRaw.map((item: any) => ({
    Country: item.Country || '',
    Year: item.Year || '',
    "Crop Name": item["Crop Name"] || '',
    "Crop Production (UOM:t(Tonnes))": item["Crop Production (UOM:t(Tonnes))"] || 0,
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0,
    "Area Under Cultivation (UOM:Ha(Hectares))": item["Area Under Cultivation (UOM:Ha(Hectares))"] || 0,
  }));

  useEffect(() => {
    const { table1, table2 } = processCropData(Manufac);
    setTable1(table1);
    setTable2(table2);
  }, []);

  return (
    <div className="container">
      <h1>Indian Agriculture Analytics</h1>
      <h2>Table 1: Crop Production per Year</h2>
      <DataTable data={table1} columns={['year', 'maxCrop', 'minCrop']} />
      <h2>Table 2: Crop Averages</h2>
      <DataTable data={table2} columns={['crop', 'avgYield', 'avgArea']} />
    </div>
  );
};

export default App;
