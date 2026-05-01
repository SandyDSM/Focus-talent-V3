import React from 'react'
import BannerSearch from './BannerSearch';
import BannerSearchAll from './BannerSearchAll';
import { useTranslation } from "react-i18next";

function HeadTeam({ title = "Mi Equipo", OpcionSelect, all, setCloseSerchAll }) {
  const { t } = useTranslation();

  return (
    <div className='mt-2 flex flex-col gap-2'>
      {all == "0" ?
        <BannerSearch width={"100%"} OpcionSelect={OpcionSelect} /> :
        <BannerSearchAll width={"100%"} setCloseSerchAll={setCloseSerchAll} />
      }
    </div>
  );
}

export default HeadTeam;
