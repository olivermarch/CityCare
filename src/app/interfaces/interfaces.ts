export interface RespuestaIncidencias {
  ok: boolean;
  incidencias: Incidencia[];
  page: number;
}

export interface Incidencia {
  images?: string[];
  _id?: string;
  mensaje?: string;
  usuario?: Usuario;
  created?: string;
  coordinates?: string;
  state?: string;
  title?: string;
}

export interface Usuario {
  _id?: string;
  nombre?: string;
  apellidos?: string;
  avatar?: string;
  email?: string;
  password?: string;
  municipio?: string;
}

