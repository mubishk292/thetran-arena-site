import bg6 from '../../images/bg6.png'
import bg3 from '../../images/bg3.png'
import Header from './header'
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';

export default () => {
    const matches = useMediaQuery('(min-width:950px)');


    return <Box style={{
        backgroundImage: matches ? `url(${bg6})` : `url(${bg3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    }}>
        <Box px={1} pt={{ xs: 2, md: 0 }} >
            <Header />
            <Box pl={matches ? 5 : 1}>
                <Box data-aos="fade-right"
                    pt={20} sx={{
                        fontFamily: 'Metal Mania',
                        fontSize: { md: '129px', xs: '75px' },
                        fontStyle: 'normal',
                        fontWeight: '400',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: 'white',
                    }}>
                    <Box>
                        THETRAN
                    </Box>
                    <Box>
                        ARENA
                    </Box>
                </Box>
                <Box data-aos="fade-right"
                    sx={{
                        color: 'white',
                        fontSize: { md: '24px', xs: '16px' },
                        fontStyle: 'normal',
                        fontWeight: '400 , Regular',
                        justifyContent: 'start',
                        maxWidth: '570px',
                        padding: '10px 0',
                        background: matches ? 'none' : 'rgba(0,0,0,0,25)',
                        backdropFilter: matches ? 'none' : 'blur(2px)'
                    }}>
                    Lorem Ipsum is simply dummy text of the printing  and typesetting  industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Box>
                <Box data-aos="fade-right" py={6} sx={{
                    color: '#5D5FEF',
                    fontSize: { md: '24px', xs: '16px' },
                    fontWeight: 'bold'
                }}>
                    #ThetenArena #MobaNFT #FreeToPlay BattleToEran
                </Box>
            </Box>
        </Box>
    </Box>

}