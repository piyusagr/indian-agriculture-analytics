// src/components/DataTable.tsx
import { Table } from '@mantine/core';

interface TableProps {
  data: { [key: string]: any }[];
  columns: string[];
}

const DataTable = ({ data, columns }: TableProps) => {
  return (
    <Table
      highlightOnHover
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
      }}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} style={{ textAlign: 'left', padding: '10px', fontWeight: 'bold' }}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} style={{ transition: 'background-color 0.3s' }}>
            {columns.map((col) => (
              <td key={col} style={{ padding: '10px' }}>
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
