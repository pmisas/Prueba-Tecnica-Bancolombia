export interface IOrderItem { // Define aquí si no está importada
  order: number;
  title: string;
  content: string;
  character?: string;
  notation?: string;
}

export interface IEscena {
  title: string;
  espacio: string;
  ubicacion: string;
  momento: string;
  order: number;
}

