import { Document, Schema, model } from "mongoose";

// 1. Interface describing our model: 
export interface IAuthorModel extends Document {
    // We inherit _id from Document.
    firstName: string;
    lastName: string;
}

// 2. Schema describing rules regarding our model:
export const AuthorSchema = new Schema<IAuthorModel>({
    firstName: {
        type: String,
        required: [true, "Missing first name."],
        minlength: [2, "First name too short."],
        maxlength: [50, "First name too long."],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Missing last name."],
        minlength: [2, "Last name too short."],
        maxlength: [50, "Last name too long."],
        trim: true
    }
}, {
    versionKey: false // Don't add __v for every object added.
});

// 3. The actual Model:
export const AuthorModel = model<IAuthorModel>("AuthorModel", AuthorSchema, "authors"); // "model-name", schema, "collection"
