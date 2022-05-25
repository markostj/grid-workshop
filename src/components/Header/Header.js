import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <Button>
              <Search size={24} />
            </Button>
            <Button>
              <Menu size={24} />
            </Button>
          </ActionGroup>
          <ActionGroup>
            <UserButton>
              <User size={24} />
            </UserButton>

            <SubscribeContainer>
              <SubscribeBtn>
                Subscribe
              </SubscribeBtn>
              
              <SubscribeRoute>
                Already a subscriber?
              </SubscribeRoute>
            </SubscribeContainer>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 32px 0;
  background: var(--color-gray-900);
  @media ${QUERIES.laptopAndUp} {
    background: initial;
    margin-bottom: 80px;
  }
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp} {
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
  }
`;

const Button = styled.button`
  @media ${QUERIES.laptopAndUp} {
    color: var(--color-gray-900);
  }
`;
const SubscribeBtn = styled.button`
  padding: 10px 24px;
  border-radius: 4px;
  background-color: var(--color-primary);
  color: var(--color-white);
  line-height: 18px;
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-sans-serif);
  letter-spacing: 1px;
`;
const UserButton = styled.button`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const SubscribeContainer = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
`;

const SubscribeRoute = styled.a`
  color: var(--color-gray-900);
  text-decoration-line: underline;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  position: absolute;
  top: 44px;
  left: 50%;
  transform: translateX(-50%);
  white-space:nowrap;
`

export default Header;
