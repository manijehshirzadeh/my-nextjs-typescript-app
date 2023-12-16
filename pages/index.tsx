import MyAppComponent from "@components/MyAppComponent"
import { Box, Typography } from "@mui/material"
import React from "react"

const HomePage: React.FC = () => {
	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Typography variant="h2">
				My Next.js Application with TypeScript and Redux
			</Typography>
			<Typography variant="h4">Created by Manijeh Shirzadeh</Typography>
			<Typography variant="h5">
				Now it's connected to Vercel Build and Deploy
			</Typography>
			<MyAppComponent />
		</Box>
	)
}

export default HomePage
