//  Interface representing crop data for a specific year and crop.


export interface CropData {
    Country: string,
    Year: string;
    "Crop Name": string;
    "Crop Production (UOM:t(Tonnes))": number|null;
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": number|null;
    "Area Under Cultivation (UOM:Ha(Hectares))": number|null;
  }
  