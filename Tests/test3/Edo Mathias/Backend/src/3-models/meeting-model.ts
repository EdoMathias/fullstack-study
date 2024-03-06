import Joi from 'joi';
import { ValidationError } from './client-errors';

export class MeetingModel {
  public id: number;
  public teamId: number;
  public startDateTime: string;
  public endDateTime: string;
  public description: string;
  public roomName: string;

  public constructor(meeting: MeetingModel) {
    this.id = meeting.id;
    this.teamId = meeting.teamId;
    this.startDateTime = meeting.startDateTime;
    this.endDateTime = meeting.endDateTime;
    this.description = meeting.description;
    this.roomName = meeting.roomName;
  }

  private static insertValidationSchema = Joi.object({
    id: Joi.number().forbidden(),
    teamId: Joi.number().required().integer().positive(),
    startDateTime: Joi.string().required().isoDate(),
    endDateTime: Joi.string().required().isoDate(),
    description: Joi.string().required().min(4).max(100),
    roomName: Joi.string().required().min(2).max(45),
  });

  public validateInsert(): void {
    const result = MeetingModel.insertValidationSchema.validate(this);
    if (result.error?.message) {
      throw new ValidationError(result.error.message);
    }
  }
}
