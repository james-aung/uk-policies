import Papa from 'papaparse';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function fetchData(csvFile) {
  const response = await fetch(csvFile);
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder('utf-8');
  const csv = decoder.decode(result.value);
  const results = Papa.parse(csv, { header: true });
  let data = results.data.map(row => ({ ...row, Approve: null }));
  data = shuffleArray(data);
  return data;
}

export function saveData(data) {
  localStorage.setItem('policyData', JSON.stringify(data));
}