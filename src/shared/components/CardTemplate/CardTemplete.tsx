import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  height: 100%;
  width: 15%;
  max-height: 100px;
  min-height: 40px;
`;

const StyledWrapper = styled.div`
  height: 300px;
`;

export interface CardTemplateInterface {
  img: string;
  title: string;
  children: ReactNode;
  onClickDetail: (title: string) => void;
}

const CardTemplate = ({
  img,
  title,
  children,
  onClickDetail,
}: CardTemplateInterface): ReactElement => {
  const wiewName = (): void => {
    onClickDetail(title);
  };

  return (
    <StyledWrapper>
      <div onClick={wiewName} className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <StyledImg src={img} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            <b>{title}</b>
          </span>
          {children}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default CardTemplate;
