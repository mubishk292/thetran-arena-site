import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwiperSlide from './swiper'
import button1 from '../../images/button1.png'
import frontV4 from '../../images/frontV4.png'
import Button from '@mui/material/Button';


export default () => {

    const matches = useMediaQuery('(min-width:950px)');
    const events = ['Special Events', 'Battle Pass', 'Ranking Rewards', 'Quest', 'Guild War', 'Tournament']
    const buttons = ['EXCHANGE', 'TRADE', 'THETAN BOX']

    return <Box style={{ backgroundColor: '#13101E' }}>

        <Grid data-aos="fade-down" container px={matches ? 42 : 10} py={15}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Grid item>
                <img src='/images/NETSITEM.png' style={{ width: '100%', maxWidth: '70%' }} />
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

        <Grid container  >
            <SwiperSlide />
        </Grid>

        <Grid data-aos="fade-down" container px={matches ? 42 : 5}
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
            <Grid item>
                <img src='/images/WHATSTHETANCOIN.png' style={{ width: '100%', maxWidth: '70%' }} />
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

        <Grid pt={20} pb={5} container sx={{
            backgroundImage: matches ? `url(${frontV4})` : 'none',
            backgroundRepeat: 'no-repeat'
        }}>
            <Grid item pr={matches ? 33 : 8} xs={6} >
                <Box data-aos="fade-right" sx={{
                    color: 'white',
                    fontSize: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                }}>
                    {
                        events.map((event, index) => {
                            return <Box pt={3} key={index}>
                                {event}
                            </Box>
                        })
                    }
                </Box>


            </Grid>
            <Grid item xs={6} pl={matches ? 40 : 10} pt={4}>
                <Box data-aos="fade-left" pt={2} sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    color: 'white',
                    height: '100%'
                }}>
                    {
                        buttons.map((button, index) => {
                            return <Button key={index} variant='contained'
                                sx={{
                                    width: { md: '140px',  xs: '100px' },
                                    background: 'linear-gradient(180deg, #FFDC1F 0%, #ED1515 100%)'
                                }}
                            >
                                {button}
                            </Button>
                        })
                    }
                </Box>
            </Grid>
        </Grid>
    </Box>
}