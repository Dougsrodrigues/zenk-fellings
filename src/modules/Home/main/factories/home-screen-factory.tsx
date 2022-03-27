import React from 'react';
import { HomeScreen } from '../../presentation/screens/home-screen';
import { makeGetFeelingsUseCase } from './get-feelings-use-case-factory';

export const MakeHomeScreen: React.FC = () => {
  return <HomeScreen getFeelingsUseCase={makeGetFeelingsUseCase()} />;
};
