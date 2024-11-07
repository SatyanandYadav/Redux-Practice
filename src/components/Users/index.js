import { connect, useSelector } from "react-redux";
import { fetchUsers, nextPage, searchUser } from "../../actions/user";
import { useEffect, useState } from "react";
import { createSelector } from "reselect";

const Users = ({ user, fetchUsers, nextPage, searchUser }) => {

  const [ inputVal, setInputVal] = useState('');

  useEffect(() => {
    fetchUsers(user.pageNumber, user.search, user.pageLimit);
  }, [user.pageNumber, user.search]);

  console.log(Array.apply(null, { length: user.pagination}), user.pagination);

  const user1 = useSelector((state) => state.user);
  const user2 = useSelector((state) => state.user);

  // console.log(user1.loading === user2.loading);

  //   if (user.loading || user.error) {
  //   return <div>{user.loading ? "Loading..." : user.error}</div>;
  // }

  return (
    <div>
      <div>Users</div>
       <input value={inputVal} placeholder="Search user by name" onChange={(e) => {
         console.log(e.target.value);
         setInputVal(e.target.value);
         let timeoutId = null;
         const debounceFn = () => {
          if(timeoutId) clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            searchUser(e.target.value);
          }, 300);

        }
        debounceFn();

       }} />
      { (user.loading || user.error) ? <div>{user.loading ? "Loading..." : user.error}</div>:
      <div>
        {user.users.length ? user.users.map((userData) => (
          <div key={userData.id}>{`${userData.name}(${userData.username})`}</div>
        )) : <div> No Items to show</div>}
      </div>}
      <div>
        {Array.apply(null, { length: user.pagination}).map((_, index) => {
            return <button onClick={ () => {
              nextPage(index + 1);
              // fetchUsers(index + 1);
            }}>{index + 1}</button>
        })}
      </div>
    </div>
  );
};

const getUserList = createSelector(
  (state) => state.user.users,
  // state => state.count,
  (users) => {
    console.log("Test", users);
    return users.map((data) => ({ id: data.id, name: data.name, username: data.username }));
  }
);

const mapStateToProps = (state) => {
  console.log("Run", state.user);
  return {
    user: {
      ...state.user,
      users: getUserList(state),
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (page = 1, search = '', pageLimit = 2) => dispatch(fetchUsers(page,search, pageLimit)),
    nextPage: (page) => dispatch(nextPage(page)),
    searchUser: (searchVal) => dispatch(searchUser(searchVal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
