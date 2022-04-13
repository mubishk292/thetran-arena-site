import bg2 from '../../images/bg2.png'
import frontV from '../../images/frontV5.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';

export default () => {
    const matches = useMediaQuery('(min-width:950px)');

    return <Box style={{
        backgroundImage: `url(${bg2}) ,  linear-gradient(rgba(0,0,0,0.90), rgba(0,0,0,0.90))`,
        backgroundBlendMode: 'darken',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}>
        <Grid container data-aos="fade-down" px={matches ? 42 : 5} pt={15}
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
            <Grid item>
                <Box>
                    <img src='/images/GAMEPLAY.png' />
                </Box>
            </Grid>
            <Grid item  >
                <Box style={{
                    fontSize: '18px',
                    padding: '10px 0',
                    color: 'white'
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Box>
            </Grid>
        </Grid>

        <Grid container pb={matches ? 10 : 3} pt={matches ? 23 : 8} px={matches ? 10 : 2} justifyContent='center' sx={{
            backgroundImage: matches ? `url(${frontV})` : 'none',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'

        }}>
            <Grid item data-aos="fade-right" lg={5} md={6} sm={12} xs={12} sx={{}}>
                <Box >
                    <img src='/images/handPhone.png' width={matches ? 'true' : '90%'} />
                </Box>
            </Grid>

            <Grid data-aos="fade-left" item lg={5} md={6} sm={12} xs={12} sx={{
                color: 'white'
            }}>
                <Box sx={{
                    fontSize: matches ? '48px' : '30px',
                    fontWeight: 'bold',
                }}>
                    <Box>
                        BATTLE ROYALE
                    </Box>
                    <Box>
                        Solo-Duo
                    </Box>
                </Box>
                <Box sx={{
                    fontSize: '18px',
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Box>
            </Grid>
        </Grid>
    </Box>
}