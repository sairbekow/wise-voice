export interface IUser {
  name: string;
  pin: string;
  createdAt: Date;
}

export interface ILaw {
  id: string;
  name: string;
  description: string;
  author: IUser;
  createdAt: Date;
}

export interface ILawState {
  laws: ILaw[];
  loading: boolean,
  error: string | null,
  fetchLaws: () => void,
  getLaw: (id: string) => ILaw | undefined;
  addLaw: (law: ILaw) => void;
  editLaw: (id: string, law: ILaw) => void;
  removeLaw: (id: string) => void;
  vote: (id: string) => void;
}
