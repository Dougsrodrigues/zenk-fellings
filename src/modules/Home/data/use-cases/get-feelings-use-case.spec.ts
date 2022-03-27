import { UnexpectedError } from '~/app/domain/errors/unexpected-error';
import { mockHttpResponse } from '~/app/infra/tests/mock-axios';
import { HttpClientSpy } from '~/app/infra/tests/mock-http';
import { Feelings } from '../../domain/types';
import { mockFellings } from '../tests/mock-fellings';
import { GetFeelingsUseCase } from './get-feelings-use-case';

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy<Feelings[]>();

  const sut = new GetFeelingsUseCase(httpClientSpy);

  return { sut, httpClientSpy };
};

describe('get-feelings-use-case', () => {
  it('Should return an Fellings[] if status 200', async () => {
    const { sut, httpClientSpy } = makeSut();

    const httpResult = mockHttpResponse(mockFellings, 200);

    httpClientSpy.response = httpResult;

    const fellings = await sut.execute();

    expect(fellings).toEqual(httpResult.httpDataResponse);
  });

  it('Should throw an UnexpectedError if status 500', async () => {
    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = mockHttpResponse(500);

    const promise = sut.execute();

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
});
