import { Fellings } from '../data/types';

export interface IGetFillingsUseCase {
  getFellings: () => Fellings[];
}
