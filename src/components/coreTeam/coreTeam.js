import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import bg3 from '../../images/bg4.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import recGrey from '../../images/recGrey.png'
import recGreen from '../../images/recGreen.png'
import { useState } from 'react';
export default () => {
    const matches = useMediaQuery('(min-width:950px)');


    return <Box style={{
        backgroundImage: `url(${bg3}) ,  linear-gradient(rgba(0,0,0,0.90), rgba(0,0,0,0.90))`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat'
    }}>
        <Grid container px={10} pt={18} justifyContent='center'>
            <Grid item >
                <Box data-aos="fade-down" sx={{
                    fontFamily: 'Metal Mania',
                    fontSize: { md: '64px', xs: '45px' },
                    fontStyle: 'normal',
                    fontWeight: '400',
                    textAlign: 'left',
                    color: '#61BE4F',
                }}>
                    WHAT'S THETAN GAM
                </Box>
            </Grid>
        </Grid>

        <Grid container spacing={1} p={5}>
            <Grid item lg={4} md={4} sm={6} xs={6} xl={'auto'}>
                <Box pt={9} sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'space-evenly',
                    color: 'white',
                    height: '80%'

                }}>
                    <Button variant='contained' sx={{ width: { md: '180px', xs: '120px' }, backgroundColor: '#61BE4F' }}>
                        FREE TO ERAN
                    </Button>
                    <Button variant='contained' sx={{ backgroundColor: '#61BE4F', width: { md: '180px', xs: '120px' }, }}>
                        MARKET
                    </Button>
                </Box>
            </Grid>
            <Grid xs={4} sx={{ display: matches ? true : 'none' }} >
                <img src='/images/bg3.png' />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6} xl={'auto'}>
                <Box pt={9} sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-evenly',
                    color: 'white',
                    height: '80%'
                }}>
                    <Button variant='contained' sx={{ width: { md: '180px', xs: '120px' }, backgroundColor: '#61BE4F' }}>
                        EVOLVE HEROES
                    </Button>
                    <Button variant='contained' sx={{ backgroundColor: '#61BE4F', width: { md: '180px', xs: '120px' }, }}>
                        STAKING
                    </Button>
                </Box>
            </Grid>
        </Grid>

        <Grid data-aos="fade-down" container px={matches ? 42 : 5} py={10}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Grid item>
                <Box sx={{
                    fontFamily: 'Metal Mania',
                    fontSize: { md: '64px', xs: '45px' },
                    fontStyle: 'normal',
                    fontWeight: '400',
                    textAlign: 'left',
                    color: '#61BE4F',
                }}>
                    CORE TEAM
                </Box>
            </Grid>
            <Grid item  >
                <div style={{
                    fontSize: '18px',
                    padding: '10px 0',
                    color: 'white'
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
            </Grid>
        </Grid>

        <Grid container px={5} pb={5} spacing={2} justifyContent='center' >
            {
                [0, 1, 2, 3, 4, 5].map((value, index) => {
                    return <Grid item key={index} p={1} lg={2} md={3} sm={5} xs={5} xl={'auto'}>
                        <ElemenstsBoxes />
                    </Grid>
                })
            }
        </Grid>
    </Box>

}

const ElemenstsBoxes = ({ value }) => {
    let [image, setImage] = useState(false);
    const matches = useMediaQuery('(min-width:950px)');

    return (
        <Box mt={-2} pb={2}
            onMouseEnter={() => setImage(true)}
            onMouseLeave={() => setImage(false)}
            sx={{
                color: 'white',
                transform: image ? 'scale(1.1)' : true,
                backgroundImage: image ? `url(${recGreen})` : `url(${recGrey})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: image ? '115% 110%' : `${matches ? '100%' : '125%'}  100%`,
            }}
        >
            <Box pl={4} sx={{ fontSize: { md: image ? '12px' : '14px', sx: '12px' } }}>
                <img src={image ? `/images/ellipseGreen.png` : `/images/ellipseGrey.png`}
                    style={{
                        width: '100%', maxWidth: image ? '60%' : '70%',
                        paddingLeft : image ? 'none' : '10%',
                    }}

                />

                <Box sx={{ fontWeight: 'bold' }}>
                    Name Here
                </Box>
                <Box>
                    Destination Here
                </Box>
            </Box>
        </Box>
    )
}