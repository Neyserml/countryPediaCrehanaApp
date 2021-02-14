import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CardTemplate from "../../../../shared/components/CardTemplate/CardTemplete";
import Header from "../../../../shared/components/Header/Header";
import useDispatchState from "../../../../shared/hooks/useDispatchState";
import { CountryPediaContext } from "../../../context";

const StayledTitle = styled.h4`
  text-align: center;
`;

const Detail: React.FC = () => {
  const [state] = useDispatchState(CountryPediaContext);
  const history = useHistory();

  const countriesDetail = state.countries?.filter(
    ({ name }) => state.countryId === name
  );

  const onBack = (): void => {
    history.goBack();
  };

  return (
    <>
      <Header />

      <div className="container">
        <StayledTitle>{` Detalle sobre ${state.countryId}`}</StayledTitle>

        {countriesDetail && (
          <div className="row">
            <div className="col s12 m6 offset-m3 ">
              <CardTemplate
                onClickDetail={() => {}}
                title={countriesDetail[0].name}
                img={countriesDetail[0].flag.svgFile}
              >
                <a onClick={onBack} href="#">
                  Volver
                </a>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Capital: </b>
                        {countriesDetail[0].capital}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Nombre Nativo: </b>
                        {countriesDetail[0].nativeName}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Población: </b>
                        {countriesDetail[0].population}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Área: </b>
                        {`${countriesDetail[0].area} Km²`}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ubicación </b>
                        <br />
                        {`Latitud: ${countriesDetail[0].location.latitude}`}
                        <br />
                        {`Longitud: ${countriesDetail[0].location.longitude}`}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </CardTemplate>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
