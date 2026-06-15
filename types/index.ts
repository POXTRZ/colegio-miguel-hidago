export interface Noticia {
  id: number;
  titulo: string;
  categoria: string;
  fecha: string;
  resumen: string;
  imagen: string;
  slug: string;
}

export interface NivelEscolar {
  id: string;
  nombre: string;
  rango: string;
  descripcion: string;
  color: string;
  bgColor: string;
  href: string;
}

export interface Diferenciador {
  titulo: string;
  descripcion: string;
  icono: string;
}
