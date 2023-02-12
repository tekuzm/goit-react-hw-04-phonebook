import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const Bullet = styled.span`
  display: inline-block;
  vertical-align: middle;
  background-size: 100%;
  height: 10px;
  width: 10px;
  margin-right: 5px;
  background-color: black;
  border-radius: 25px;
`;

const DeleteBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 14px;
  font-size: 20px;

  border-radius: 6px;
  border: none;

  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  touch-action: manipulation;

  &:hover,
  &:focus {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
      0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
`;

export { Item, Bullet, DeleteBtn };
