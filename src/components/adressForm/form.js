import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CountUp from 'react-countup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';


export default () => {
    const matches = useMediaQuery('(min-width:1150px)');

    return (
        <Box sx={{
            background: 'linear-gradient(180deg, #6ED559 0%, #2B5B29 100%)',
        }}>
            <Container maxWidth='lg'>
                <Grid container pb={3} spacing={0} >
                    <Grid item lg={6} md={6} sm={12} xs={12} xl={'auto'}>
                        <Box data-aos="fade-right" 
                            pt={5} pl={matches ? 10 : 3} pr={matches ? 15 : 5}>

                            <Box sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                $TEG Contract Address
                            </Box>

                            <Stack
                                py={{ md: 1, xs: 0 }}
                                sx={{
                                    color: 'white',
                                    backgroundColor: '#FFFFFF33',
                                    backgroundSize: 'cover'
                                }}
                                direction={{ md: "row", xs: 'column' }}
                                divider={<Divider color='white' sx={{
                                    display: { xs: 'none', md: 'flex' }
                                }} orientation="vertical" flexItem />}
                                spacing={2}
                            >
                                <Box pl={1}>BEP20</Box>
                                <Box pl={{ xs: 1, md: 0 }} >0*9FDDHGSFJHDKJHFHU6R</Box>
                            </Stack>

                            <Stack
                                mt={1} py={{ md: 1, xs: 0 }}
                                sx={{
                                    color: 'white',
                                    backgroundColor: '#FFFFFF33',
                                    backgroundSize: 'cover'
                                }}
                                direction={{ md: "row", xs: 'column' }}
                                divider={<Divider color='white' sx={{
                                    display: { xs: 'none', md: 'flex' }
                                }} orientation="vertical" flexItem />}
                                spacing={2}
                            >
                                <Box pl={1}>KRC20</Box>
                                <Box pl={{ xs: 1, md: 0 }} >0*328UYJY7RE4DG8U854579</Box>
                            </Stack>

                            <Box pt={2} sx={{ fontSize: { md: '16px', xs: '12px' }, fontWeight: 'bold' }}>
                                $THC Contract Address
                            </Box>

                            <Stack
                                mt={1} py={{ md: 1, xs: 0 }}
                                sx={{
                                    color: 'white',
                                    backgroundColor: '#FFFFFF33',
                                    backgroundSize: 'cover'
                                }}
                                direction={{ md: "row", xs: 'column' }}
                                divider={<Divider color='white' sx={{
                                    display: { xs: 'none', md: 'flex' }
                                }} orientation="vertical" flexItem />}
                                spacing={2}
                            >
                                <Box pl={1}>BEP20</Box>
                                <Box pl={{ xs: 1, md: 0 }} >FEF.MGCYTYHSRTERTYUY</Box>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item lg={5} md={6} sm={12} xs={12} xl={'auto'}>
                        <Box data-aos="fade-left"
                            pt={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                            <Box  >
                                <img src='/images/TOTAL PLAYERS.png' />
                            </Box>
                            <Box sx={{
                                color: 'white',
                                fontSize: { md: '48px', xs: '30px' },
                                backgroundColor: '#FFFFFF33',
                                backgroundSize: 'cover',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}>
                                <CountUp start={0} end={2670683} duration={2} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}