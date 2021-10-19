import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow/SidebarRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from "./../../StateProvider"
function Sidebar() {
    const [{user} , dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} 
            title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID 19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Massenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title="Marketplace"/>

            {/* هنا انتا بتبعت الكومبونانت ك خاصيه بدلا من كتبابه  <FlagIcon fontSize="large"/>  */}
            {/* توفير وقت وكمان ممكن تبعتها مع بروبس اخري مفيده  */}
            {/* بدل متعمل ديف وتستدعي كومبونانت الصوره وتكتب برجراف اذا فيه وتبعت صوره كل هذا غير موجود مع pass component as a props */}

        </div>
    )
}

export default Sidebar
