import React from 'react'
import ImageMapper from 'react-img-mapper'

const Mapper = () => {
  const url = {program_1};
  const name = 'mk-map';
  const areas = './areas.json'
  return <ImageMapper src={url} name={name} areas={areas} />;
};

export default Mapper;