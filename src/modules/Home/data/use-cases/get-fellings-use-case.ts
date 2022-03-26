import { HttpClient } from '~/app/domain/types/http-interfaces';
import { IGetFillingsUseCase } from '../../domain/get-fellings-use-case-interface';
import { Fellings } from '../types';

export class GetFillingsUseCase implements IGetFillingsUseCase {
  constructor(private readonly httpClient: HttpClient<Fellings[]>) {}

  getFellings: () => { icon: string; name: string }[];
}
