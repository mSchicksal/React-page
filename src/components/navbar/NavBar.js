const NavBar = ({users}) => {
    return (
        <div class="navbar row">
            <div class="col-6 left">
                <span>Home</span>
                <span>Item 1</span>
                <span>Item 2</span>
            </div>
            <div class="col-6 right">
                {/* <span>{user}</span> */}
                <div class="avatar">
                    {/* <img src={user[0].icon} alt="Profile"/> */}
                </div>
            </div>
        </div>
    );
}

export default NavBar;