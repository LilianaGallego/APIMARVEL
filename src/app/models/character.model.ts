 /*Modelo para Personaje
 */
export interface Character {
  data: Data
}

export interface CharacterDTO extends Partial<Result> { }
export interface Data{
  offset: number,
  limit: number,
  total: number,
  count: number,
  results: Result[],
}

export interface Result{
  id: string,
  name: string,
  description: string,
  thumbnail: Thumbnail,
}

export interface Thumbnail{
  path: string,
  extension: string,
}
