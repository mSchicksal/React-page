import UserTables from "../tables/UserTables";

const Body = ({users}) => {
    return (
        <div class="body row">
            <div class="col-4">
                <UserTables users={users}></UserTables>
            </div>
            <div class="col-4">
                {/* <UserTables users={users}></UserTables> */}
            </div>
            <div class="col-4">
                {/* <UserTables users={users}></UserTables> */}
            </div>
        </div>
    );
}

export default Body;