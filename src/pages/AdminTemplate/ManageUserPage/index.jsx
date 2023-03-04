import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Table ,Input} from "antd";
import { EditOutlined,DeleteOutlined,CalendarOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListUser } from "./ListUser/action";
import { actDeleteUser } from "./DeleteUser/action";

export default function ManageUserPage() {
  const dispatch = useDispatch()
  const onSearch = (value) => {
    dispatch(actFetchListUser(value))
  };
  const { Search } = Input;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const TableUser = () => {
    const dispatch = useDispatch()
    const {data} = useSelector(state => state.listUserReducer)
    useEffect(() => {
      dispatch(actFetchListUser())
    },[])
    
    console.log(data)
    const columns = [
      {
        title: "STT",
        dataIndex: "index",
        width:"5%",
        render:(text,record,index) => index + 1,
        sortDirections: ["descend"],
      },
      {
        title: "Tài khoản",
        dataIndex: "taiKhoan",
        width:"5%",
        sorter: (a, b) => {
          let taiKhoan = a.taiKhoan.toLowerCase().trim();
          let taiKhoanB = b.taiKhoan.toLowerCase().trim();
          if (taiKhoan > taiKhoanB){
            return 1
          } else return -1
        },
        render:(text,user) => {return <Fragment>
          {user.taiKhoan}
        </Fragment>}
      },
      {
        title: "Mật khẩu",
        dataIndex: "matKhau",
        width:'10%',
        sortDirections: ["descend"],
      },
      {
        title: "Họ tên",
        dataIndex: "hoTen",
        width:"10%",
        sorter: (a, b) => {
          let hoTen = a.hoTen.toLowerCase().trim();
          let hoTenB = b.hoTen.toLowerCase().trim();
          if (hoTen > hoTenB){
            return 1
          } else return -1
        },
        render:(text,user) => {return <Fragment>
          {user.hoTen}
        </Fragment>},
        sortDirections: ["descend"],
      },
      {
        title: "Email",
        dataIndex: "email",
        width:"15%",
        render:(text,user) => {return <Fragment>
          {user.email}
        </Fragment>},
        sortDirections: ["descend"],
      },
      {
        title: "Số điện thoại",
        dataIndex: "soDT",
        width:"10%",
        render:(text,user) => {return <Fragment>
          {user.soDT}
        </Fragment>},
        sortDirections: ["descend"],
      },
      {
        title: "Action",
        dataIndex: "",
        width:"10%",
        render:(text,user) => {return <Fragment>
          <NavLink key={1} style={{fontSize:"25px"}} className="text-success mr-3" to={`/admin/manage-user/edit-user/${user.taiKhoan}`}><EditOutlined/></NavLink>
          <span  key={2} style={{fontSize:"25px",cursor:"pointer"}} className="text-danger mr-3" to="/" onClick={() => {
            if(window.confirm(`Bạn có muốn xóa ${user.taiKhoan} không?`)) {
             dispatch(actDeleteUser(user.taiKhoan))
            }
          }}><DeleteOutlined/></span>
        </Fragment>},
        sortDirections: ["descend"],
      },
    ];

    const dataTable = data;

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
      console.log("selectedRowKeys changed: ", newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };

    return <Table columns={columns} dataSource={dataTable} onChange={onChange} rowKey={"taiKhoan"} />;
  };

  return (
    <div className="px-3 py-4">
      <ol className="breadcrumb mb-4 p-2">
        <li className="breadcrumb-item">
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item active">Manage User</li>
      </ol>

      <form className="text-black rounded py-2 text-center bg-white">
        <h2>Quản lí Người dùng</h2>
        <NavLink to="add-user">
          <button className="btn btn-success my-3">Thêm mới người dùng</button>
        </NavLink>



      </form>

      <Search
        className="mb-3"
        placeholder="Search"
        onSearch={onSearch}
        enterButton
      />
      <TableUser />
    </div>
  );
}
