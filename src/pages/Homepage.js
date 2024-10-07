import React from 'react'
import {Box,Typography,Card,Stack} from "@mui/material"
import {useNavigate} from "react-router-dom"
import DescriptionRounded from '@mui/icons-material/DescriptionRounded'
import FormatAlignLeftOutlined from '@mui/icons-material/FormatAlignLeftOutlined'
import ChatRounded from '@mui/icons-material/ChatRounded'

const Homepage = () => {
    const navigate = useNavigate()
    return (
        <>
        <Box sx={{display:'flex',flexDirection:'row'}}>
        <Box p={2}>
            <Typography variant='h4' mb={2} fontWeight="bold">
                Text Generation
            </Typography>
            <Card onclick={()=>navigate('/summary')}
             sx={{boxShadow:2, borderRadius:5,height:190,width:200,'&:hover':{border:2,boxShadow:0,borderColor:"primary.dark", cursor:'pointer'} }}   
             >
            <DescriptionRounded sx={{fontSize:80, color:'primary.main', mt:2,ml:2}}/>
            <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant='h5'>TEXT SUMMARY</Typography>
            <Typography variant='h6'>Summarize long text into short sentences</Typography>
            </Stack>
            </Card>
        </Box>
        <Box p={2}>
            <Typography variant='h4' mb={2} fontWeight="bold">
                Paragraph Generation
            </Typography>
            <Card onclick={()=>navigate('/paragraph')}
             sx={{boxShadow:2, borderRadius:5,height:190,width:200,'&:hover':{border:2,boxShadow:0,borderColor:"primary.dark", cursor:'pointer'} }}   
             >
            <FormatAlignLeftOutlined sx={{fontSize:80, color:'primary.main', mt:2,ml:2}}/>
            <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant='h5'>Paragraph</Typography>
            <Typography variant='h6'>Generate paragarph with words</Typography>
            </Stack>
            </Card>
        </Box>

        <Box p={2}>
            <Typography variant='h4' mb={2} fontWeight="bold">
              AI ChatBot 
            </Typography>
            <Card onclick={()=>navigate('/chatbot')}
             sx={{boxShadow:2, borderRadius:5,height:190,width:200,'&:hover':{border:2,boxShadow:0,borderColor:"primary.dark", cursor:'pointer'} }}   
             >
            <ChatRounded sx={{fontSize:80, color:'primary.main', mt:2,ml:2}}/>
            <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant='h5'>ChatBot</Typography>
            <Typography variant='h6'>Chat with Ai chatbox</Typography>
            </Stack>
            </Card>
        </Box>

        <Box p={2}>
            <Typography variant='h4' mb={2} fontWeight="bold">
                JavaScript Convertor
            </Typography>
            <Card onclick={()=>navigate('/js-convertor')}
             sx={{boxShadow:2, borderRadius:5,height:190,width:200,'&:hover':{border:2,boxShadow:0,borderColor:"primary.dark", cursor:'pointer'} }}   
             >
            <ChatRounded sx={{fontSize:80, color:'primary.main', mt:2,ml:2}}/>
            <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant='h5'>Js Convertor</Typography>
            <Typography variant='h6'>Translate English to javascript code</Typography>
            </Stack>
            </Card>
        </Box>
         
        <Box p={2}>
            <Typography variant='h4' mb={2} fontWeight="bold">
                AI SCIFI Images
            </Typography>
            <Card onclick={()=>navigate('/scifi-image')}
             sx={{boxShadow:2, borderRadius:5,height:190,width:200,'&:hover':{border:2,boxShadow:0,borderColor:"primary.dark", cursor:'pointer'} }}   
             >
            <ChatRounded sx={{fontSize:80, color:'primary.main', mt:2,ml:2}}/>
            <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant='h5'>Scifi Image</Typography>
            <Typography variant='h6'>Generate Scifi Images</Typography>
            </Stack>
            </Card>
        </Box>

        </Box>
        </>
    )
}

export default Homepage