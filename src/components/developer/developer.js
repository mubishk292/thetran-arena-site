import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import bg3 from '../../images/bg4.png'
import { FaDiscord, FaInstagram, FaTelegram, FaFacebook, FaReddit } from 'react-icons/fa';
import Container from '@mui/material/Container';

export default () => {
    const matches = useMediaQuery('(min-width:1150px)');
    let array1 = ['Home', 'Game', 'NFTs', 'Roadmap', 'Team', 'Partner']
    let array2 = ['Company', 'About', 'Terms and Conditions', 'Privacy Policy']
    let array3 = ['Platform', 'Support', 'Blog', 'Documentation']


    return <Box pt={3} sx={{ backgroundColor: '#13101E', color: 'white' }}>
        <Box data-aos="fade-down" display="flex" justifyContent="center">
            <img src='/images/DEVELOPER.png' style={{ width: matches ? true : '70%' }} />
        </Box>
        <Box data-aos="fade-down" sx={{
            backgroundColor: '#0E0C16',
            boxShadow: '0px 4px 6px #000000',
            width: 'fit-content',
            margin: 'auto',
            marginTop: '5%',
            maxHeight: '40%'

        }}>
            <img src='/images/mylogo0.png' />
        </Box>
        <Box data-aos="fade-down" mt={5} display="flex" justifyContent="center">
            <img src='/images/INVESTORPARTNER.png' style={{ width: matches ? true : '80%' }} />
        </Box>

        <Grid pb={30} data-aos="fade-up" container justifyContent='center' spacing={2} mt={5}>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num, index) => {
                    return <Grid item
                        key={index} m={2}
                        lg={2} md={3} sm={4} xs={4} xl={'auto'}
                    >
                        <Box mt={5} p={3} sx={{
                            backgroundColor: '#0E0C16',
                            boxShadow: '0px 4px 6px #000000',
                            maxHeight: '40%',
                        }}>
                            <img src={`/images/mylogo${num}.png`} style={{ width: matches ? 'none' : '95%', }} />
                        </Box>
                    </Grid>
                })
            }
        </Grid>

        <Box sx={{ position: 'relative' }}>
            <Container maxWidth='lg'>
                <Grid container
                    sx={{
                        position: 'absolute',
                        left: 0,
                        margin: 'auto',
                        top: { xs: '-15%', md: '-65%', lg: '-75%' }
                    }}
                >
                    <Grid data-aos="fade-right" item xs={6} >
                        <img src='/images/leftHand.png' style={{ width: matches ? 'none' : '100%' }} />
                    </Grid>

                    <Grid data-aos="fade-left" item xs={6} >
                        <img src='/images/rightHand.png' style={{ width: matches ? 'none' : '100%' }} />
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{
                backgroundImage: `url(${bg3}) ,  linear-gradient(rgba(0,0,0,0.90), rgba(0,0,0,0.90))`,
                backgroundSize: "100% 100%",
                backgroundRepeat: 'no-repeat'

            }}>
                <Container maxWidth='lg'>
                    <Grid container py={5} justifyContent='center'>
                        <Grid pt={20} item xs={6} display='flex' justifyContent='center'>
                            <Box data-aos="fade-down">
                                <Box >
                                    <img src='/images/flower.png' />
                                </Box>
                                <Box mt={2} sx={{ fontWeight: 'bold' }}>
                                    LOGONAME HERE
                                </Box>
                                <Box mt={2}>
                                    <FaInstagram style={{ paddingLeft: '2' }} />
                                    <FaFacebook style={{ paddingLeft: '2' }} />
                                    <FaReddit style={{ paddingLeft: '2' }} />
                                    <FaDiscord style={{ paddingLeft: '2' }} />
                                    <FaTelegram />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid data-aos="fade-down" item pt={20} md={2} xs={6} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { md: 'flex-start', xs: 'center' }
                        }}>
                            {
                                array1.map((value, index) => {
                                    return <Box pt={2}>
                                        {value}
                                    </Box>
                                })
                            }
                        </Grid>
                        <Grid data-aos="fade-down" item pt={20} md={2} xs={6} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { md: 'flex-start', xs: 'center' }
                        }}>
                            {
                                array2.map((value, index) => {
                                    return <Box pt={2}>
                                        {value}
                                    </Box>
                                })
                            }
                        </Grid>
                        <Grid data-aos="fade-down" item pt={20} md={2} xs={6} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { md: 'flex-start', xs: 'center' }
                        }}>
                            {
                                array3.map((value, index) => {
                                    return <Box pt={2}>
                                        {value}
                                    </Box>
                                })
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>

        <Box py={2} sx={{
            backgroundColor: '#0E0C16',
            textAlign: 'center'
        }}>
            Copyright © 2021 webname Limited
        </Box>
    </Box>
}