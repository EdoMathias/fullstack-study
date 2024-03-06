import { Document, ObjectId, Schema, model } from 'mongoose';
import { AuthorModel } from './author-model';

// 1 - Interface describing our model
export interface IBookModel extends Document {
  // We inherit _id from Document.
  name: string;
  price: number;
  authorId: ObjectId; //MongoDB PK/FK object.
}

// 2 - Schema describing rules regarding the model:
export const BooksSchema = new Schema<IBookModel>(
  {
    name: {
      type: String,
      required: [true, 'Missing book name.'],
      maxlength: [50, 'Name too long.'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Missing price.'],
      min: [0, "Price can't be negative."],
      max: [1000, "Price can't exceed 1000."],
    },
    authorId: {
      type: Schema.ObjectId,
      required: [true, 'Missing author id.'],
    },
  },
  {
    versionKey: false, // Don't add __v for every object added.
    toJSON: {
      virtuals: true, // Allow to create virtual fields
    },
    id: false, // Don't duplicate "_id" to "id" property
  }
);

// Virtual field: another property (a non existent one) which we create on the fly.
BooksSchema.virtual('author', {
  ref: AuthorModel, // Which other model describes this field
  foreignField: '_id', // Primary key name located in authors model (_id)
  localField: 'authorId', // Foreign key name located in book model (authorId)
  justOne: true, // A single object and not an array.
});

// 3 - The actual model:
export const BookModel = model<IBookModel>('BookModel', BooksSchema, 'books'); // "model-name", schema, "collection"
