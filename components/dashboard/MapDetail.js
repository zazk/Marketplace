import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DashboardMap from './DashboardMap';
import MapVisualization from './MapVisualization';
import heatmapdata2 from './data-biomass-greatforest';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'red',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});
export default function MapDetail() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const classes = useStyles();

  return (
    <div>
      <div className="detail-legend">
        <div className="legend-select">
          <Button
            classes={{
              root: classes.root,
              label: classes.label,
            }}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Biomass
            <img className="legend-select-icon" src="/static/iconos/arrow-head.svg" width="6" alt="" />
          </Button>
          <Menu
            classes={{ paper: classes.paper }}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Carbon Inventory</MenuItem>
            <MenuItem onClick={handleClose}>Tree Cover</MenuItem>
            <MenuItem onClick={handleClose}>Fire Risk</MenuItem>
          </Menu>
        </div>
        <figure>
          <img src="/static/assets/images/graphic-biomass.png" width="234" alt="" />
        </figure>
      </div>
      <MapVisualization data={heatmapdata2} />
      <style jsx>
        {`
          .detail-legend {
            width: 234px;
            padding-top: 16px;
            border-radius: 10px;
            box-shadow: 0 0 1px 2px rgba(9, 43, 49, 0.14);
            background-color: #ffffff;
            box-sizing: border-box;
            position: absolute;
            top: 13px;
            left: 18px;
            z-index: 1;
            figure {
              border-radius: 0px 0px 10px 10px;
              overflow: hidden;

              img {
                max-width: 100%;
                height: auto;
                display: block;
              }
            }
          }
          .imagen-legend {
            display: flex;
            flex-flow: row wrap;
          }
          .numbers-legend {
            width: 33.33%;
            font-size: 12px;
            color: #969db6;
            &:nth-child(2) {
              text-align: center;
            }
            &:last-child {
              text-align: right;
            }
          }
          .legend-select-icon {
            transform: rotate(-90deg);
            margin-left: 10px;
          }

          .legend-select {
            display: inline-block;
            position: relative;
            min-width: 115px;
            margin-left: 10px;
            padding-bottom: 5px;
            .label-select {
              cursor: pointer;
              text-transform: uppercase;
              color: #000;
              font-size: 14px;
              font-weight: 500;
              padding-left: 16px;
              padding-right: 10px;
            }
            &:hover {
              span {
                text-decoration: underline;
              }
            }
          }
        `}
      </style>
    </div>
  );
}
