import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Table ,Input} from "antd";
import { EditOutlined,DeleteOutlined,CalendarOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListMovie } from "../../../HomeTemplate/ListMovie/duck/action";
import { actDeleteMovie } from "./DeleteMovie/action";


export default function ManageMoviePage() {
  const dispatch = useDispatch()
  const onSearch = (value) => {
    dispatch(actFetchListMovie(value))
  };
  const { Search } = Input;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const TableMovie = () => {
    const dispatch = useDispatch()
    const {data} = useSelector(state => state.listMovieReducer)
    useEffect(() => {
      dispatch(actFetchListMovie())
    },[])
    
    console.log(data)
    const columns = [
      {
        title: "Mã",
        dataIndex: "maPhim",
        width:"5%",
        sorter: (a, b) => a.maPhim - b.maPhim,
        sortDirections: ["descend"],
      },
      {
        title: "Hình ảnh",
        dataIndex: "hinhAnh",
        width:"5%",
        render:(text,film) => {return <Fragment>
          <img src={film.hinhAnh} alt={film.tenPhim} style={{width:"70px"}} onError={(e) => {e.target.value = null; e.target.src=`https://picsum.photos/200`}} />
        </Fragment>}
      },
      {
        title: "Tên Phim",
        dataIndex: "tenPhim",
        width:'15%',
        sorter: (a, b) => {
          let tenPhimA = a.tenPhim.toLowerCase().trim();
          let tenPhimB = b.tenPhim.toLowerCase().trim();
          if (tenPhimA > tenPhimB){
            return 1
          } else return -1
        },
        sortDirections: ["descend"],
      },
      {
        title: "Mô tả",
        dataIndex: "moTa",
        width:"15%",
        sorter: (a, b) => {
          let moTa = a.moTa.toLowerCase().trim();
          let moTaB = b.moTa.toLowerCase().trim();
          if (moTa > moTaB){
            return 1
          } else return -1
        },
        render:(text,film) => {return <Fragment>
          {film.moTa.length > 50 ? film.moTa.substr(0,50) + '...' : film.moTa}
        </Fragment>},
        sortDirections: ["descend"],
      },
      {
        title: "Action",
        dataIndex: "",
        width:"10%",
        render:(text,film) => {return <Fragment>
          <NavLink key={1} style={{fontSize:"25px"}} className="text-success mr-3" to={`/admin/manage-movie/edit-movie/${film.maPhim}`}><EditOutlined/></NavLink>
          <NavLink key={3} style={{fontSize:"25px"}} className="text-warning mr-3" to={`/admin/manage-movie/showtime/${film.maPhim}/${film.tenPhim}`} onClick={() => {localStorage.setItem('film',JSON.stringify(film))}}><CalendarOutlined/></NavLink>
          <span  key={2} style={{fontSize:"25px",cursor:"pointer"}} className="text-danger mr-3" to="/" onClick={() => {
            if(window.confirm(`Bạn có muốn xóa phim ${film.tenPhim} không?`)) {
              dispatch(actDeleteMovie(film.maPhim))
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

    return <Table columns={columns} dataSource={dataTable} onChange={onChange} rowKey={"maPhim"} />;
  };

  return (
    <div className="px-3 py-4 container">
      <ol className="breadcrumb mb-4 p-2">
        <li className="breadcrumb-item">
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item active">Manage Movie</li>
      </ol>

      <form className="text-black rounded py-2 text-center bg-white">
        <h2>Quản lí Phim</h2>
        <NavLink to="add-movie">
          <button className="btn btn-success my-3">Thêm mới phim</button>
        </NavLink>
      </form>

      <Search
        className="mb-3"
        placeholder="Search"
        onSearch={onSearch}
        enterButton
      />
      <TableMovie />
    </div>
  );
}
