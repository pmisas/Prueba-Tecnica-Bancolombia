export interface IOrderItem { // Define aquí si no está importada
  order: number;
  title: string;
  content: string;
  character?: string;
  notation?: string;
}

export interface IPosicionOrderItem { // Define aquí si no está importada
  order: number;
  title: string;
  x?: number;
  y?: number;
  z?: number;
  rotacion_x?: number;
  rotacion_y?: number;
  rotacion_z?: number;
  pose?:string;
  character?: string;
}

export interface IEscena {
  title: string;
  espacio: string;
  ubicacion: string;
  momento: string;
  order: number;
}

