import express, { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../3-models/status-codes';
import { securityMiddleware } from '../4-middleware/security-middleware';
import { employeesService } from '../5-services/employees-service';
import { EmployeeModel } from '../3-models/employee-model';

class EmployeesController {
  // The router listens to different routes and methods
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  // Registering routes
  private registerRoutes(): void {
    this.router.get('/api/employees', this.getAllEmployees);
    this.router.get('/api/employees/:id', this.getEmployeeById);
    this.router.post(
      '/api/employees',
      securityMiddleware.validateLoggedIn,
      this.addEmployee
    );
    this.router.put(
      '/api/employees/:id',
      securityMiddleware.validateLoggedIn,
      this.updateEmployee
    );
    this.router.delete(
      '/api/employees/:id',
      securityMiddleware.validateLoggedIn,
      securityMiddleware.validateAdmin,
      this.deleteEmployee
    );
  }

  // GET all employees
  private async getAllEmployees(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const employees = await employeesService.getAllEmployees();
      response.json(employees);
    } catch (error: any) {
      next(error);
    }
  }

  // GET single employee
  private async getEmployeeById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = request.params.id;
      const employee = await employeesService.getEmployeeById(Number(id));
      response.json(employee);
    } catch (error: any) {
      next(error);
    }
  }

  // Add employee
  private async addEmployee(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // const employee = request.body;
      const employee = new EmployeeModel(request.body);
      // We must tell express to create this "body" from the given json.
      const addedEmployee = await employeesService.addEmployee(employee);
      response.status(StatusCode.Created).json(addedEmployee);
    } catch (error: any) {
      next(error);
    }
  }

  // Update existing employee
  private async updateEmployee(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      request.body.id = Number(request.params.id);
      const employee = new EmployeeModel(request.body);
      // We must tell express to create this "body" from the given json.
      const updatedEmployee = await employeesService.updateEmployee(employee);
      response.json(updatedEmployee);
    } catch (error: any) {
      next(error);
    }
  }

  // Delete existing employee
  private async deleteEmployee(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = +request.params.id;
      await employeesService.deleteEmployee(id);
      response.sendStatus(StatusCode.NoContent); // same as response.statue(StatusCode.NoContent).json();
    } catch (error: any) {
      next(error);
    }
  }
}

const employeesController = new EmployeesController();
export const employeesRouter = employeesController.router;
