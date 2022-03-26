import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { HttpResponse } from '~/app/domain/types/http-interfaces';
import { useDataFetchingAdapter } from '~/app/infra/http/data-fetching/data-fetching-adapter';
import { api } from '../../../../app/infra/http/axios/api';
import { AxiosHttpClient } from '../../../../app/infra/http/axios/axios-http';
import { Fellings } from '../../domain/types';

export const Home = () => {
  const httpClient = new AxiosHttpClient(api);

  const get = () => {
    return httpClient.request({
      url: '/posts',
      method: 'get',
    });
  };

  const { data, isLoading } = useDataFetchingAdapter<HttpResponse<Fellings>>(
    'teste',
    get,
  );

  if (isLoading) {
    console.log('AAA');
  }

  console.log(data);
  return (
    <Container>{/* {data && <Text>{JSON.stringify(data)}</Text>} */}</Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;

  height: 100%;
`;
