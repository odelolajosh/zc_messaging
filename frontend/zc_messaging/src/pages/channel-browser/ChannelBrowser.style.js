import styled from "styled-components"

export const ChannelBrowserWrapper = styled.div`
  flex: 1;
`

export const ChannelBrowserHeader = styled.header`
  background: #00b87c;
  height: 44px;
  width: 100%;
  padding: 6px 16px;

  & > h3 {
    color: white;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
`

export const ChannelBrowserArea = styled.div`
  height: calc(100% - 44px);
  background: white;
  width: 100%;
  padding: 16px;
`

export const InputWrapper = styled.div`
  width: 100%;
  height: 49px;
  position: relative;

  & > input {
    width: 100%;
    height: 100%;
    padding-left: 44px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    outline: none;
    border: 0.8px solid #99999933;

    &::placeholder {
      color: #b0afb0;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 15px;
    }
  }

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 100%;
    display: grid;
    place-items: center;
  }
`

export const ChannelListSection = styled.div`
  margin-top: 42px;

  & > header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    & > div {
      display: flex;
      gap: 24px;
    }
  }
`

export const ChannelAction = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #b0afb0;
  cursor: pointer;
`
