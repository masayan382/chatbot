import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Noprofile from "../assets/img/no-profile.png";
import Sika from "../assets/img/sika.png";

const Chat = (props) => {
	const isQuetion = props.type === "question";
	const classes = isQuetion ? "p-chat__row" : "p-chat__reverse";
	return (
		<ListItem className={classes}>
			<ListItemAvatar>
				{isQuetion ? (
					<Avatar alt='icon' src={Sika} />
				) : (
					<Avatar alt='icon' src={Noprofile} />
				)}
			</ListItemAvatar>
			<div className='p-chat__bubble'>{props.text}</div>
		</ListItem>
	);
};

export default Chat;
