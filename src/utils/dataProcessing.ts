import { CropData } from "./types";

type YearlyData = {
    year: string;
    maxCrop: string;
    maxProduction: number;
    minCrop: string;
    minProduction: number;
  };
  
  type CropAggregate = {
    crop: string;
    totalYield: number;
    totalArea: number;
    count: number;
  };
  
  export const processCropData = (data: CropData[]) => {
    // Table 1: Yearly Crop Data
    const table1 = data.reduce<Record<string, YearlyData>>((acc, curr) => {
      const year = curr.Year;
  
      if (!acc[year]) {
        acc[year] = {
          year,
          maxCrop: curr["Crop Name"],
          maxProduction: curr["Crop Production (UOM:t(Tonnes))"] || 0,
          minCrop: curr["Crop Name"],
          minProduction: curr["Crop Production (UOM:t(Tonnes))"] || 0,
        };
      } else {
        const production = curr["Crop Production (UOM:t(Tonnes))"] || 0;
  
        if (production > acc[year].maxProduction) {
          acc[year].maxCrop = curr["Crop Name"];
          acc[year].maxProduction = production;
        }
        if (production < acc[year].minProduction) {
          acc[year].minCrop = curr["Crop Name"];
          acc[year].minProduction = production;
        }
      }
  
      return acc;
    }, {});
  
    // Table 2: Crop Aggregates
    const table2 = Object.values(
      data.reduce<Record<string, CropAggregate>>((acc, curr) => {
        const crop = curr["Crop Name"];
  
        if (!acc[crop]) {
          acc[crop] = { crop, totalYield: 0, totalArea: 0, count: 0 };
        }
  
        acc[crop].totalYield += curr["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0;
        acc[crop].totalArea += curr["Area Under Cultivation (UOM:Ha(Hectares))"] || 0;
        acc[crop].count++;
  
        return acc;
      }, {})
    ).map((crop) => ({
      crop: crop.crop,
      avgYield: (crop.totalYield / crop.count).toFixed(3),
      avgArea: (crop.totalArea / crop.count).toFixed(3),
    }));
  
    return {
      table1: Object.values(table1), // Transform the object into an array
      table2,
    };
  };
  