import React, { useContext, useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  getData,
  getEnergy,
  getManufacturing,
  getAero,
  getGas,
  getOil,
  getConsumption,
  getWorld,
  getNorthernAmerica,
  getCentralAmerica,
  getIndia,
  getUSA,
  getRussia,
} from '../api/api';
import userContext from '../Context';
import { Box, Button } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const LineChart = () => {
  const { colorBlack } = useContext(userContext);
  const [sector, setSector] = useState('');
  const [topic, setTopic] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [clicked, setClicked] = useState({
    inClick: true,
    liClick: false,
    reClick: false,
  });

  const [graphData, setGraphData] = useState({
    intensity: [],
    likelihood: [],
    relevance: [],
  });

  async function getallData() {
    let response = await getData();

    if (response.msg === 'success') {
      let { resp } = response;
      let energyArr = resp.data.data;
      let arr = [];
      let arr2 = [];
      let arr3 = [];
      for (let i = 0; i < 50; i++) {
        arr[i] = energyArr[i].intensity;
        arr2[i] = energyArr[i].likelihood;
        arr3[i] = energyArr[i].relevance;
      }
      // console.log(arr);

      setGraphData({
        intensity: arr,
        likelihood: arr2,
        relevance: arr3,
      });
      setOptions({
        ...options,
        series: [
          {
            name: 'Intensity',
            data: arr,
          },
        ],
      });
    }
  }

  async function getAllEnergy() {
    let response = await getEnergy();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < 50; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  async function getAllManufacturing() {
    let response = await getManufacturing();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < EnergyArr.length; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  async function getAllAero() {
    let response = await getAero();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < EnergyArr.length; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  async function getAllGas() {
    let response = await getGas();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < 50; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  async function getAllOil() {
    let response = await getOil();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < 50; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  async function getAllConsumption() {
    let response = await getConsumption();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < EnergyArr.length; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    console.log(arr);
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  async function getAllWorld() {
    let response = await getWorld();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < 50; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    console.log(arr);
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  async function getAllNorthernAmerica() {
    let response = await getNorthernAmerica();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < 50; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    console.log(arr);
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  async function getAllCentralAmerica() {
    let response = await getCentralAmerica();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < EnergyArr.length; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    console.log(arr);
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  async function getAllIndia() {
    let response = await getIndia();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < EnergyArr.length; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    // console.log(arr);
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  async function getAllUSA() {
    let response = await getUSA();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < 50; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    // console.log(arr);
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  async function getAllRussia() {
    let response = await getRussia();
    let EnergyArr = response.data.data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < EnergyArr.length; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    console.log(arr);
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  }

  useEffect(() => {
    getallData();
  }, []);

  const [options, setOptions] = useState({
    chart: {
      type: 'spline',
      backgroundColor: colorBlack === true ? '#36454F' : 'white',
    },
    title: {
      text: 'Chart for different properties',
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
    series: [
      {
        name: 'Intensity',
        data: graphData.intensity,
        labels: {
          style: {
            color: 'red', // Set the font color of data point names
          },
        },
      },
    ],
  });

  const intensityClick = () => {
    const newOptions = {
      ...options,
      series: [
        {
          name: 'Intensity',
          data: graphData.intensity,
          labels: {
            style: {
              color: '#000000', // Set the font color of data point names
            },
          },
        },
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
          name: 'Likelyhood',
          data: graphData.likelihood,
          labels: {
            style: {
              color: 'red', // Set the font color of data point names
            },
          },
        },
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
          name: 'Relevant',
          data: graphData.relevance,
          labels: {
            style: {
              color: 'red', // Set the font color of data point names
            },
          },
        },
      ],
    };
    setOptions(newOptions);
    setClicked({ ...clicked, inClick: false, liClick: false, reClick: true });
  };

  // const StyledForm = styled(FormControl)({
  //   border: colorBlack === false ? '2px solid #36454F' : '2px solid white',
  //   borderRadius: '10px',
  //   '& > label': {
  //     color: colorBlack === false ? '#36454F' : 'white',
  //   },
  //   '& > div': {
  //     color: colorBlack === false ? '#36454F' : 'white',
  //   },
  //   '&  div': {
  //     color: colorBlack === false ? '#36454F' : 'white',
  //   },
  //   '& input': {
  //     color: colorBlack === false ? '#36454F' : 'white',
  //   },
  //   '& svg': {
  //     color: colorBlack === false ? '#36454F' : 'white',
  //   },
  // });

  const handleBlur = () => {
    setSector('');
  };

  return (
    <Box
      sx={{
        width: '90%',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        borderTop:
          colorBlack === false ? '2px solid #36454F' : '2px solid white',
        rowGap: '50px',
        paddingTop: '50px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '20%',
          justifyContent: 'center',
        }}
      >
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '10%',
            height: '30px',
            // background: colorBlack === true ? '#36454F' : 'white',
            background: clicked.inClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={intensityClick}
        >
          Intensity
        </Button>
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '10%',
            height: '30px',
            // background: colorBlack === true ? '#36454F' : 'white',
            background: clicked.liClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={likelyClick}
        >
          Likelyhood
        </Button>
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '10%',
            height: '30px',
            // background: colorBlack === true ? '#36454F' : 'white',
            background: clicked.reClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={relevantClick}
        >
          Relevance
        </Button>
      </Box>
      <Box>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>

      <Box
        sx={{
          width: '100%',
          marginBottom: '50px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          columnGap: '20px',
          color: 'red',
        }}
      >
        <FormControl
          sx={{
            width: '20%',
          }}
        >
          <InputLabel id="dropdown-label">Sector</InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={sector}
            onChange={(event) => setSector(event.target.value)}
            onBlur={handleBlur}
          >
            <MenuItem
              value="energy"
              onClick={() => {
                getAllEnergy();
              }}
            >
              Energy
            </MenuItem>
            <MenuItem
              value="environment"
              onClick={() => {
                getAllManufacturing();
              }}
            >
              Environment
            </MenuItem>
            <MenuItem
              value="water"
              onClick={() => {
                getAllAero();
              }}
            >
              Aerospace & defence
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{
            width: '20%',
          }}
        >
          <InputLabel id="dropdown-label">Topic</InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            onBlur={() => {
              setTopic(''); // Set the default value when clicked outside the dropdown
            }}
          >
            <MenuItem
              value="energy"
              onClick={() => {
                getAllGas();
              }}
            >
              Gas
            </MenuItem>
            <MenuItem
              value="environment"
              onClick={() => {
                getAllOil();
              }}
            >
              Oil
            </MenuItem>
            <MenuItem
              value="water"
              onClick={() => {
                getAllConsumption();
              }}
            >
              Consumption
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{
            width: '20%',
          }}
        >
          <InputLabel id="dropdown-label">Region</InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            onBlur={() => {
              setRegion(''); // Set the default value when clicked outside the dropdown
            }}
          >
            <MenuItem
              value="energy"
              onClick={() => {
                getAllWorld();
              }}
            >
              World
            </MenuItem>
            <MenuItem
              value="environment"
              onClick={() => {
                getAllNorthernAmerica();
              }}
            >
              North America
            </MenuItem>
            <MenuItem
              value="water"
              onClick={() => {
                getAllCentralAmerica();
              }}
            >
              Central America
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{
            width: '20%',
          }}
        >
          <InputLabel id="dropdown-label">Country</InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            onBlur={() => {
              setCountry(''); // Set the default value when clicked outside the dropdown
            }}
          >
            <MenuItem
              value="energy"
              onClick={() => {
                getAllIndia();
              }}
            >
              India
            </MenuItem>
            <MenuItem
              value="environment"
              onClick={() => {
                getAllUSA();
              }}
            >
              United States of America
            </MenuItem>
            <MenuItem
              value="water"
              onClick={() => {
                getAllRussia();
              }}
            >
              Russia
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LineChart;
