import { basic } from '@/styles/palette';
import styled from '@emotion/styled';

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  height: 26px;
  margin-top: 12px;
  margin-bottom: 12px;

  display: flex;
  align-items: center;

  input[type='radio'] {
    appearance: none;
    margin-right: 16px;

    width: 24px;
    height: 24px;
    border-radius: 50%;

    border: 7px solid ${basic.gray1};

    &:checked {
      border: 7px solid ${basic.gray9};
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export const CurrencyTypeChoiceBottomSheetModalUI = {
  RadioContainer,
  Label,
};
