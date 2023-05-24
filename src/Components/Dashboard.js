import React, { useContext, useEffect, useState, Component } from 'react';
import { Box, Card, Typography } from '@mui/material';
import Average from '../Images/DashboardImages/average.png';
import Relevance from '../Images/DashboardImages/relevance.png';
import Likelihood from '../Images/DashboardImages/likelihood.png';
import { getData } from '../api/api';
import styled from '@emotion/styled';
import userContext from '../Context';
import LineChart from './LineChart';
import AreaChart from './AreaChart';

const Dashboard = () => {
  const { colorBlack } = useContext(userContext);
  const [dataArr, setDataArr] = useState([]);

  const Dash = styled('Box')({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '50px',
    background: colorBlack === true ? '#36454F' : 'white',
    width: '90%',
    borderRadius: '5px',
    marginTop: '25px',
  });

  const CardStyle = styled('Card')({
    background: colorBlack === true ? '#36454F' : 'white',
    color: colorBlack === false ? '#36454F' : 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '15%',
    border: colorBlack === false ? '2px solid #36454F' : '2px solid white',
    borderRadius: '10px',
    padding: '10px',
  });

  const [intensity, setIntensity] = useState('');
  const [likelihood, setLikelihood] = useState('');
  const [relevance, setRelevance] = useState('');

  async function getallData() {
    let response = await getData();
    if (response.msg === 'success') {
      let { resp } = response;
      let energyArr = resp.data.data;
      setDataArr(energyArr);
      let intenseSum = 0;
      let likelySum = 0;
      let relevanceSum = 0;
      for (let i = 0; i < energyArr.length; i++) {
        intenseSum += Number(energyArr[i].intensity);
        likelySum += Number(energyArr[i].likelihood);
        relevanceSum += Number(energyArr[i].relevance);
      }
      let avg = intenseSum / energyArr.length;
      let likelyAvg = likelySum / energyArr.length;
      let relevanceAvg = relevanceSum / energyArr.length;
      setIntensity(avg);
      setLikelihood(likelyAvg);
      setRelevance(relevanceAvg);
    }
  }

  useEffect(() => {
    getallData();
  }, []);

  return (
    <Dash>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '20px',
        }}
      >
        <CardStyle>
          <Typography>Average Intensity</Typography>
          <img src={Average} alt="" />
          <Typography>{intensity}</Typography>
        </CardStyle>
        <CardStyle>
          <Typography>Average Likelihood</Typography>
          <img src={Likelihood} alt="" />
          <Typography>{likelihood}</Typography>
        </CardStyle>
        <CardStyle>
          <Typography>Average Relevance</Typography>
          <img src={Relevance} alt="" />
          <Typography>{relevance}</Typography>
        </CardStyle>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: '150px',
        }}
      >
        <LineChart />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '90%',
          }}
        >
          <AreaChart />
        </Box>
      </Box>
    </Dash>
  );
};

export default Dashboard;
