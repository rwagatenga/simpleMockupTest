import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import styles from "assets/jss/material-dashboard-react/components/customInputStyle.js";

const useStyles = makeStyles(styles);

export default function FormInputs (props) {
	const [name, setName] = React.useState(props);
	const [state, setState] = React.useState({
		oldPassword: '',
		newPassword: '',
		passwordConfirm: ''
	});
	// React.useEffect(() => {
	// 	setName(props);
	// }, []);
	return (
		<GridContainer>
      <GridItem xs={12} sm={12} md={7}>
				<FormControl>
					<InputLabel>Old Password</InputLabel>
					<Input
					name="oldPassword"
					value={name.values.firstName}/>
				</FormControl>
			</GridItem>
			<GridItem xs={12} sm={12} md={7}>
				<FormControl>
					<InputLabel>New Passowrd</InputLabel>
					<Input
					name="newPassword"
					value={state.newPassword}/>
				</FormControl>	
			</GridItem>	
    </GridContainer>
	)
}