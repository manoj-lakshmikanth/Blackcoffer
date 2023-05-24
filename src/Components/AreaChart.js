import { Box, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import userContext from '../Context';
import { getPolitical, getTechnological } from '../api/api';

const AreaChart = () => {
  const { colorBlack } = useContext(userContext);

  const [graphData, setGraphData] = useState({
    intensity: [],
    likelihood: [],
    relevance: [],
  });

  const [areaData, setAreaData] = useState({
    intensity: [],
    likelihood: [],
    relevance: [],
  });

  const [clicked, setClicked] = useState({
    inClick: false,
    liClick: false,
    reClick: false,
  });

  const [options, setOptions] = useState({
    chart: {
      type: 'area',
      backgroundColor: colorBlack === true ? '#36454F' : 'white',
    },
    title: {
      text: 'Area Chart for PESTLE property',
      style: {
        color: colorBlack === false ? '#36454F' : 'white', // Set the font color
        marginBottom: '100px',
      },
    },
    xAxis: {
      title: {
        text: 'Number of Datapoints -->',
        style: {
          color: colorBlack === false ? '#36454F' : 'white', // Set the font color
          fontSize: '15px',
          fontWeight: '500',
          fontFamily: 'Raleway',
        },
      },
      labels: {
        style: {
          color: colorBlack === false ? '#36454F' : 'white', // Set the font color
        },
      },
    },
    yAxis: {
      title: {
        text: 'Intensity/ Likelihood/ Relevance -->',
        style: {
          color: colorBlack === false ? '#36454F' : 'white', // Set the font color
          fontSize: '15px',
          fontWeight: '500',
          fontFamily: 'Raleway',
        },
      },
      labels: {
        style: {
          color: colorBlack === false ? '#36454F' : 'white', // Set the font color
        },
      },
    },
    plotOptions: {
      area: {
        pointStart: 0,
        series: {
          smooth: true, // Enable smooth curves
        },
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [
      {
        name: 'Political',
        data: [2, 5, 3, 5, 3, 2, 6, 4, 6, 3], // Replace with your data points
      },
      {
        name: 'Technological',
        data: [1, 5, 3, 4, 2, 6, 5, 4],
      },
    ],
  });

  async function getAllPolitical() {
    let response = await getPolitical();
    // console.log(response.data.data);
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < 30; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
  }

  async function getAllTechnological() {
    let response = await getTechnological();
    // console.log(response.data.data);
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < EnergyArr.length; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    setAreaData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
  }

  const intensityClick = () => {
    const newOptions = {
      ...options,
      series: [
        {
          name: 'Political',
          data: graphData.intensity, // Replace with your data points
        },
        {
          name: 'Technological',
          data: areaData.intensity,
        },
        // {
        //   name: 'Intensity',
        //   data: graphData.intensity,
        //   labels: {
        //     style: {
        //       color: '#000000', // Set the font color of data point names
        //     },
        //   },
        // },
      ],
    };
    setOptions(newOptions);
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  };

  const likelyClick = () => {
    const newOptions = {
      ...options,
      series: [
        {
          name: 'Political',
          data: graphData.likelihood, // Replace with your data points
        },
        {
          name: 'Technological',
          data: areaData.likelihood,
        },
        // {
        //   name: 'Likelyhood',
        //   data: graphData.likelihood,
        //   labels: {
        //     style: {
        //       color: 'red', // Set the font color of data point names
        //     },
        //   },
        // },
      ],
    };
    setOptions(newOptions);
    setClicked({ ...clicked, inClick: false, liClick: true, reClick: false });
  };

  const relevantClick = () => {
    const newOptions = {
      ...options,
      series: [
        {
          name: 'Political',
          data: graphData.relevance, // Replace with your data points
        },
        {
          name: 'Technological',
          data: areaData.relevance,
        },
        // {
        //   name: 'Relevant',
        //   data: graphData.relevance,
        //   labels: {
        //     style: {
        //       color: 'red', // Set the font color of data point names
        //     },
        //   },
        // },
      ],
    };
    setOptions(newOptions);
    setClicked({ ...clicked, inClick: false, liClick: false, reClick: true });
  };

  useEffect(() => {
    getAllPolitical();
    getAllTechnological();
  }, []);

  return (
    <Box
      sx={{
        dsplay: 'flex',
        flexDirection: 'column',
        columnGap: '50px',
        width: '60%',
      }}
    >
      <Box>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '20%',
          justifyContent: 'center',
          marginTop: '25px',
        }}
      >
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '15%',
            height: '30px',
            background: clicked.inClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
            fontSize: '12px',
          }}
          onClick={intensityClick}
        >
          Intensity
        </Button>
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '15%',
            height: '30px',
            // background: colorBlack === true ? '#36454F' : 'white',
            background: clicked.liClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
            fontSize: '12px',
          }}
          onClick={likelyClick}
        >
          Likelyhood
        </Button>
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '15%',
            height: '30px',
            // background: colorBlack === true ? '#36454F' : 'white',
            background: clicked.reClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
            fontSize: '12px',
          }}
          onClick={relevantClick}
        >
          Relevance
        </Button>
      </Box>
    </Box>
  );
};

export default AreaChart;
