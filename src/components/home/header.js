import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import Draw from './draw'

export default function BasicGrid() {

    const matchesNew = useMediaQuery('(min-width:2732px)');

    const pages = ['Home', 'Game', 'NFTs'];
    const pages1 = ['Team', 'RoadMap', 'Partner'];
    const smallPage = [...pages, ...pages1]

    return (<Box >

        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'row', }}>
            <Box sx={{ flexGrow: 1, }}>
                <Draw data={smallPage} />
            </Box>
            <Box pt={2} sx={{ alignItems: "center" }}>
                <img src='/images/flower.png' style={{ width: "35%" }} />
            </Box>
        </Box>

        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item xs={4}  >
                <Box sx={{
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'space-around',
                }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                             sx={{ fontSize: '20px', py: 3, color: 'white', display: 'block' }}
                        >
                            <a href={`#${page.toLowerCase()}`} style={{textDecoration : 'none'}}>
                                {page}
                            </a>
                        </Button>
                    ))}
                </Box>
            </Grid>
            <Grid item xs={4} >
                <Box sx={{ display: { xs: 'none', md: 'flex', }, justifyContent: 'space-between' }}>
                    <img src='/images/frontV.png' style={{ width: matchesNew ? true : '108%' }} />
                </Box>
            </Grid>
            <Grid item xs={4} >
                <Box sx={{
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'space-around',
                }}>
                    {pages1.map((page) => (
                        <Button
                            key={page}
                            sx={{ fontSize: '20px', py: 2, color: 'white', display: 'block' }}
                        >
                            <a href={`#${page.toLowerCase()}`} style={{textDecoration : 'none'}}>
                                {page}
                            </a>
                        </Button>
                    ))}
                </Box>
            </Grid>
        </Grid>
    </Box>

    );
}
