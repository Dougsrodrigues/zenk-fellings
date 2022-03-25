import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { api } from '../../../../app/infra/http/axios/api';
import { AxiosHttpClient } from '../../../../app/infra/http/axios/axios-http';

export const Home = () => {
  const httpClient = new AxiosHttpClient(api);

  useEffect(() => {
    const get = async () => {
      const { data, httpStatus } = await httpClient.request({
        url: '/posts',
        method: 'get',
      });

      console.log('data', data);
      console.log('httpStatus', httpStatus);
    };
    get();
  }, []);

  return <Container />;
};

const Container = styled.View``;
