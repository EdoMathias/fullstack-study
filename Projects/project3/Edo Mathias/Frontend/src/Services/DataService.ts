import axios from 'axios';
import VacationModel from '../Models/VacationModel';

class DataService {
  public async downloadCSV(vacations: VacationModel[]) {
    const csvContent =
      'data:text/csv;charset=utf-8,' + this.convertArrayToCSV(vacations);
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'vacations.csv');
    document.body.appendChild(link);
    link.click();
  }

  private convertArrayToCSV(vacations: VacationModel[]) {
    // Make header from Destination and likes count:
    const header = 'Destination, Likes\n';
    const rows = vacations
      .map((vacation) => {
        return `${vacation.destination}, ${vacation.likesCount}\n`;
      })
      .join('');
    return header + rows;
  }
}

export const dataService = new DataService();
