import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/joy/Divider';
import AspectRatio from '@mui/joy/AspectRatio';
import { useState } from 'react';
import Modal from '../Modal';
import image from '../../Components/mascotte2.jpg'
const Menu = ({ items }) => {
  const [model, setModel] = useState(false);
  const [tempData, setTempdata] = useState([]);
  const getData = (prix1, LibArt, Descrip, imagepath) => {
    let tempData = [prix1, LibArt, Descrip, imagepath];
    setTempdata(item => [1, ...tempData]);
    console.warn(tempData);
    return setModel(true);
  }

  return (
    <div className="display">
      {items.map((item) => {
        const { CodeArt, LibArt, imagepath, prix1, Descrip } = item;

        return (

          <article key={CodeArt} >
            <Card
              variant="outlined"
              row
              sx={{
                width: 320,
                gap: 1,
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                marginBottom: 1,
              }}
            >
              <div style={{ "display": "flex" }}>

                <AspectRatio ratio="1" sx={{ width: 100, marginLeft: 1, marginTop: 1, marginBottom:1 }}>
                  <img
                    border-radius='10px'
                    radius={10}
                    src={image}
                    srcSet={image}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>

                <div>
                  <Typography level="h2" font-size="0.75rem" id="card-description" mb={0.5} marginLeft="15px" marginTop={2}>
                    {LibArt.toLowerCase()}
                  </Typography>
                  <Typography fontSize="sm" aria-describedby="description" mb={1}
                    marginLeft="15px"
                    font-weight="lighter"
                    font-size="0.5rem"
                    line-height="1.5"
                    variant="outlined">
                    {prix1} dt
                  </Typography>
                  <button className="btn btn-primary" onClick={() => getData(prix1, LibArt, Descrip, imagepath)}>
                    Details
                  </button>

                </div>
              </div>

              <Divider />
            </Card>
          </article>
        );
      })}
      {
        model === true ? <Modal prix1={tempData[1]} LibArt={tempData[2]} Descrip={tempData[3]} imagepath={tempData[4]} hide={() => setModel(false)} /> : ''
      }
    </div>
  );
};


export default Menu;
