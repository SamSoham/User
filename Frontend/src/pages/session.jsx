import { Stack, Typography } from "@mui/material";


export default function Session(){
    return(
        <Stack direction="row" gap="24px" height="93vh">
            <Stack sx={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",padding:"16px"}}>
                <Typography variant="h6" color="initial">Video from Session 1</Typography>
            </Stack>
        <Stack sx={{gap:"24px",padding:"24px"}}>
        <iframe width="460" height="315" src="https://www.youtube.com/embed/MduZa4ZBbaQ?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
        <iframe width="460" height="315" src="https://www.youtube.com/embed/_fWyWcZB7VA?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Stack>
        </Stack>
    )
}