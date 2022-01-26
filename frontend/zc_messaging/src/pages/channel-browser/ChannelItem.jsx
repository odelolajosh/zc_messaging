import React from "react"
import styled from "styled-components"

const ChannelItem = () => (
  <ChannelItemWrapper>
    <div className="body">
      <h3>Announcement</h3>
      <ChannelItemStatusSection>
        <div className="group">
          <ChannelItemStatus className="joined">Joined</ChannelItemStatus>
          <div className="divider" />
          <ChannelItemStatus className="members">705 members</ChannelItemStatus>
          <div className="divider" />
          <ChannelItemStatus>For everyone</ChannelItemStatus>
        </div>
        <div className="group">
          <ChannelItemStatus className="required">Required</ChannelItemStatus>
        </div>
      </ChannelItemStatusSection>
    </div>
    <div className="actions">
      <ChannelItemActionButton>View</ChannelItemActionButton>
      <ChannelItemActionButton className="primary">
        Join
      </ChannelItemActionButton>
    </div>
  </ChannelItemWrapper>
)

const ChannelItemWrapper = styled.main`
  padding: 16px;
  border-top: 0.8px solid #99999933;
  display: flex;
  overflow: hidden;
  position: relative;

  & > .body {
    flex: 1;

    h3 {
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 15px;
      color: #1d1d1d;

      &::before {
        content: "#";
      }
    }
  }

  & > .actions {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 28px;
    transform: translateX(calc(100% + 10px));
    opacity: 0;
    transition: transform 300ms ease-in-out, opacity 150ms ease-in-out;
  }

  &:hover > .actions {
    opacity: 1;
    transform: translateX(0);
  }
`

const ChannelItemStatusSection = styled.div`
  display: flex;
  justify-content: space-between;

  & .group {
    cursor: pointer;
    gap: 16px;
    display: flex;
    align-items: center;
  }

  & .divider {
    border-radius: 2px;
    width: 3px;
    height: 3px;
    background: #c4c4c4;
  }
`

const ChannelItemStatus = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #b0afb0;

  &.joined {
    color: #00b87c;
    &::before {
      content: "✔";
      padding-right: 4px;
      color: #00b87c;
    }
  }
  &.members {
    font-weight: bold;
  }

  &.required {
    &::after {
      content: url("assets/alert.svg");
      margin-left: 4px;
    }
  }
`

const ChannelItemActionButton = styled.button`
  outline: none;
  border: 1px solid #b0afb0;
  padding: 12px 18px;
  color: #b0afb0;
  border-radius: 3px;
  background: transparent;

  &.primary {
    background: #00b87c;
    color: white;
    border: none;

    &:hover {
      box-shadow: 5px 4px 20px rgba(192, 196, 201, 0.3);
    }
  }
`

export default ChannelItem
