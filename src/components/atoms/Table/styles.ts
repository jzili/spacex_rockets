import { styled } from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0 3px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1096px) {
  }
`;

export const TableHeader = styled.th`
  text-align: right;
  color: #676c7e;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 15px;

  &:first-child {
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    &:first-child {
      padding-left: 30px;
    }

    &:last-child {
      padding-right: 55px;
    }
  }
`;

export const TableRow = styled.tr`
  background-color: white;
`;

export const TableCell = styled.td`
  color: #676c7e;
  font-size: 14px;
  text-align: right;
  padding: 15px;

  &:first-child {
    text-align: left;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    &:first-child {
      width: 150px;
      padding-left: 30px;
    }

    &:last-child {
      padding-right: 55px;
    }
  }
`;
