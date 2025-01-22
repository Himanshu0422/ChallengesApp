import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { navItems } from '../utils/navItems';

export default function Sidebar() {
	const [open, setOpen] = useState(false);
	const [expanded, setExpanded] = useState(null);
	const navigate = useNavigate();

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const handleExpand = (index) => {
		setExpanded(expanded === index ? null : index);
	};

	return (
		<div>
			<IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu">
				<MenuIcon />
			</IconButton>
			<Drawer
				open={open}
				onClose={toggleDrawer(false)}
				anchor="left"
				PaperProps={{
					sx: {
						backgroundColor: '#1a202c',
						color: '#ffffff',
					},
				}}
			>
				<Box sx={{ width: 250 }} role="presentation">
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							padding: 2,
						}}
					>
						<IconButton onClick={toggleDrawer(false)} color="inherit">
							<CloseIcon />
						</IconButton>
					</Box>
					<List>
						{navItems.map((item, index) => (
							<React.Fragment key={item.text}>
								<ListItem disablePadding>
									<ListItemButton
										sx={{
											'&:hover': { backgroundColor: '#2d3748' },
										}}
										onClick={() => {
											item.action ? item.action() : item.subItems ? handleExpand(index) : navigate(item.route)
										}}
									>
										<ListItemIcon>
											<img
												src={item.icon}
												alt={item.text}
												style={{
													width: 25,
													height: 25,
													filter: "invert(100%)", // Makes the image white
												}}
											/>
										</ListItemIcon>
										<ListItemText>
											<Typography variant="body1">{item.text}</Typography>
										</ListItemText>
									</ListItemButton>
								</ListItem>
								{item.subItems && (
									<Collapse in={expanded === index} timeout="auto" unmountOnExit>
										<List component="div" disablePadding>
											{item.subItems.map((subItem) => (
												<ListItem key={subItem.text} disablePadding>
													<ListItemButton
														sx={{
															pl: 4,
															'&:hover': { backgroundColor: '#3c475c' },
														}}
														onClick={() => navigate(subItem.route)}
													>
														<ListItemText>
															<Typography variant="body2">{subItem.text}</Typography>
														</ListItemText>
													</ListItemButton>
												</ListItem>
											))}
										</List>
									</Collapse>
								)}
							</React.Fragment>
						))}
					</List>
					<Divider sx={{ backgroundColor: '#2d3748', marginY: 2 }} />
					<Box sx={{ textAlign: 'center', padding: 2 }}>
						<Typography variant="body2" color="gray">
							© 2024 Challenges App
						</Typography>
					</Box>
				</Box>
			</Drawer>
		</div>
	);
}
