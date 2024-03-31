import { Document, Schema, model } from 'mongoose';

// 1. Interface
export interface IAttackModel extends Document {
  latitude: number;
  longitude: number;
}

// 2. Schema
export const AttackSchema = new Schema<IAttackModel>(
  {
    latitude: {
      type: Number,
      min: [-90, 'Min latitude muse be -90'],
      max: [90, 'Max latitude muse be 90'],
    },
    longitude: {
      type: Number,
      min: [-180, 'Min longitude muse be -90'],
      max: [180, 'Max longitude muse be 90'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// 3. model
export const AttackModel = model<IAttackModel>(
  'AttackModel',
  AttackSchema,
  'attacks'
);
