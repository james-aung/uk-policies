import React, { useMemo } from 'react';
import DataTable from '../components/DataTable';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PieController
} from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend, PieController);

function ResultsPage({ data, currentIndex, handleButtonClick }) {
  const pieChartsData = useMemo(() => {
    const countByParty = data.reduce((acc, item) => {
      const party = item.Party;
      const approve = item.Approve === true;
      const disapprove = item.Approve === false;
      const no_opinion = item.Approve === null;
      if (!acc[party]) {
        acc[party] = { approve: 0, disapprove: 0, no_opinion: 0, total: 0 };
      }
      if (approve) acc[party].approve += 1;
      if (disapprove) acc[party].disapprove += 1;
      if (no_opinion) acc[party].no_opinion += 1;
      acc[party].total += 1;
      return acc;
    }, {});

    return Object.keys(countByParty).map(party => {
      const approvePercentage = (countByParty[party].approve / countByParty[party].total) * 100;
      const disapprovePercentage = (countByParty[party].disapprove / countByParty[party].total) * 100;
      const noOpinionPercentage = (countByParty[party].no_opinion / countByParty[party].total) * 100;
      return {
        party,
        data: {
          labels: ['Approve', 'Disapprove', 'No Opinion'],
          datasets: [{
            label: `% of Responses for ${party}`,
            data: [approvePercentage, disapprovePercentage, noOpinionPercentage],
            backgroundColor: [
              'rgba(0, 255, 0, 0.6)', // more green for approve
              'rgba(255, 99, 132, 0.6)', // red for disapprove
              'rgba(201, 203, 207, 0.6)' // grey for no opinion
            ],
            borderColor: [
              'rgba(0, 255, 0, 1)', // more green for approve
              'rgba(255, 99, 132, 1)', // red for disapprove
              'rgba(201, 203, 207, 1)' // grey for no opinion
            ],
            borderWidth: 1
          }]
        }
      };
    });
  }, [data]);

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-16">
      {pieChartsData.map(chartData => (
        <div key={chartData.party} className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-center mb-4">{chartData.party}</h3>
          <Pie data={chartData.data} />
        </div>
      ))}
    </div>
      <DataTable data={data} />
    </>
  );
}

export default ResultsPage;
