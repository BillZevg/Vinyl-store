import { Schema, model } from "mongoose";

export interface Vinyl {
  id: string;
  artist: string;
  albumTitle: string;
  genre: string;
  year: number;
  format: string;
  price: number;
  favorite: boolean;
  imageUrl: string;
}

export const VinylSchema = new Schema<Vinyl>(
  {
    artist: { type: String, required: true },
    albumTitle: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: Number, required: true },
    format: { type: String, required: true },
    price: { type: Number, required: true },
    favorite: { type: Boolean, required: false },
    imageUrl: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },

    timestamps: true,
  }
);

export const VinylModel = model<Vinyl>("vinyl", VinylSchema);
