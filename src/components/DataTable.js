function DataTable({ data }) {
    return (
      <div className="overflow-x-auto mt-6">
        <table className="w-full text-sm divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Policy
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Do you approve?
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-normal break-words">
                  {row.Policy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.Category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.Approve !== null ? row.Approve.toString() : 'Not Voted'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default DataTable;