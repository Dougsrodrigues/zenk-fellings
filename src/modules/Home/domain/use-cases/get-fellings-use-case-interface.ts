import { Feelings } from '../types';

export interface IGetFeelingsUseCase {
  getFeelings: () => Promise<Feelings[]>;
}
