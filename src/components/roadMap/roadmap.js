import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import roadmap from '../../images/ROADMAP.png'
import SwiperSlider from './swiper'

export default () => {
    const matches = useMediaQuery('(min-width:1150px)');

    return <Box sx={{ backgroundColor: '#13101E', color: 'white' }}>

        <Box data-aos="fade-right" p={matches ? 15 : 2}>
            <img src='/images/ROADMAP_LOGO.png' />
        </Box>

        <Grid container pb={10} spacing={3} justifyContent='center' sx={{
        }}>
            <Grid  >
                <img src='/images/ROADMAP.png' style={{
                    position: 'relative',
                    width: '100%'
                }} />
            </Grid>

            <Box sx={{ display: matches ? true : 'none' }}>

                <Grid item xs={1} sx={{
                    position: 'absolute',
                    left: '10%',
                    marginTop: '30%',
                }}>
                    <Box>
                        Q3 2021
                    </Box>
                </Grid>

                <Grid item xs={1} sx={{
                    position: 'absolute',
                    left: '24%',
                    marginTop: '25%',
                }}>
                    <Box>
                        Q4 2021
                    </Box>
                </Grid>

                <Grid item xs={1} sx={{
                    position: 'absolute',
                    left: '38%',
                    marginTop: '21%',
                }}>
                    <Box>
                        Q1 2022
                    </Box>
                </Grid>

                <Grid item xs={1} sx={{
                    position: 'absolute',
                    left: '52%',
                    marginTop: '17%',
                }}>
                    <Box>
                        Q2 2022
                    </Box>
                </Grid>

                <Grid item xs={1} sx={{
                    position: 'absolute',
                    right: '29%',
                    marginTop: '13%',
                }}>
                    <Box>
                        Q3 2022
                    </Box>
                </Grid>

                <Grid item xs={1} sx={{
                    position: 'absolute',
                    right: '16%',
                    marginTop: '9%',
                }}>
                    <Box>
                        Q4 2022
                    </Box>
                </Grid>

                <Grid item xs={1} sx={{
                    position: 'absolute',
                    right: '2%',
                    marginTop: '5%',
                }}>
                    <Box>
                        Q1 2023
                    </Box>
                </Grid>
            </Box>

        </Grid>
        <Container maxWidth="lg">
            <Grid container>
                <Grid data-aos="fade-right" item md={6} xs={12}>
                    <SwiperSlider />
                </Grid>
                <Grid data-aos="fade-left" item md={6} xs={12} >
                    <img src='/images/hand.png' style={{width : matches ? true : '90%',}}   />
                </Grid>
            </Grid>
        </Container>

    </Box>
}