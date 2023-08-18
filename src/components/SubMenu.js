import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Sidebar.css";

const SidebarLink = styled(Link)`
display: flex;
background: #068fffa6;
color: white;
justify-content: space-between;
align-items: center;
padding: 17px;
list-style: none;
height: 50px;
text-decoration: none;
font-size: 18px;
margin-bottom: 1rem;
border-radius: 10px;

&:hover {
	background: gray;
	// border-left: 4px solid green;
	cursor: pointer;
}
`;

const SidebarLabel = styled.span`
margin-left: 13px;
`;

const DropdownLink = styled(Link)`
background: #252831;
height: 60px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 18px;

// &:hover {
// 	background: green;
// 	cursor: pointer;
// }
`;

const SubMenu = ({ item }) => {
const [subnav, setSubnav] = useState(false);

const showSubnav = () => setSubnav(!subnav);

return (
	<>
	<SidebarLink to={item.path} className="menu-link"
	onClick={item.subNav && showSubnav}>
		<div style={{display:"flex"}} className="icon-div">
		{item.icon}
		<SidebarLabel>{item.title}</SidebarLabel>
		</div>
		<div>
		{item.subNav && subnav
			? item.iconOpened
			: item.subNav
			? item.iconClosed
			: null}
		</div>
	</SidebarLink>
	{subnav &&
		item.subNav.map((item, index) => {
		return (
			<DropdownLink to={item.path} key={index}>
			{item.icon}
			<SidebarLabel>{item.title}</SidebarLabel>
			</DropdownLink>
		);
		})}
	</>
);
};

export default SubMenu;
