// Create Vinyl model,
// we defined a required member
//by putting explation mark

export class Vinyl {
  id!: string;
  artist!: string;
  albumTitle!: string;
  genre!: string;
  year!: number;
  format!: string;
  price!: number;
  favorite!: boolean;
  imageUrl!: string;
}
