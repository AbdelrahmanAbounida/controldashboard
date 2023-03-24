import {AiFillHome} from 'react-icons/ai'
import {TbManualGearbox} from 'react-icons/tb'
import {BiCodeAlt} from 'react-icons/bi'
import { AiOutlineSetting} from 'react-icons/ai'
import {FiDatabase} from 'react-icons/fi'
import {AiOutlineRobot} from 'react-icons/ai'
import {MdViewInAr} from 'react-icons/md'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Paper } from '@mui/material'
import { teal,orange } from '@mui/material/colors';

    
const section1 = ['Home', 'Control Panel', 'Live View','Configure Data'];
const section2 = [ 'Settings', 'Database'];
const links1 = ["/","/control_panel","/live",'/config_dataset']
const links2 = ['/settings','/api']

const iconStyles = {
    color:'primary.light',
    fontSize:27,
    fontWeight:"bold",
    
}


const icons1 = [
    <AiFillHome />,
    <TbManualGearbox />,
    <AiOutlineRobot />,
    <MdViewInAr/>]

const icons2 = [
    <AiOutlineSetting />,
    <FiDatabase />,
    // <BiCodeAlt />,
]

const AppBar = styled(MuiAppBar)(({ theme, open,drawer_width }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawer_width}px)`,
        marginLeft: `${drawer_width}px`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    }));
    
const DrawerHeader = styled(Paper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
    backgroundColor:'#25292a',
    border:3,
}));


export  {section1,section2,icons1,icons2, links1,links2,iconStyles,AppBar,DrawerHeader }