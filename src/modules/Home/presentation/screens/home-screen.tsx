import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { IGetFeelingsUseCase } from '../../domain/use-cases/get-feelings-use-case-interface';
import { useGetFeelings } from '../hooks/useGetFeelings';

interface HomeScreenProps {
  getFeelingsUseCase: IGetFeelingsUseCase;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  getFeelingsUseCase,
}) => {
  const { data, isError, error } = useGetFeelings({ getFeelingsUseCase });

  if (isError)
    return (
      <Container>
        <Text>{JSON.stringify(error.message)}</Text>
      </Container>
    );

  return <Container>{data && <Text>{JSON.stringify(data)}</Text>}</Container>;
};

const Container = styled.View`
  align-items: center;
  justify-content: center;

  height: 100%;
`;
