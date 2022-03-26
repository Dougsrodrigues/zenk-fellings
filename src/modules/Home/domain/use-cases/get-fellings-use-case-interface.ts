import { Fellings } from '../types';

export interface IGetFillingsUseCase {
  getFellings: () => Promise<Fellings[]>;
}
