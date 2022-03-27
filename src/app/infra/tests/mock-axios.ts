import axios from 'axios';
import faker from '@faker-js/faker';

const randomObject = { far: 'valueA', for: 42, bar: 'valueB' };

export const mockHttpResponse = (
  response?: any,
  httpStatus = faker.datatype.number(),
) => ({
  httpDataResponse: response || randomObject,
  httpStatus,
});

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse());

  return mockedAxios;
};
