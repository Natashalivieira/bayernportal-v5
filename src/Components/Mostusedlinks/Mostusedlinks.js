import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  InfoColumn2,
  InfoColumn3,
  TextWrapper,
  TopLine,
  Heading,

} from './Mostusedlinks.elements';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 380,
        color: 'white',
      },
}))

export default function Mostusedlinks({}) {

  const classes = useStyles();

  return (
    <>
      <InfoSec data-tut="reactour__links">
        <Container>
            <InfoColumn3>
                <Heading lightText={true}>Am häufigsten gesuchte Leistungen</Heading>
            </InfoColumn3>
            
          <InfoRow>
            <InfoColumn2>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <DescriptionIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <Link className={classes.root}>Meldebescheinigung</Link>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <HomeWorkIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <Link className={classes.root}><ListItemText primary="Reisepass" /></Link>
                </ListItem>
            </List>
            </InfoColumn2>

             <InfoColumn2>
             <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <Link className={classes.root}><ListItemText primary="Steuern" /></Link>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <SchoolIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <Link className={classes.root}><ListItemText primary="Ausbildung" /></Link>
                </ListItem>
            </List>
            </InfoColumn2>

            <InfoColumn2>
             <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <SupervisedUserCircleIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <Link className={classes.root}><ListItemText primary="Kindergarten" /></Link>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <LocalHospitalIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <Link className={classes.root}><ListItemText primary="Krankenversicherung" /></Link>
                </ListItem>
            </List>
            </InfoColumn2>

            <InfoColumn2>
             <List className={classes.root}>
             <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FlagIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <Link className={classes.root}><ListItemText primary="Freiwilligendienst" /></Link>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <SupervisedUserCircleIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <Link className={classes.root}><ListItemText primary="Personalausweis" /></Link>
                </ListItem>                
            </List>
            </InfoColumn2>

            <InfoColumn2>
             <List className={classes.root}>
             <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FlagIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <Link className={classes.root}><ListItemText primary="Blutspende" /></Link>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <SupervisedUserCircleIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <Link className={classes.root}><ListItemText primary="Aufenthaltstitel" /></Link>
                </ListItem>                
            </List>
            </InfoColumn2>

          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}