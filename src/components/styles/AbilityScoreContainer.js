import styled from "styled-components";

export const AbilityScoreContainer = styled.div`
  margin: 21px 14px 12px 14px;
  h3 {
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 12px;
  }
`;

export const StatContainer = styled.div`
  marign: 12px 13px 12px 13px;
  display: flex;
  flex-direction: row;
  div {
    flex-basis: 33%;
    justify-content: space-between;
    flex-wrap: wrap;
    marign: 9px 9px 9px 9px;
    height: 110px;
    width: 110px;
  }
`;
