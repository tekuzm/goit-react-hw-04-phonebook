import styled from 'styled-components';

const FilterWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const FilterInput = styled.input`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: large;
  margin: 0.5rem auto;
  padding: 0.5rem 5rem 0.5rem 0.5rem;
  text-align: left;
`;

export { FilterWrap, FilterInput };
