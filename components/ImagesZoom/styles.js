import styled, { createGlobalStyle } from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

export const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

export const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

export const Global = createGlobalStyle`
  .slick-slide{
    display: inline-block;
  }

  .ant-card-cover{
    transform: none !important ;
  }
`;
