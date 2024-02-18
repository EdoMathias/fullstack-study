import { OkPacketParams } from 'mysql2';
import { dal } from '../2-utils/dal';
import { EmployeeModel } from '../3-models/employee-model';
import { ResourceNotFoundError } from '../3-models/client-errors';

class EmployeesService {
  public async getAllEmployees(): Promise<EmployeeModel[]> {
    const sql = 'SELECT * FROM employees';
    const employees = await dal.exceute(sql);
    return employees;
  }

  public async getEmployeeById(id: number): Promise<EmployeeModel> {
    const sql = 'SELECT * FROM employees WHERE id = ' + id;

    // dal.execute always returns an array from the DB
    const employees = await dal.exceute(sql);

    // Extract the single employee
    const employee = employees[0];

    // if employee does not exist
    if (!employee) {
      throw new ResourceNotFoundError(id);
      // next(error);
    }

    return employee;
  }

  // Add new employee:
  public async addEmployee(employee: EmployeeModel): Promise<EmployeeModel> {
    // Valitade:
    employee.validateInsert();

    const sql = `INSERT INTO employees(firstName, lastName, birthDate) 
      VALUES('${employee.firstName}', '${employee.lastName}', '${employee.birthDate}')`;
    const info: OkPacketParams = await dal.exceute(sql);

    // Set back the auto incremented id to the employee
    employee.id = info.insertId;

    return employee;
  }

  // Update employee:
  public async updateEmployee(employee: EmployeeModel): Promise<EmployeeModel> {
    employee.validateUpdate();

    const sql = `UPDATE employees SET
      firstName = '${employee.firstName}',
      lastName = '${employee.lastName}',
      birthDate = '${employee.birthDate}'
      WHERE id = ${employee.id}`;

    const info: OkPacketParams = await dal.exceute(sql);

    if (info.affectedRows === 0) {
      throw new ResourceNotFoundError(employee.id);
    }

    return employee;
  }

  // Delete employee:
  public async deleteEmployee(id: number): Promise<void> {
    const sql = 'DELETE FROM employees WHERE id = ' + id;
    const info: OkPacketParams = await dal.exceute(sql);

    if (info.affectedRows === 0) {
      throw new ResourceNotFoundError(id);
    }

    return;
  }
}

export const employeesService = new EmployeesService();
