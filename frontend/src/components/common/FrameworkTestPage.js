// import React from 'react'
// import PropTypes from 'prop-types'
// import { makeStyles } from '@material-ui/core/styles'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
// import Typography from '@material-ui/core/Typography'
// import Box from '@material-ui/core/Box'

// import SearchBox from './SearchBox'
// import GymsIndex from '../gyms/GymsIndex'
// import { Link } from 'react-router-dom'
// import GymCardIndex from '../gyms/GymCardIndex'


import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'




const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
})

export default function CenteredTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Paper className={classes.root}>
      
      <Tabs
        value={value}
        onChange={handleChange}
        // indicatorColor="primary"
        // textColor="primary"
        centered
        className="hp-tab-style"
      >
        <Tab href="/gyms" label="Enter" /> 
      </Tabs>
    </Paper>
  )
}











// function TabPanel(props) {
//   const { children, value, index, ...other } = props

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   )
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired
// }

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`
//   }
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: 'flex',
//     height: 224
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`
//   }
// }))


// export default function VerticalTabs() {
//   const classes = useStyles()
//   const [value, setValue] = React.useState(0)

//   const handleChange = (event, newValue) => {
//     setValue(newValue)
//   }

//   return (
//     <div className={classes.root}>
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         className={classes.tabs}
//       >
//         <Tab label=" " {...a11yProps(0)} />
//         <Tab label="Bodybuilding" {...a11yProps(1)} />
//         <Tab label="Pilates" {...a11yProps(2)} />
//         <Tab label="CrossFit" {...a11yProps(3)} /> 
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         <SearchBox />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <img className="hero" width="800" src="https://static.onecms.io/wp-content/uploads/sites/35/2017/03/03190846/1200-woman-lifting-heavy-weights.jpg"></img>
//         <Link to="/gyms" component={GymsIndex}>Show</Link>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <img className="hero" width="800" src="https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2017/02/Pilates-classes-in-Singapore.jpg"></img>
//         <Link to="/gyms" component={GymsIndex}>Show</Link>
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Crossfit
//         <img className="hero" width="800" src="https://www.crossfit-lehavre.com/wp-content/uploads/2017/05/crossfit-jpegs-118-of-1321.jpg"></img>
//         <Link to="/gyms" component={GymsIndex}>Show</Link>
//       </TabPanel>
//     </div>
//   )
// }