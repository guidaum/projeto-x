import {
  borderRadius,
  color,
} from './../../../node_modules/@mui/system/index.d';
import  background  from '@/config/img/floatMenu.svg';
import styled, { css } from 'styled-components';
import backgroundMobile from '@/config/img/ourMastersBgMobile.svg';
import elementsMobile from '@/config/img/elementsMobile.svg';

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 28vh;
    .contentCard {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      width: 40vw;
      color: ${theme.colors.white};
      margin-left: 10rem;
      height: fit-content;
      min-height: 500px;
      max-height: 100vh;
      max-height: 100%;

      h1 {
        font-size: 48px;
        line-height: 57.6px;
      }
      h3 {
        font-size: 20px;
        line-height: 22.8px;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        width: fit-content;
        max-width: 90vw;
      }

      @media only screen and (max-width: 1200px) {
        width: 50vw;
      }
      @media only screen and (max-width: 731px),
        only screen and (max-height: 540px) {
        width: 50vw;
        h1 {
          font-size: 35px;
          line-height: 57.6px;
        }
        h3 {
          font-size: 20px;
          line-height: 22.8px;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 15px;
          line-height: 20px;
          width: 100%;
        }
      }

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    .buttonGroup {
      display: flex;
      margin-top: 2rem;

      .knowAxarca {
        cursor: pointer;
        border: none;
        margin-right: 2rem;
        padding: 10px;
        background: none;
        border-radius: 9px;
        font-size: 23px;
        background: ${theme.colors.secondary};
        color: ${theme.colors.white};
        transition: opacity 300ms ease-in-out;

        &:hover {
          opacity: 0.6;
        }
      }

      .knowXilo {
        cursor: pointer;
        border: 4px solid rgba(254, 253, 253, 1);
        padding: 10px;
        background: none;
        border-radius: 9px;
        font-size: 23px;
        color: ${theme.colors.white};
        transition: opacity 300ms ease-in-out;

        &:hover {
          opacity: 0.6;
        }
      }
      @media only screen and (max-width: 731px),
        only screen and (max-height: 450px) {
        .knowAxarca {
          font-size: 18px;
        }

        .knowXilo {
          font-size: 18px;
        }
      }
    }
  `}
`;

export const CardSection = styled.section`
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  margin-top: 6rem;
  margin-bottom: 3rem;

  .ourMasters {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin-left: 6rem;
    .ourMastersMobile {
      width: 100%;
      height: fit-content;
      background-image: url(${backgroundMobile.src});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      flex-direction: column;
      .elements {
        width: 100%;
        height: fit-content;
        background-image: url(${elementsMobile.src});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        flex-direction: column;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .ourMasters {
      margin-left: 0;
      width: 100%;
    }
  }
`;

export const HomeSection = styled.section`
  display: flex;
  height: 100vh;
  align-items: center;
`;

export const HomeSectionMain = styled.section`
  display: flex;
  height: 123vh;
  align-items: center;
  background: linear-gradient(rgba(67, 25, 4, 0.19), rgba(67, 25, 4, 1));
  @media only screen and (max-width: 768px) {
    background: none;
    height: auto;
  }
`;

export const HomeTitle = styled.h2`
  ${({ theme }) => css`
    font-weight: 700;
    margin-left: 6rem;
    margin-bottom: 2rem;
    font-size: 48px;
    line-height: 57.6px;
    color: ${theme.colors.darkPrimary};
    justify-content: space-between;
    display: flex;

    @media only screen and (max-width: 712px) {
      margin: 0;
      width: 100%;
      text-align: center;
    }

    @media only screen and (max-width: 768px) {
      font-size: 30px;
      margin: 0;
      width: 90%;
      height: fit-content;
      text-align: left;
      margin-left: 3rem;
      color: ${theme.colors.white};
    }
  `}
`;
export const MediaContainer = styled.div`
  ${({ theme }) => css`
    width: (calc('100%' - '4vw'));
    margin: 0 2vw;
    padding: 2rem;
    height: fit-content;
    max-height: 100vh;
    background: #895d47;
    border-radius: 10px;
    .content {
      height: fit-content;
      max-height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      @media only screen and (max-width: 712px) {
        flex-direction: column;
        max-height: 120vh;
      }
    }

    .video {
      height: 60vh;
      width: 45vw;

      iframe {
        width: 100%;
        height: 100%;
      }

      @media only screen and (max-width: 712px) {
        width: 70%;
        height: 30vh;
        margin: 3rem 0 3rem 0;
      }
    }
    .textContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: fit-content;
      max-height: 110vh;
      width: fit-content;
      max-width: 45vw;
      align-items: center;

      @media only screen and (max-width: 712px) {
        max-width: 90vw;
        max-height: 120vh;
      }

      .textHeader {
        display: flex;
        height: fit-content;
        max-height: 20vh;
        width: 100%;
        justify-content: start;
        h3 {
          display: flex;
          font-size: 28px;
          line-height: 48px;
          color: ${theme.colors.white};
          text-align: start;
          max-height: 100%;
        }
      }
      .textBody {
        width: 45vw;
        height: fit-content;
        max-height: 90vh;
        display: flex;
        align-items: start;
        flex-direction: column;

        .mainText {
          width: 100%;
          height: fit-content;
          max-height: 80vh;
          margin: 3rem 0;
          display: flex;
          text-align: start;
          align-items: center;
          justify-content: center;
          p {
            width: 100%;
            font-size: 2rem;
            color: ${theme.colors.white};

            @media only screen and (max-width: 1350px),
              only screen and (max-height: 661px) {
              font-size: 20px;
              line-height: 33px;
            }
            @media only screen and (max-width: 712px),
              only screen and (max-height: 481px) {
              line-height: 28px;
            }
          }
        }
        .buttonContainer {
          display: flex;
          height: fit-content;
          max-height: 10vh;
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: ${theme.colors.white};
            background-color: ${theme.colors.secondary};
            padding: 30px 80px 30px 80px;
            border: none;
            border-radius: 9px;
            font-size: 23px;

            @media only screen and (max-width: 1100px) {
              font-size: 18px;
              padding: 20px 60px 20px 60px;
            }
          }
        }

        @media only screen and (max-width: 378px) {
          .mainText p {
            font-size: 20px;
            line-height: 23px;
          }

          .buttonContainer button {
            font-size: 15px;
            padding: 15px 40px;
          }
        }

        @media only screen and (max-width: 712px) {
          width: 90vw;
          .textHeader {
            width: 90vw;
          }
          p {
            font-size: 25px;
            margin: 1rem 0 1rem 0;
            line-height: 28px;
          }
          button {
            font-size: 18px;
            padding: 20px 30px 20px 30px;
          }
        }
      }
    }
  `}
`;

export const ButtonScroll = styled.button`
  padding: 1.5rem 2rem;
  gap: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  font-size: 1vw;
  border: none;
  ${({ theme }) => css`
    background: ${theme.colors.lightSecondary};
    color: ${theme.colors.white};
  `}
  &:hover {
    opacity: 0.6;
  }
  height: 100%;
  margin-right: 2rem;
  height: fit-content;
`;
