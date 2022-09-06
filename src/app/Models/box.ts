export interface BOX {
  id: number,
  title: string;
  description: string;
  icon: string;
  modules?: (Modules)[] | null;
}

export interface Modules {
  icon: string;
  name: string;
}