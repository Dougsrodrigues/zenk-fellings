import { Feelings } from '../types';

export interface IGetFeelingsUseCase {
  execute: () => Promise<Feelings[]>;
}
